import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";
import { BlogPost } from "@/types/BlogPost";
import { About } from "@/types/About";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[ _type == "project" ]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[ _type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"] | order(order asc){
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      order
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  );
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blogPost"]{
      title,
      "slug": slug.current,
      author->{name},
      "mainImage": mainImage.asset->url,
      content
    }`
  );
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blogPost" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      author->{name},
      "mainImage": mainImage.asset->url,
      content
    }`,
    { slug }
  );
}

export async function getAbout(): Promise<About> {
  return createClient(clientConfig).fetch(
    groq`*[ _type == "about" ][0]{
          bio,
          education,
          professionalExperience,
          interests,
          funFacts,
          "travelPhotos": travelPhotos[].asset->url
      }`
  );
}
