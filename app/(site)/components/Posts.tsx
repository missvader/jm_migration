"use client";

import Link from "next/link";
import { getPosts } from "../../../sanity/sanity-utils";
import { PostType } from "@/types";
import { formatDate } from "../utils/date";
import { BiCalendar } from "react-icons/bi";
import { useEffect, useState } from "react";
import EmptyState from "./EmptyState";

export default function Posts() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <>
      {posts.length > 0 ? (
        <ul className="mx-5">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post._id}>
              <li className="relative w-full p-4 py-6 my-4 rounded-xl flex flex-col   bg-light text-dark  border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:border-light dark:text-light/75 hover:scale-105 transition">
                <h2 className="text-2xl font-bold uppercase">{post.title}</h2>
                <p className="text-sm">{post.description}</p>
                <span className="my-2 flex items-center w-full text-left text-medium font-semibold text-primary gap-2">
                  <BiCalendar />
                  <time dateTime={post.date ? post.date : " "}>
                    {post.date ? formatDate(post.date) : ""}
                  </time>
                </span>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <EmptyState value="posts" />
      )}
    </>
  );
}
