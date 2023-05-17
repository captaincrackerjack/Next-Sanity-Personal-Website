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
    <div className="flex flex-col justify-center space-y-12 items-center">
      <div className="w-3/4 md:w-1/2 lg:w-1/3 text-center">
        <h1 className="text-4xl drop-shadow font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-200 hover:from-pink-500 hover:to-orange-500 transition-all duration-500 ease-in-out transform hover:scale-110">
          {post.title}
        </h1>
      </div>
      <div className="flex justify-center w-full md:w-2/3 lg:w-3/4">
        <Image
          src={post.mainImage}
          alt={post.title}
          width={1000} // Adjust these values to suit your needs
          height={800} // Adjust these values to suit your needs
          className="border-2 border-gray-700 object-cover rounded-xl"
        />
      </div>
      <div className="w-full md:w-3/4 lg:w-2/3 text-left">
        <div className="text-lg text-gray-400">
          <PortableText value={post.content} />
        </div>
      </div>
    </div>
  );
}
