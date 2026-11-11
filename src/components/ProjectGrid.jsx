import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectGrid() {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <Link className={`project-card project-card-${index + 1}`} href={`/projects/${project.slug}`} key={project.slug}>
          <div className="project-image-wrap">
            <Image src={project.image} alt={project.title} fill sizes="(max-width: 760px) 100vw, 50vw" className="project-image" />
            <span className="project-open"><ArrowUpRight size={19}/></span>
          </div>
          <div className="project-meta">
            <div><span className="eyebrow">{project.category}</span><h3>{project.title}</h3></div>
            <span className="project-year">{project.year}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
