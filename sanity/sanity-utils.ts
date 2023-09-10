import { PostType } from "@/types";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export  async function getPosts() : Promise<PostType[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"] | order(_createdAt desc){
      _id,
      _createdAt,
      title,
      description,
      date,
      body,
      "slug": slug.current,
    }`
  )
}

export async function getPost(slug: string) : Promise<PostType> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      description,
      date,
      body,
      "slug": slug.current,
    }`,
    { slug }
  )
  
}