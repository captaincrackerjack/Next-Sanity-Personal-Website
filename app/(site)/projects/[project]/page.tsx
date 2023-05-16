import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@PortableText/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="flex flex-col justify-center space-y-12 items-center">
      <div className="w-3/4 md:w-1/2 lg:w-1/3 text-center">
        <h1 className="text-4xl drop-shadow font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-200 hover:from-pink-500 hover:to-orange-500 transition-all duration-500 ease-in-out transform hover:scale-110">
          {project.name}
        </h1>
      </div>
      <div className="flex justify-center w-full md:w-2/3 lg:w-3/4">
        <Image
          src={project.image}
          alt={project.name}
          width={1000} // Adjust these values to suit your needs
          height={800} // Adjust these values to suit your needs
          className="border-2 border-gray-700 object-cover rounded-xl"
        />
      </div>
      <div className="w-3/4 md:w-1/2 lg:w-1/3 text-center">
        <a
          href={project.url}
          title="View project"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-blue-500 hover:text-white transition transform hover:scale-110"
        >
          View Project
        </a>
      </div>
      <div className="w-full md:w-3/4 lg:w-2/3 text-left">
        <div className="text-lg text-gray-400">
          <PortableText value={project.content} />
        </div>
      </div>
    </div>
  );
}
