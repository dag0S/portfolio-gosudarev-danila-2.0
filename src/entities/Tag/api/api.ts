import { IProject } from "../../Project";

export const fetchProjects = async ({
  searchBy,
}: {
  searchBy?: string;
}): Promise<IProject[]> => {
  try {
    const res = await fetch(
      `http://localhost:4321/api/projects?searchBy=${searchBy}`
    );

    if (!res.ok) {
      throw new Error("Ошибка при загрузке книг");
    }

    return await res.json();
  } catch (err) {
    console.error(err);
    throw new Error("Не удалось получить книги");
  }
};

export const fetchProjectById = async (
  projectId: string
): Promise<IProject> => {
  const res = await fetch(`http://localhost:4321/api/projects/${projectId}`);

  return await res.json();
};
