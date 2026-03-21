/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { socialLinks } from "@/data/socialLinks";

export default function AboutSection() {
  return (
    <section className="about-me">
      <img src="/images/about.png" alt="About" />
      <div className="text">
        <h1>Teo Imoto-Tar | 井本タール テオ</h1>

        <p>
          Hi! I'm an undergraduate student pursuing Computer Science and
          Mathematics at{" "}
          <a
            href="https://ucsd.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            UC San Diego
          </a>{" "}
          and I work as a research assistant at{" "}
          <a
            href="https://neuroelectronics.ucsd.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Neuroelectronics Lab
          </a>{" "}
          in the{" "}
          <a
            href="https://jacobsschool.ucsd.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Jacobs School of Engineering
          </a>
          .
          <br /> <br />
          I am interested in software engineering and AI research, with a focus
          on computer vision and computational neuroscience. I've worked on
          projects ranging from robotics and game jams to fMRI-to-image
          generation. Outside of research, I make music and really like
          capybaras. {">:)"}
        </p>

        <div className="links-container mt-4">
          {socialLinks.map((link) =>
            link.icon ? (
              <a key={link.label} href={link.url} className="mr-4">
                <img
                  src={link.icon}
                  alt={link.label}
                  className="github-logo"
                />
              </a>
            ) : (
              <a
                key={link.label}
                href={link.url}
                className="mr-4"
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.url.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
              >
                {link.label}
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}
