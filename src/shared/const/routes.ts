export const ROUTES = {
  main: "/",
  about_me: "/about-me",
  projects: "/projects",
  project: (projectId: string) => `/projects/${projectId}`,
  blog: "/blog",
  not_found: "/not-found",
} as const;
