import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import localRepoData from "../data/project-data.js";

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

    //Map desired projects to component
    const projectBlockArray = projectData.map((projectData) => (
      <ProjectBlockComponent key={projectData.id} dataObject={projectData} />
    ));
    return projectBlockArray;
  }
}

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
    projectData[i].tech = localRepoData[i].tech;
    projectData[i].ghPages = localRepoData[i].ghPages;
    projectData[i].demo = localRepoData[i].demo;
    resultArr.push(projectData[i]);
  }
  return resultArr;
}

function ProjectComponent() {
  const projectBlockArray = ProjectDataHandler();
  return (
    <div className="project-div page-div" id="project">
      <h1>{"My Projects"}</h1>
      <div className="project-div-container">{projectBlockArray}</div>
    </div>
  );
}

function ProjectBlockComponent(props) {
  const iconsArr = props.dataObject.tech.map((icon) => {
    return <Icon key={icon} icon={icon} />;
  });

  //Render component with or without demo button.
  if (props.dataObject.demo === true) {
    return (
      <div className="projectblock">
        <img src={props.dataObject.previewImage} alt={props.dataObject.previewAlt}></img>
        <h2>{props.dataObject.displayName}</h2>
        <p>{props.dataObject.description}</p>
        <div className="projectblock-div-tech">
          <p>Made using:</p>
          {iconsArr}
        </div>
        <div className="project-projectblock-container">
          <a href={props.dataObject.ghPages}>Demo</a>
          <a href={props.dataObject.html_url}>Code</a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="projectblock">
        <img src={props.dataObject.previewImage} alt={props.dataObject.previewAlt}></img>
        <h2>{props.dataObject.displayName}</h2>
        <p>{props.dataObject.description}</p>
        <div className="projectblock-div-tech">
          <p>Made using:</p>
          {iconsArr}
        </div>
        <div className="project-projectblock-container">
          <a href={props.dataObject.html_url}>Code</a>
        </div>
      </div>
    );
  }
}

export default ProjectComponent;
