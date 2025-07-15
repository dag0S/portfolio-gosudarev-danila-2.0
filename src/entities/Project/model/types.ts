import { ITag } from "../../Tag";

export interface IProject {
  id: string;
  title: string;
  description: string;
  imageURL: string;
  views: number;
  createdAt: string;
  updatedAt: string;
  authorId: string;
  tags: ITag[];
  linkLiveDemo?: string;
  linkFrontendCode?: string;
  linkBackendCode?: string;
}
