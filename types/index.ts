import { PortableTextBlock } from "sanity";


export type PostType = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  description: string;
  date?: string;
  body: PortableTextBlock[];
};