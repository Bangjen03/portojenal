"use client";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [["About", "#about"], ["Works", "#works"], ["Expertise", "#expertise"], ["Experience", "#experience"], ["Certificates", "#certificates"], ["Contact", "#contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Porto Jenal home"><span className="brand-mark">PJ.</span><span>PORTO JENAL</span></a>
      <nav className={open ? "nav-links is-open" : "nav-links"}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <a className="header-cta" href="#contact">Let’s talk <ArrowUpRight size={15}/></a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
    </header>
  );
}
