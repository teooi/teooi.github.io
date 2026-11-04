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
          Hi! I'm a Math and CS undergrad at{" "}
          <a
            href="https://ucsd.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            UC San Diego
          </a>
          . I work on fMRI decoding in the{" "}
          <a
            href="https://serenceslab.ucsd.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Serences Lab
          </a>{" "}
          and{" "}
          <a
            href="https://www.mikioaoi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Aoi Lab
          </a>{" "}
          with Yixin Yuan and{" "}
          <a
            href="https://www.luisdramirez.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Luis D. Ramirez
          </a>
          , and on ML for perovskite solar cells in the{" "}
          <a
            href="https://fenningresearchgroup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Fenning Research Group
          </a>{" "}
          with Eric Oberholtz. I recently spent
          a semester at{" "}
          <a
            href="https://www.kyoto-u.ac.jp/en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Kyoto University
          </a>{" "}
          in Prof. F. Ueda's algebra seminar at{" "}
          <a
            href="https://www.kurims.kyoto-u.ac.jp/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
          RIMS.
          </a>

          <br /> <br />
          I'm interested in how the brain can inspire better ML, particularly through computational neuroscience, representation learning and probabilistic modeling. Outside of research, I make music and really like capybaras.{" "}
          {">:)"}
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
