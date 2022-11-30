import React from "react";
import Botones from "./Botones";

const studentName = "Juan Luis";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux", "Ajax"];
const alerts = { m1: "Aprobado", m2: "En curso" };


export default function Bienvenido() {
  // el código de tu componente acá
  const array = techSkills.map((element, index) =>  <li key={index}>{element}</li>);

  return(
    <div> 
      <h1>Bienvenido</h1>
      <h3>{studentName}</h3>
      <ul>{array}</ul>
      <Botones alerts= {alerts}/>
    </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
