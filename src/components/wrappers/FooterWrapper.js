import React from "react";

import MagicLink from "components/base/MagicLink";
import Footer from "components/layout/Footer";

export default function FooterWrapper() {
  return (
    <Footer>
      <h2>D'ou viennent ces données ?</h2>
      <p>
        Ce module vous permet d'explorer le{" "}
        <a href="https://wiki.lafabriquedesmobilites.fr">
          wiki de la fabrique des mobilités
        </a>
        .
      </p>
    </Footer>
  );
}
