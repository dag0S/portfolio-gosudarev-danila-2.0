export interface IProject {
  id: number;
  title: string;
  description: string;
  functional: string[];
  imagesURL: string[];
  tags: string[];
  linkLiveDemo?: string;
  linkFrontendCode?: string;
  linkBackendCode?: string;
}
