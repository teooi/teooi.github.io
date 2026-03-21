import { ReactNode } from "react";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  description: ReactNode;
  image: string;
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: "BRAID: Brain Representation to Artificial Image via Diffusion",
    description: (
      <>
        A cross-modal fMRI-to-image reconstruction model that generates images
        from brain activity using a diffusion-based generative pipeline.
        <br /> <br />
        <i>San Diego Undergraduate Tech Conference (SDUTC), 2025.</i>
      </>
    ),
    image: "/images/braid2.png",
    links: [
      { label: "code", url: "https://github.com/teooi/BRAID" },
      {
        label: "pdf",
        url: "https://drive.google.com/file/d/1j9X0CCV02v-jsGaxnceoX1eZoIzQR_OL/view?usp=sharing",
      },
      {
        label: "poster",
        url: "https://drive.google.com/file/d/1LunN7wZgO2sPuYu5FroYYU1PimrU-QlF/view?usp=sharing",
      },
    ],
  },
  {
    title: "User Recommendation with BERT and FAISS",
    description: (
      <>
        User and compliment recommendation system for{" "}
        <a
          href="https://www.murmurmatch.com/home"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-link"
        >
          Murmur Platforms Inc.
        </a>{" "}
        - an anonymous, university-only compliments platform with over 50,000
        users. Below is a demo of our approach.
      </>
    ),
    image: "/images/recommend_plot4.png",
    links: [
      {
        label: "code",
        url: "https://colab.research.google.com/drive/1u8YWpkzm4wPidnpswnSAYh4k8OkJRjZP?usp=sharing",
      },
    ],
  },
];
