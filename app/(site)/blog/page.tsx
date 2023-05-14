import { getBlogPosts, getPage } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Blog() {
  const posts = await getBlogPosts();
  const page = await getPage("blog");

  return (
    <div>
      <h1 className="text-4xl drop-shadow font-extrabold text-center text-gray-200">
        {page.title}
      </h1>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post._id}
            className="border-2 border-gray-500 rounded-lg p-3 hover:scale-105 hover:border-blue-500 transition flex flex-col items-center"
          >
            <div className="relative w-full pb-full"></div>
            {post.mainImage && (
              <Image
                src={post.mainImage}
                alt={post.title}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r via-red-500 from-orange-400 to-purple-600 bg-clip-text text-transparent text-center w-full">
              {post.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
