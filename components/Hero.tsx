import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      <div className="mb-6 h-24 w-24 overflow-hidden rounded-full border border-[#1f1f1f]">
        <Image
          src="/avatar.jpg"
          alt="Maksym Melnychuk"
          width={96}
          height={96}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <p className="mb-4 font-mono text-sm text-blue-500">
        Available for work
      </p>
      <h1 className="mb-3 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
        Maksym Melnychuk
      </h1>
      <p className="mb-4 text-lg font-medium text-[#6b7280] sm:text-xl">
        Frontend Developer | Fullstack Developer | QA Manual
      </p>
      <div className="mb-6 flex items-center gap-4">
        <a
          href="https://github.com/greatberser"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6b7280] transition-colors hover:text-white"
          aria-label="GitHub"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/maks-melnychuk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6b7280] transition-colors hover:text-white"
          aria-label="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
      <p className="mb-10 max-w-xl text-base leading-relaxed text-[#9ca3af]">
        Frontend developer with 2+ years of experience building modern web
        applications using React, Next.js, TypeScript, Node.js, and Prisma.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href="#projects"
          className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-80"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-md border border-[#1f1f1f] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#374151] hover:bg-[#111111]"
        >
          Contact Me
        </a>
        <a
          href="/Maksym_Melnychuk_CV.pdf"
          download
          className="rounded-md border border-[#1f1f1f] px-5 py-2.5 text-sm font-medium text-[#6b7280] transition-colors hover:border-[#374151] hover:text-white"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
