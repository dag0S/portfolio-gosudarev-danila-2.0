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
}

export interface ITag {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}
