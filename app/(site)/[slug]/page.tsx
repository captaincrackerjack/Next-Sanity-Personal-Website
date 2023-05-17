import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@PortableText/react";

type Props = {
  params: { slug: string };
};
export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div>
      <h1 className="inline-block text-4xl drop-shadow font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-200 hover:from-pink-500 hover:to-orange-500 transition-all duration-500 ease-in-out transform hover:scale-110">
        {page.title}
      </h1>

      <div className="text-lg text-gray-500 mt-10">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
