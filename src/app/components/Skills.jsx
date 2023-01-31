import { Icon } from "@iconify/react";
import { languageData, technologyData, otherData } from "../data/skills-data";

function SkillComponent() {
  return (
    <div className="skills-div page-div">
      <h1>My Skills</h1>
      <div className="skills-div-skillblock-container">
        <SkillBlock categoryIcon="" header="Languages" skillData={languageData} />
        <SkillBlock categoryIcon="" header="Technologies & Tools" skillData={technologyData} />
        <SkillBlock categoryIcon="" header="Other Skills" skillData={otherData} />
      </div>
    </div>
  );
}

function SkillBlock(props) {
  const arrayOfSkillElements = props.skillData.map((skill, i) => {
    return <SkillElement key={i} name={skill.name} icon={skill.icon} />;
  });
  return (
    <div className="skillblock-div">
      <img src="" alt=""></img>
      <h2>{props.header}</h2>
      {arrayOfSkillElements}
    </div>
  );
}

function SkillElement(props) {
  return (
    <div className="skillelement-div">
      <p>{props.name}</p>
      <Icon icon={props.icon} />
    </div>
  );
}

export default SkillComponent;
