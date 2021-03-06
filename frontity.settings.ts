import { Settings } from "frontity/types";
import Source from "@frontity/source/types";
import WooCommerce from "woocommerce-poc/types";
import WooCommerceTheme from "woocommerce-theme/types";

const settings: Settings<Source | WooCommerce | WooCommerceTheme> = {
  name: "woocommerce-poc",
  state: {
    frontity: {
      url: "https://woocommerce.frontity.org",
      title: "WooCommerce & Frontity",
      description: "A proof of concept of Frontity and WooCommerce together",
    },
  },
  packages: [
    {
      name: "woocommerce-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Shop", "/shop/"],
          ],
          autoPrefetch: "in-view",
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://new.nextrend.com.au",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "woocommerce-poc",
  ],
};

export default settings;
