import "./globals.css";

export const metadata = {
  title: "Porto Jenal — Jaenal Arifin",
  description: "Personal portfolio of Jaenal Arifin — Graphic Designer, UI/UX Designer, and Web Developer based in Banten, Indonesia.",
};

export default function RootLayout({ children }) {
  return <html lang="id"><body>{children}</body></html>;
}
