import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills) => {
            return (
              <a
                href={skills.link}
                target="_blank"
                rel="noopener noreferrer"
                className="skillsLink"
              >
                <li className="software-skill-inline" name={skills.skillName}>
                  {skills.skillName === "SQLAlchemy" ? (
                    <i class="devicon-sqlalchemy-plain colored"></i>
                  ) : (
                    <span
                      className="iconify"
                      data-icon={skills.classname}
                      style={skills.style}
                      data-inline="false"
                    ></span>
                  )}
                  <p className="skillSubtext">{skills.skillName}</p>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
