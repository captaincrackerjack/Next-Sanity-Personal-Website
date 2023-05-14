// in your /Users/grantnunley/next-sanity-tutorial/app/(site)/blog/[blogPost]/page.tsx file
import { getBlogPost } from "@/sanity/sanity-utils";
import { PortableText } from "@PortableText/react";
import Image from "next/image";

type Props = {
  params: { blogPost: string };
};

export default async function BlogPost({ params }: Props) {
  const slug = params.blogPost;
  const post = await getBlogPost(slug);

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-4xl drop-shadow font-extrabold text-center text-gray-200">
          {post.title}
        </h1>
      </header>

      {/* content goes here */}
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={post.content} />
      </div>

      {/* image goes here */}
      <Image
        src={post.mainImage}
        alt={post.title}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
    </div>
  );
}
