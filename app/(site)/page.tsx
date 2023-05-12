import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r via-red-500 from-orange-400 to-purple-600 bg-clip-text text-transparent">
          Grant
        </span>
        !
      </h1>

      <p className="mt-3 text-x1 text-gray-600">
        Hello world, welcome to my brand spanking new personal website!
      </p>
    </div>
  );
}
