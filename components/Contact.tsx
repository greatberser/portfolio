const links = [
  {
    label: "Email",
    value: "maksmelnychuk22@gmail.com",
    href: "mailto:maksmelnychuk22@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/greatberser",
    href: "https://github.com/greatberser",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/maks-melnychuk",
    href: "https://linkedin.com/in/maks-melnychuk",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 font-mono text-sm font-medium uppercase tracking-widest text-[#6b7280]">
          Contact
        </h2>
        <p className="mb-8 max-w-md text-base text-[#9ca3af]">
          Open to new opportunities. Feel free to reach out via email or any of
          the links below.
        </p>
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.label} className="flex items-center gap-4">
              <span className="w-20 text-sm text-[#6b7280]">{link.label}</span>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-sm text-white transition-opacity hover:opacity-70"
              >
                {link.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
