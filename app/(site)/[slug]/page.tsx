import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@PortableText/react";

type Props = {
  params: { slug: string };
};
export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div>
      <h1 className="text-4xl drop-shadow font-extrabold text-center text-gray-200">
        {page.title}
      </h1>

      <div className="text-lg text-gray-500 mt-10">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
