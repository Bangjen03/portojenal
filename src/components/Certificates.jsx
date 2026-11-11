import Image from "next/image";
import { ArrowUpRight, FileBadge, ShieldCheck } from "lucide-react";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  return (
    <section className="certificates section-shell" id="certificates">
      <div className="section-label">
        <span>05 / CERTIFICATIONS</span>
        <span>LEARNING & CREDENTIALS</span>
      </div>
      <div className="section-heading">
        <h2>Proof of<br/><em>progress.</em></h2>
        <p>Sertifikasi dan pelatihan yang mendukung kompetensi di bidang teknologi, pengembangan web, dan pemanfaatan AI.</p>
      </div>
      <div className="certificate-grid">
        {certificates.map((certificate, index) => (
          <article className={`certificate-card ${index === 0 ? "certificate-featured" : ""}`} key={certificate.id}>
            <a className="certificate-preview" href={certificate.file} target="_blank" rel="noreferrer" aria-label={`Buka ${certificate.title}`}>
              <Image src={certificate.image} alt={`Preview sertifikat ${certificate.title}`} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" />
              <span className="certificate-zoom"><ArrowUpRight size={18}/></span>
            </a>
            <div className="certificate-info">
              <div className="certificate-topline"><span>{certificate.issuer}</span>{certificate.issuer === "Badan Nasional Sertifikasi Profesi (BNSP)" ? <ShieldCheck size={15}/> : <FileBadge size={15}/>}</div>
              <h3>{certificate.title}</h3>
              <p>{certificate.type} · {certificate.date}</p>
              <div className="certificate-foot">
                <span>{certificate.validity}</span>
                <a href={certificate.file} target="_blank" rel="noreferrer">View certificate <ArrowUpRight size={14}/></a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="certificate-note">Pilih kartu sertifikat untuk membuka dokumen PDF asli.</p>
    </section>
  );
}
