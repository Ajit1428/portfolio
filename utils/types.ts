export type ProjectType = Readonly<{
  projectImageUrl: string;
  title: string;
  description: string;
  technologies: { technologyImageUrl: string }[];
  githubLink: string;
  websiteLink: string;
}>;
