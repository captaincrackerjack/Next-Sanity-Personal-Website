import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import loadable from "@loadable/component";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-gray-300 text-7xl font-extrabold text-center py-6">
        Hello, I&apos;m{" "}
        <span className="bg-gradient-to-r via-red-500 from-orange-400 to-purple-600 bg-clip-text text-transparent">
          Grant
        </span>
        !
      </h1>

      <div className="rounded-full mt-2">
        <div className="bg-white rounded-full overflow-hidden relative w-64 h-64">
          <Image
            src="/images/linkedin.jpg"
            width={512}
            height={512}
            alt="Grant's Picture"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>

      <p className="text-xl text-gray-400 text-center mt-8">
        I&apos;m an ever-curious, life-long learner, and independent software
        developer.
      </p>
      <p className="mt-4 text-xl text-gray-500 text-center">📍 Houston, TX.</p>
    </div>
  );
}
