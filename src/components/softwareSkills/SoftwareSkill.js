import React, { useEffect } from "react";
import "./SoftwareSkill.scss";


var skillsArr = ["HTML5", "CSS", "JavaScript", "JSON", "MySQL", "C#", "Arduino", "Unity", "Maya", "Photoshop", "DaVinci Resolve", "Max 8", "VCV Rack", "Reaper"];

export default function SoftwareSkill() {
  useEffect(() => {
    const ul = document.querySelector('.dev-icons'); // Sélectionne l'élément <ul> par sa classe

    skillsArr.forEach((skill) => {
      var li = document.createElement('li'); // Crée un élément <li>
      li.textContent = skill; // Définit le contenu du <li> avec une compétence
      ul.appendChild(li); // Ajoute le <li> à la liste <ul>
    });
  }, []);

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons"></ul>
      </div>
    </div>
  );
}
