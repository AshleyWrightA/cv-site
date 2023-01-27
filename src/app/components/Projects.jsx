import { useState, useEffect } from "react";
import localRepoData from "../data/project-data.js";

function ProjectComponent() {
  const projectBlockArray = ProjectDataHandler();
  return (
    <div className="project-div page-div">
      <h1>My Projects</h1>
      <div className="project-div-container">{projectBlockArray}</div>
    </div>
  );
}

function ProjectBlockComponent(props) {
  return (
    <div className="projectblock">
      <h2>{props.dataObject.displayName}</h2>
      <p>{props.dataObject.description}</p>
      <div className="project-projectblock-container">
        <button>Demo</button>
        <button>Code</button>
      </div>
    </div>
  );
}

function ProjectDataHandler() {
  const [githubData, setGithubData] = useState();

  //Fetch & set repo data, triggers re-render
  useEffect(() => {
    fetch("https://api.github.com/users/AshleyWrightA/repos")
      .then((res) => res.json())
      .then((githubData) => setGithubData(githubData));
  }, []);

  //Upon successful re-render
  if (githubData != null) {
    console.log(githubData);

    //Get desired projects
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
    projectData[i].tech = localRepoData[i].tech;
    resultArr.push(projectData[i]);
  }
  return resultArr;
}

export default ProjectComponent;
