// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 px-6 py-4 flex justify-between items-center bg-transparent">
      <h1 className="text-xl font-semibold">NextFlow</h1>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-8 font-medium">
          <Link href="#features">Features</Link>
          <Link href="#angebot">Angebot</Link>
          <Link href="#kontakt">Kontakt</Link>
        </div>
        <a
          href="https://calendly.com/mahsuniakgul"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-6 bg-blue-600 text-white px-4 py-2 rounded-full hidden md:block"
        >
          Kontakt
        </a>
      </div>
    </nav>
  );
}
