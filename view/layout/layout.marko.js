// Compiled using marko@4.13.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/Nxt$1.0.0/view/layout/layout.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>marko-express</title><meta name=\"language\" content=\"english\"><meta http-equiv=\"content-type\" content=\"text/html\"><meta name=\"author\" content=\"Poovarasan Vasudevan\"><meta name=\"designer\" content=\"Poovarasan Vasudevan\"><meta name=\"publisher\" content=\"Poovarasan Vasudevan\"><meta name=\"no-email-collection\" content=\"http://www.unspam.com/noemailcollection/\"><meta name=\"description\" content=\"Learn more Poovarasan Vasudevan, his projects, interests and experience.\"><meta name=\"keywords\" content=\"Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist\"><meta name=\"robots\" content=\"index,follow\"><meta name=\"revisit-after\" content=\"7 days\"><meta name=\"distribution\" content=\"web\"><meta name=\"robots\" content=\"noodp\"><meta name=\"distribution\" content=\"web\"><meta name=\"web_author\" content=\"Poovarasan Vasudevan\"><meta name=\"rating\" content=\"general\"><meta name=\"rating\" content=\"safe for kids\"><meta name=\"subject\" content=\"Personal\"><meta name=\"title\" content=\"Poovarasan Vasudevan - Official Website.\"><meta name=\"copyright\" content=\"Copyright 2016\"><meta name=\"reply-to\" content=\"poosan9@gmail.com\"><meta name=\"abstract\" content=\"Poovarasan Vasudevan is an IT strategist, with over 3 years of experience, including software engineering, project management, product development, business operations, and strategy.\"><meta name=\"city\" content=\"San Francisco\"><meta name=\"country\" content=\"USA\"><meta name=\"distribution\" content=\"global\"><meta name=\"classification\" content=\"Poovarasan Vasudevan is an IT strategist, with over 3 years of experience, including software engineering, project management, product development, business operations, and strategy.\"><meta name=\"format-detection\" content=\"telephone=yes\"><meta name=\"HandheldFriendly\" content=\"true\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta http-equiv=\"Content-Script-Type\" content=\"text/javascript\"><meta name=\"theme-color\" content=\"#db5945\"><link rel=\"manifest\" href=\"/static/manifest.json\"></head><body>");

  component_globals_tag({}, out);

  out.w("<noscript>Please Enable JavaSccript to render</noscript>");

  include_tag({
      _target: input.body
    }, out, __component, "38");

  out.w("<script>\r\n       if('serviceWorker' in navigator) {\r\n         navigator.serviceWorker\r\n                  .register('/static/js/sw.js')\r\n                  .then(function() { console.log(\"Service Worker Registered\"); });\r\n       }\r\n   </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "40");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/Nxt$1.0.0/view/layout/layout.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
