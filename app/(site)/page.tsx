import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import loadable from "@loadable/component";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-gray-300 text-7xl font-extrabold text-center py-20">
        Hello, I&apos;m{" "}
        <span className="bg-gradient-to-r via-red-500 from-orange-400 to-purple-600 bg-clip-text text-transparent">
          Grant
        </span>
        !
      </h1>

      <p className="text-xl text-gray-400 text-center">
        I&apos;m an ever-curious, life-long learner, and independent software
        developer.
      </p>
      <p className="mt-auto mb-1 text-xl text-gray-500 text-center">
        📍 Houston, TX.
      </p>
    </div>
  );
}
