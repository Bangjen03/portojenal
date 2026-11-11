import { ArrowDown, ArrowUpRight, MoveUpRight, PenTool, PanelsTopLeft, Code2, Layers3, Mail, MapPin, Download, Sparkles } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectGrid from "@/components/ProjectGrid";
import Certificates from "@/components/Certificates";

const skills = [
  { icon: PenTool, title: "Visual & Graphic Design", text: "Visual identity, publication, editorial layout, and presentation design." },
  { icon: PanelsTopLeft, title: "UI/UX Design", text: "User-centered interfaces, wireframes, prototypes, and digital experiences." },
  { icon: Code2, title: "Web Development", text: "Responsive websites built with HTML, CSS, JavaScript, and Next.js." },
  { icon: Layers3, title: "HSE Communication", text: "Safety campaigns, training materials, reporting, and documentation visuals." },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-topline"><span><i className="status-dot"/> AVAILABLE FOR CREATIVE COLLABORATION</span><span>BASED IN BANTEN, INDONESIA · 2026</span></div>
          <div className="hero-main">
            <div className="hero-copy">
              <p className="eyebrow">INDEPENDENT DESIGNER & CREATIVE THINKER</p>
              <h1>Ideas into<br/><em>visual stories.</em></h1>
              <p className="hero-description">Saya Jaenal Arifin. Saya merancang identitas visual, publikasi, dan pengalaman digital yang menghubungkan ide dengan manusia.</p>
              <div className="hero-actions">
                <a className="button button-dark" href="#works">Explore selected works <ArrowUpRight size={17}/></a>
                <a className="text-link" href="#about">More about me <ArrowDown size={15}/></a>
              </div>
            </div>
            <div className="hero-art" aria-label="Decorative portfolio composition">
              <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
              <div className="art-card art-card-back"><span>DESIGN<br/>WITH<br/>PURPOSE.</span><b>01 / 04</b></div>
              <div className="art-card art-card-front"><span className="art-kicker">PORTFOLIO / 2026</span><strong>PORTO<br/><i>JENAL.</i></strong><div className="art-bottom"><span>CREATIVE<br/>PRACTICE</span><Sparkles size={25}/></div></div>
              <span className="art-index">PJ—001</span>
            </div>
          </div>
          <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="hero-line"/><span>DESIGN · DIGITAL · EDITORIAL</span></div>
        </section>

        <section className="intro section-shell" id="about">
          <div className="section-label"><span>01 / ABOUT</span><span>A LITTLE INTRODUCTION</span></div>
          <div className="intro-content">
            <h2>Design is more than how it looks. It’s <em>how it works,</em> feels, and communicates.</h2>
            <div className="intro-aside"><div className="about-profile"><div className="about-photo"><Image src="/images/profile/jaenal-arifin.png" alt="Foto profil Jaenal Arifin" fill priority sizes="(max-width: 650px) 100vw, 420px" /></div><div className="about-photo-caption"><strong>JAENAL ARIFIN</strong><span>DESIGNER · BANTEN, INDONESIA</span></div></div><p>Saya seorang desainer yang berfokus pada pengembangan identitas visual, desain UI/UX, website, serta media komunikasi digital dan cetak. Saya senang mengubah ide dan permasalahan kompleks menjadi solusi yang sederhana, menarik, dan fungsional.</p><div className="about-facts"><span><MapPin size={15}/> Banten, Indonesia</span><span><span className="fact-dot"/> S1 Manajemen · Universitas Primagraha</span></div></div>
          </div>
        </section>

        <section className="works section-shell" id="works">
          <div className="section-label"><span>02 / SELECTED WORKS</span><span>RECENT CREATIVE PROJECTS</span></div>
          <div className="section-heading"><h2>Selected <em>projects.</em></h2><p>A selection of publication, editorial, and visual communication projects.</p></div>
          <ProjectGrid />
          <div className="works-foot"><span>01 — 04 / FEATURED PROJECTS</span><span>MORE WORKS COMING SOON ↗</span></div>
        </section>

        <section className="expertise section-shell" id="expertise">
          <div className="section-label"><span>03 / EXPERTISE</span><span>WHAT I DO</span></div>
          <div className="section-heading"><h2>Creative skills.<br/><em>Practical thinking.</em></h2><p>Memadukan kepekaan visual, pemikiran sistematis, dan teknologi untuk menghasilkan karya yang tepat guna.</p></div>
          <div className="skill-grid">{skills.map(({icon: Icon, title, text}, i) => <article className="skill-card" key={title}><div className="skill-top"><span>0{i+1}</span><Icon size={22}/></div><h3>{title}</h3><p>{text}</p><span className="skill-arrow"><MoveUpRight size={18}/></span></article>)}</div>
          <div className="tool-strip"><span>TOOLS & TECHNOLOGIES</span><p>Figma <b>·</b> Canva <b>·</b> Photoshop <b>·</b> Illustrator <b>·</b> HTML <b>·</b> CSS <b>·</b> JavaScript <b>·</b> Next.js</p></div>
        </section>

        <section className="experience section-shell" id="experience">
          <div className="section-label"><span>04 / EXPERIENCE</span><span>WORK & CONTRIBUTION</span></div>
          <div className="experience-layout"><h2>Learning by<br/><em>making things.</em></h2><div className="experience-item"><span className="eyebrow">INTERNSHIP · HSE SYSTEM</span><h3>PT Indah Kiat</h3><p>Mendukung aktivitas HSE melalui pengelolaan dokumentasi dan administrasi, monitoring abnormal finding, pelaporan, serta pengembangan materi komunikasi dan pelatihan keselamatan.</p><div className="tag-row"><span>HSE Documentation</span><span>Reporting</span><span>Safety Communication</span><span>Monitoring</span></div></div></div>
        </section>

        <Certificates />

        <section className="contact section-shell" id="contact">
          <div className="section-label"><span>06 / CONTACT</span><span>HAVE AN IDEA?</span></div>
          <p className="eyebrow">LET’S MAKE SOMETHING MEANINGFUL</p>
          <h2>Have a project<br/>in <em>mind?</em></h2>
          <div className="contact-bottom"><p>Terbuka untuk kolaborasi, proyek kreatif, dan kesempatan baru. Mari mulai percakapan.</p><a className="button button-light" href="mailto:hello@porto-jenal.com">Start a conversation <ArrowUpRight size={17}/></a></div>
        </section>
      </main>
      <footer className="footer section-shell"><a className="brand" href="#home"><span className="brand-mark">PJ.</span><span>PORTO JENAL</span></a><span>DESIGNED WITH INTENTION · © 2026 JAENAL ARIFIN</span><a href="#home">BACK TO TOP ↑</a></footer>
    </>
  );
}
