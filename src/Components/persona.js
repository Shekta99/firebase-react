import React from "react";

function Persona({ persona }) {
  const { nombre, RH } = persona;
  return (
    <div>
      <p>
        {nombre} : {RH}
      </p>
    </div>
  );
}

export default Persona;
