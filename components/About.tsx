export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-sm font-mono font-medium uppercase tracking-widest text-[#6b7280]">
          About
        </h2>
        <div className="max-w-2xl space-y-4 text-base leading-relaxed text-[#9ca3af]">
          <p>
            I&apos;m a frontend developer focused on building clean, performant,
            and accessible web applications. Over the past 2+ years I&apos;ve
            worked primarily with{" "}
            <span className="text-white">React and Next.js</span>, delivering
            interfaces that are both functional and pleasant to use.
          </p>
          <p>
            I care about the details — good component architecture, readable
            code, and interfaces that feel fast. I enjoy working close to the
            product side and thinking about how users interact with what I build.
          </p>
          <p>
            Outside of my main stack I&apos;m comfortable with{" "}
            <span className="text-white">TypeScript</span>, styling systems like{" "}
            <span className="text-white">Tailwind CSS</span>, and tools like
            Docker and Storybook for a solid dev experience.
          </p>
        </div>
      </div>
    </section>
  );
}
