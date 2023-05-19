const About = {
  name: "about",
  title: "About",
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
      name: "bio",
      title: "Bio",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "education",
      title: "Education",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "professionalExperience",
      title: "Professional Experience",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "interests",
      title: "Interests",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "funFacts",
      title: "Fun Facts",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "travelPhotos",
      title: "Travel Photos",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};

export default About;
