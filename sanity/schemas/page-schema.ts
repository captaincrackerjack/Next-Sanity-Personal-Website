// the page schema controls the pages of the website that do not have their own dedicated folder (e.i., "skills, contact, etc")
// it also manages the items in the navigation bar, including their order

const page = {
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "order",
      title: "Order",
      type: "number",
    },
  ],
};

export default page;
