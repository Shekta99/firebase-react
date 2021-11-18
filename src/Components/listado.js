import React, { useState, useEffect } from "react";
import Persona from "./persona";
import { db } from "../Firebase/firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

function Listado() {
  const [personas, setPersonas] = useState([]);
  const documentos = [];
  const leerPersonas = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "personas"));
      querySnapshot.forEach((doc) => {
        documentos.push({ id: doc.id, ...doc.data() });
      });
      setPersonas(documentos);
    } catch (err) {
      console.log(err);
    }
  };

  const escribirPersonas = async () => {
    try {
      const docRef = await addDoc(collection(db, "personas"), {
        nombre: "Alan",
        RH: "o-",
      });
      documentos.push({ id: docRef.id, ...docRef.data() });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    leerPersonas();
  }, [personas]);

  return (
    <div>
      Hola mundo
      {personas.map((persona) => (
        <Persona key={persona.id} persona={persona} />
      ))}
      <button onClick={escribirPersonas}>Crear</button>
      <button>Borrar</button>
    </div>
  );
}

export default Listado;
