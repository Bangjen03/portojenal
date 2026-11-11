import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === slug);
  const next = projects[(index + 1) % projects.length];
  return (
    <main className="detail-page">
      <header className="detail-nav"><Link className="brand" href="/"><span className="brand-mark">PJ.</span><span>PORTO JENAL</span></Link><Link href="/#works" className="back-link"><ArrowLeft size={16}/> All projects</Link></header>
      <section className="detail-intro section-shell">
        <span className="eyebrow">PROJECT {project.number} / {project.year} · {project.category}</span>
        <h1>{project.title}</h1><p>{project.description}</p>
        <div className="detail-meta"><div><span>MY ROLE</span><b>{project.role}</b></div><div><span>TOOLS</span><b>{project.tools.join(" · ")}</b></div><div><span>YEAR</span><b>{project.year}</b></div></div>
      </section>
      <div className="detail-image"><Image src={project.image} alt={project.title} fill priority sizes="100vw" /></div>
      <div className="detail-bottom section-shell"><span>THANK YOU FOR VIEWING</span><Link href={`/projects/${next.slug}`}>Next project <ArrowUpRight size={17}/></Link></div>
    </main>
  );
}
