export type BlockContent = {
  _type: "block";
  children: {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
  }[];
  markDefs: {
    _key: string;
    _type: string;
    href: string;
  }[];
  style: string;
};

export type About = {
  _id: string;
  _type: "about";
  bio: BlockContent[];
  education: BlockContent[];
  professionalExperience: BlockContent[];
  interests: BlockContent[];
  funFacts: BlockContent[];
  travelPhotos: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  }[];
};
