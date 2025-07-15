import { IProject } from "../../Project";

export const fetchProjects = async () => {
  const data = await fetch("http://localhost:4321/api/projects");
  const projects = (await data.json()) as IProject[];

  return projects;
};

export const fetchProjectById = async (projectId: string) => {
  const data = await fetch(`http://localhost:4321/api/projects/${projectId}`);
  const project = (await data.json()) as IProject;

  return project;
};
