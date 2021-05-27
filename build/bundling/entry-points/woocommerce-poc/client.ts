import client from "@frontity/core/src/client";
import woocommerce_theme_default from "woocommerce-theme/src/index";
import frontity__wp_source_default from "@frontity/wp-source/src/index";
import frontity__tiny_router_default from "@frontity/tiny-router/src/index";
import frontity__html2react_default from "@frontity/html2react/src/index";
import woocommerce_poc_default from "woocommerce-poc/src/index";

const packages = {
  woocommerce_theme_default,
  frontity__wp_source_default,
  frontity__tiny_router_default,
  frontity__html2react_default,
  woocommerce_poc_default,
};

export default client({ packages });

if (module["hot"]) {
  module["hot"].accept(
    [
      "@frontity/core/src/client",
      "woocommerce-theme/src/index",
      "@frontity/wp-source/src/index",
      "@frontity/tiny-router/src/index",
      "@frontity/html2react/src/index",
      "woocommerce-poc/src/index",
    ],
    () => {
      const client = require("@frontity/core/src/client").default;
      const woocommerce_theme_default = require("woocommerce-theme/src/index").default;
      const frontity__wp_source_default = require("@frontity/wp-source/src/index").default;
      const frontity__tiny_router_default = require("@frontity/tiny-router/src/index").default;
      const frontity__html2react_default = require("@frontity/html2react/src/index").default;
      const woocommerce_poc_default = require("woocommerce-poc/src/index").default;
      const packages = {
        woocommerce_theme_default,
        frontity__wp_source_default,
        frontity__tiny_router_default,
        frontity__html2react_default,
        woocommerce_poc_default,
      };
      client({ packages });
    }
  );
}