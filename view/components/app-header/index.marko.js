// Compiled using marko@4.13.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onCreate: function() {
          console.log("created");
        },
        onMount: function() {
          console.log("mount");
        },
        logthis: function() {
          console.log("test");
        }
      },
    marko_componentType = "/Nxt$1.0.0/view/components/app-header/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    app_logo_template = marko_loadTemplate(require.resolve("../app-logo")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    app_logo_tag = marko_loadTag(app_logo_template),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-atl-navigation-column stuck\"" +
    marko_attr("data-marko", {
      onload: __component.d("load", "logthis", true)
    }, false) +
    "><div class=\"lia-quilt-column-alley lia-quilt-column-alley-single\"><div class=\"atl-navigation-wrapper\"><div class=\"atl-navigation\"><div style=\"margin-bottom: 0px;\" class=\"atl-navigation__masthead\"><a href=\"/\" data-ga-category=\"Utility Navigation Interactions\" data-ga-action=\"Atlassian Community Logo\" class=\"atl-community-logo\">");

  app_logo_tag({}, out, __component, "6");

  out.w("</a></div><a class=\"adg-button--cta-yellow adg-u-small-inline-block\" id=\"atlcommNavLink-register\"> Sign up </a><button class=\"adg-button--subtle\" id=\"login-btn\"" +
    marko_attr("data-marko", {
      onclick: __component.d("click", "logthis", false)
    }, false) +
    "> Log in </button></div></div></div></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      "./style.css"
    ],
    id: "/Nxt$1.0.0/view/components/app-header/index.marko",
    component: "./",
    tags: [
      "../app-logo"
    ]
  };
