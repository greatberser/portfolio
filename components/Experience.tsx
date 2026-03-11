import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 font-mono text-sm font-medium uppercase tracking-widest text-[#6b7280]">
          Experience
        </h2>
        <div className="space-y-4">
          {experience.map((entry) => (
            <div
              key={`${entry.company}-${entry.period}`}
              className="rounded-lg border border-[#1f1f1f] bg-[#111111] p-6"
            >
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {entry.role}
                  </h3>
                  <p className="mt-0.5 text-sm text-[#6b7280]">
                    {entry.company} · {entry.location}
                  </p>
                </div>
                <span className="font-mono text-xs text-[#6b7280] sm:text-right sm:whitespace-nowrap">
                  {entry.period}
                </span>
              </div>
              <ul className="space-y-2">
                {entry.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-[#9ca3af]">
                    <span className="mt-0.5 text-blue-500">—</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
