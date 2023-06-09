import { getBlogPosts, getPage } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Blog() {
  const posts = await getBlogPosts();
  const page = await getPage("blog");

  return (
    <div>
      <h1 className="inline-block text-4xl drop-shadow font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-200 hover:from-pink-500 hover:to-orange-500 transition-all duration-500 ease-in-out transform hover:scale-110">
        {page.title}
      </h1>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post._id}>
            <div className="border-gray-500 rounded-lg p-4 transition-all duration-500 ease-in-out transform hover:scale-105 hover:border-blue-500 flex flex-col items-center group">
              <div className="relative w-64 h-64">
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
              <div className="mt-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-200 group-hover:from-pink-500 group-hover:to-orange-500 transition-all duration-500 ease-in-out text-center w-full">
                {post.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
