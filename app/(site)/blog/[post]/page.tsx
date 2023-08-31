import { Metadata } from "next";
import type { PostType } from "@/types";
import { PortableText } from "@portabletext/react";
import { getSinglePost } from "@/sanity/sanity.query";
import ClientLayout from "../../components/ClientLayout";
import TransitionEffect from "../../components/TransitionEffect";
import AnimatedText from "../../components/AnimatedText";

type Props = {
  params: {
    post: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.post;
  const post: PostType = await getSinglePost(slug);
  return {
    title: `${post.title} | Post`,
    description: post.description,
  };
}
export default async function Post({ params }: Props) {
  const slug = params.post;
  const post: PostType = await getSinglePost(slug);
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center flex-col justify-center w-full ">
        <ClientLayout className="h-[66vh] pt-16 lg:pt-8 dark:text-light/75 text-justify">
          <AnimatedText
            text={post.title}
            className="!text-2xl md:!text-3xl lg:!text-4xl text-primary"
          />
          <PortableText value={post.body} />
        </ClientLayout>
      </main>
    </>
  );
}
