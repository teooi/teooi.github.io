export interface SocialLink {
  label: string;
  url: string;
  icon?: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: "timototar@ucsd.edu",
    url: "mailto:timototar@ucsd.edu",
  },
  {
    label: "GitHub",
    url: "https://github.com/teooi",
    icon: "/images/github-logo.png",
  },
  {
    label: "Resume",
    url: "https://drive.google.com/file/d/1oa957KSkcGjFXfWi7Er9jHnOLo-MQpPl/view",
  },
];
