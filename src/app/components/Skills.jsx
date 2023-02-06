import { Icon } from "@iconify/react";
import { languageData, technologyData, otherData } from "../data/skills-data";

function SkillComponent() {
  return (
    <div className="skill-div page-div" id="skill">
      <h1>My Skills</h1>
      <div className="skill-div-skillblock-container">
        <SkillBlock
          icon="mdi:application-brackets-outline"
          header="Languages"
          skillData={languageData}
        />
        <SkillBlock
          icon="ant-design:tool-outlined"
          header="Technologies & Tools"
          skillData={technologyData}
        />
        <SkillBlock icon="mdi:lightbulb-on-20" header="Other Skills" skillData={otherData} />
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
      <div className="skillblock-header">
        <Icon className="skills-skillblock-icon" icon={props.icon} />
        <h2>{props.header}</h2>
      </div>
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
