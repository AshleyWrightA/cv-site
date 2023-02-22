import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import localRepoData from "../data/project-data.js";

function filterData(githubData, localRepoData) {
  for (let i = 0; i < localRepoData.length; i++) {
    if (localRepoData[i].id === githubData.id) {
      return githubData;
    }
  }
}

function appendLocalRepoData(projectData, localRepoData) {
  const resultArr = [];
  for (let i = 0; i < projectData.length; i++) {
    projectData[i].displayName = localRepoData[i].displayName;
    projectData[i].previewImage = localRepoData[i].previewImage;
    projectData[i].previewAlt = localRepoData[i].previewAlt;
    projectData[i].techIcons = localRepoData[i].techIcons;
    projectData[i].ghPages = localRepoData[i].ghPages;
    projectData[i].demo = localRepoData[i].demo;
    projectData[i].order = localRepoData[i].order;
    resultArr.push(projectData[i]);
  }
  return resultArr;
}

function ProjectDataHandler() {
  const [githubData, setGithubData] = useState();

  //Fetch & set repo data, triggers re-render
  useEffect(() => {
    fetch("https://api.github.com/users/AshleyWrightA/repos")
      .then((res) => res.json())
      .then((githubData) => setGithubData(githubData));
  }, []);

  //Upon successful re-render, get desired projects
  if (githubData != null) {
    const filteredGithubData = githubData.filter((githubData) =>
      filterData(githubData, localRepoData)
    );
    filteredGithubData.sort((a, b) => a.id - b.id);
    localRepoData.sort((a, b) => a.id - b.id);
    const projectData = appendLocalRepoData(filteredGithubData, localRepoData);
    projectData.sort((a, b) => a.order - b.order);

    //Map desired projects to component
    const projectBlockArray = projectData.map((projectData) => (
      <ProjectBlockComponent
        key={projectData.id}
        displayName={projectData.displayName}
        previewImage={projectData.previewImage}
        description={projectData.description}
        previewAlt={projectData.previewAlt}
        techIcons={projectData.techIcons}
        ghPages={projectData.ghPages}
        html_url={projectData.html_url}
        demo={projectData.demo}
      />
    ));
    return projectBlockArray;
  }
}

//Projects Section
function ProjectComponent() {
  const projectBlockArray = ProjectDataHandler();
  return (
    <div className="project-div page-div" id="project">
      <h1>{"My Projects"}</h1>
      <div className="project-div-container">{projectBlockArray}</div>
    </div>
  );
}

//Project Div
function ProjectBlockComponent(props) {
  return (
    <div className="projectblock">
      <img src={props.previewImage} alt={props.previewAlt}></img>
      <h2>{props.displayName}</h2>
      <p>{props.description}</p>
      <ProjectBlockTechIcons techIcons={props.techIcons} />
      <ProjectBlockButtonsContainer
        demo={props.demo}
        ghPages={props.ghPages}
        html_url={props.html_url}
      />
    </div>
  );
}

function ProjectBlockButtonsContainer(props) {
  if (props.demo === true) {
    return (
      <div className="project-projectblock-container">
        <a href={props.ghPages} className="project__anchor">
          Live Demo
        </a>
        <a href={props.html_url} className="project__anchor">
          Source Code
        </a>
      </div>
    );
  } else {
    return (
      <div className="project-projectblock-container">
        <a href={props.html_url} className="project__anchor">
          Source Code
        </a>
      </div>
    );
  }
}

function ProjectBlockTechIcons(props) {
  const techIconsArr = props.techIcons.map((icon) => {
    return <Icon key={icon} icon={icon} />;
  });

  return (
    <div className="projectblock-div-tech">
      <p>Made using:</p>
      {techIconsArr}
    </div>
  );
}

export default ProjectComponent;
