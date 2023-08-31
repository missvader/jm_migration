import { groq } from "next-sanity";
import  client  from "./sanity.client";


/*const postField = groq`
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  description,
  isPublished
`;*/


export async function getsPosts() {
 return client.fetch(
  groq`*[_type == "post"] | order( date desc){
    _id,
    title,
    description,
    date,
    body,
    "slug": slug.current,
    
  }`
  
 )
}
export async function getSinglePost(slug: string) {
 return client.fetch(
  groq`*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    description,
    date,
    body,
  }`,
  { slug }
 );
}