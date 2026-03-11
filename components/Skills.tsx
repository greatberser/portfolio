import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 font-mono text-sm font-medium uppercase tracking-widest text-[#6b7280]">
          Skills
        </h2>
        <div className="space-y-5">
          {skills.map((category) => (
            <div key={category.label} className="flex flex-col gap-2 sm:flex-row sm:gap-6">
              <p className="w-36 shrink-0 pt-1 text-xs font-medium uppercase tracking-wider text-[#6b7280]">
                {category.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-[#1f1f1f] bg-[#111111] px-3 py-1.5 font-mono text-sm text-[#e2e8f0]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
