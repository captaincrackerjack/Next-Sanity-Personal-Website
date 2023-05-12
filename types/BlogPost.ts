import { PortableTextBlock } from "sanity";

export type BlogPost = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  author: string;
  mainImage: string;
  content: PortableTextBlock[];
};
