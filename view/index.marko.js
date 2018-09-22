// Compiled using marko@4.13.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onCreate: function() {
          console.log("Hello WOrld");
        }
      },
    marko_componentType = "/Nxt$1.0.0/view/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    layout_template = marko_loadTemplate(require.resolve("./layout/layout.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
    marko_escapeXmlAttr = marko_helpers.xa,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: layout_template,
      body: {
          renderBody: function renderBody(out) {
            out.w("<nav class=\"navbar has-shadow\" role=\"navigation\" aria-label=\"main navigation\"><div class=\"navbar-brand\"><a class=\"navbar-item\" href=\"https://bulma.io\"><img src=\"https://bulma.io/images/bulma-logo.png\" alt=\"Bulma: a modern CSS framework based on Flexbox\" width=\"112\" height=\"28\"></a><a role=\"button\" class=\"navbar-burger\" aria-label=\"menu\" aria-expanded=\"false\"><span aria-hidden=\"true\"></span><span aria-hidden=\"true\"></span><span aria-hidden=\"true\"></span></a></div><div class=\"navbar-end\"><div class=\"navbar-item\"><div class=\"field is-grouped\"><p class=\"control\"><a class=\"is-info button\">Signup</a></p><p class=\"control\"><a class=\"button is-primary\">Login</a></p></div></div></div></nav> You have " +
              marko_escapeXml(data.count) +
              " new messages! ");

            if (data.colors && data.colors.length) {
              out.w("<ul>");

              var for__18 = 0;

              marko_forEach(data.colors, function(color) {
                var keyscope__19 = "[" + ((for__18++) + "]");

                out.w("<li style=\"color: " +
                  marko_escapeXmlAttr(color) +
                  "\">" +
                  marko_escapeXml(color) +
                  "</li>");
              });

              out.w("</ul>");
            } else {
              out.w("<div>No colors!</div>");
            }
          }
        },
      [hasRenderBodyKey]: true
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/Nxt$1.0.0/view/index.marko",
    component: "./",
    tags: [
      "./layout/layout.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
