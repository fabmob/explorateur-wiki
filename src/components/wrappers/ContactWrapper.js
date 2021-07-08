import React from "react";

import Contact from "components/layout/Contact";

export default function ContactWrapper(props) {
  return (
    <Contact
      small={props.small}
      options={[
        {
          value: "Produit Manquant",
          label: "Il manque un fruit ou un légume",
        },
        {
          value: "Imprecision",
          label: `Les chiffres ne sont pas bon`,
        },
      ]}
    />
  );
}
