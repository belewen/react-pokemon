import React from "react";

function ErrorDisplay({ error }) {
  return (
    <>
      <p style={{ color: "red" }}>
        Aucun pokemon n'a été trouvé. <b>Veuillez recommencer la recherche</b>
      </p>
      <p>Détail du message {error.message}</p>
    </>
  );
}

export default ErrorDisplay;
