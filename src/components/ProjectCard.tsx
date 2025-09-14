/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

interface ProjectLink {
  label: string; 
  url: string;
}

interface ProjectCardProps {
  title: string;
  description: React.ReactNode;
  image: string;
  links?: ProjectLink[];
}

export default function ProjectCard({
  title,
  description,
  image,
  links,
}: ProjectCardProps) {
  return (
    <div className="project">
      {/* Image on the left */}
      <img src={image} alt={title} className="project-gif rounded-xl" />

      {/* Text on the right */}
      <div className="project-text">
        <h3>{title}</h3>
        <p>{description}</p>

        {links && links.length > 0 && (
          <div className="project-links mt-2">
            {links.map((link, idx) => (
              <Link
                key={idx}
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
