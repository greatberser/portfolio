export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] px-6 py-8">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <p className="text-sm text-[#6b7280]">
          © {new Date().getFullYear()} Maksym Melnychuk
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/greatberser"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#6b7280] transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/maks-melnychuk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#6b7280] transition-colors hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
