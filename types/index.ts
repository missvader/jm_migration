import { PortableTextBlock } from "sanity";


export type PostType = {
  [x: string]: any;
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  description: string;
  date?: string;
  body: PortableTextBlock[];
};