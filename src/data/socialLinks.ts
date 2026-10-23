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
    label: "CV",
    url: "https://drive.google.com/file/d/1Rd-rzM0iiEYyrh-PNuChbbMX3nMb9_Tl/view?usp=sharing",
  },
];
