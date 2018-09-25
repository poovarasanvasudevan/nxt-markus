
CREATE extension http;
CREATE extension hstore;
CREATE extension pgcrypto;
CREATE extension plv8;


CREATE TABLE Users (
  id             uuid      DEFAULT gen_random_uuid() PRIMARY KEY,
  userName       varchar(255)  NOT NULL,
  password       varchar(1000) NOT NULL,
  email          varchar(255),
  firstName      varchar(255),
  lastName       varchar(255),

  salt           varchar(255),
  ref            uuid,
  last_logged_on timestamp,
  created_on     timestamp DEFAULT current_timestamp,
  modified_on    timestamp DEFAULT current_timestamp
);



CREATE FUNCTION Users_Before_Create()
  RETURNS trigger AS
$$
BEGIN
  new.password = md5(new.password);
  new.ref = gen_random_uuid();
  RETURN new;
END;
$$
LANGUAGE plpgsql;


CREATE FUNCTION Users_After_Create()
  RETURNS trigger AS
$$
BEGIN
  PERFORM pg_notify('User::insert', row_to_json(new) :: text);
  RETURN new;
END;
$$
LANGUAGE plpgsql;

CREATE TRIGGER Users_Before_Create
  BEFORE INSERT
  ON Users
  FOR EACH ROW EXECUTE PROCEDURE Users_Before_Create();

CREATE TRIGGER Users_After_Create
  AFTER INSERT
  ON Users
  FOR EACH ROW EXECUTE PROCEDURE Users_After_Create();


CREATE TABLE SYS_Email_Messages (
  id         serial,
  toAddress  text NOT NULL,
  ccAddress  text,
  bccAddress text,
  subject    text,
  body       text,
  source     text      DEFAULT 'SYSTEM',
  is_sent    boolean   DEFAULT FALSE,
  sent_date  timestamp,
  created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE OR REPLACE FUNCTION Email_trigger()
  RETURNS trigger AS
$$
BEGIN
  PERFORM pg_notify('EMAIL::queue' , row_to_json(new)::text);
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER Email_Trigger
  AFTER INSERT
  ON SYS_Email_Messages
  FOR EACH ROW EXECUTE PROCEDURE Email_Trigger();

CREATE OR REPLACE FUNCTION send_email(
  c_to_address  text,
  c_cc_address  text DEFAULT '',
  c_bcc_address text DEFAULT '',
  c_subject     text DEFAULT '',
  c_body        text DEFAULT '',
  c_source      text DEFAULT 'SYSTEM'
)
  RETURNS int AS
$$
DECLARE tid int;
BEGIN
  INSERT INTO sys_email_messages (toAddress, ccAddress, bccAddress, subject, body, source)
  VALUES (c_to_address, c_cc_address, c_bcc_address, c_subject, c_body, c_source) RETURNING id
    INTO tid;

  RETURN tid;
END;
$$
LANGUAGE plpgsql;
