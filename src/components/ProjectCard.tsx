/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  title,
  description,
  image,
  links,
}: Project) {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-gif rounded-xl" />

      <div className="project-text">
        <h3>{title}</h3>
        <p>{description}</p>

        {links.length > 0 && (
          <div className="project-links mt-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                [{link.label}]
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
