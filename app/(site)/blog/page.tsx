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
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post._id}
            className="border-gray-500 rounded-lg p-4 hover:scale-105 hover:border-blue-500 transition flex flex-col items-center"
          >
            <div className="relative w-64 h-64">
              {" "}
              {/* Set a fixed size for the card */}
              {post.mainImage && (
                <Image
                  src={post.mainImage}
                  alt={post.title}
                  width={750} // You can adjust these values to suit your needs
                  height={300} // You can adjust these values to suit your needs
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg border border-gray-500"
                />
              )}
            </div>
            <div className="mt-2 font-extrabold bg-gradient-to-r via-red-500 from-orange-400 to-purple-600 bg-clip-text text-transparent text-center w-full">
              {post.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
