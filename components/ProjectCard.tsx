import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-lg border border-[#1f1f1f] bg-[#111111] p-6 transition-colors hover:border-[#374151]">
      <h3 className="mb-2 text-base font-semibold text-white">
        {project.title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-[#9ca3af]">
        {project.description}
      </p>

      {project.features && project.features.length > 0 && (
        <ul className="mb-4 space-y-1">
          {project.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-[#6b7280]">
              <span className="text-blue-500">—</span>
              {f}
            </li>
          ))}
        </ul>
      )}

      {project.contributions && project.contributions.length > 0 && (
        <div className="mb-4">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#6b7280]">
            My contribution
          </p>
          <ul className="space-y-1">
            {project.contributions.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-[#9ca3af]">
                <span className="mt-0.5 text-blue-500">·</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-6 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded border border-[#1f2937] px-2 py-0.5 font-mono text-xs text-[#6b7280]"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#6b7280] transition-colors hover:text-white"
        >
          GitHub →
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#6b7280] transition-colors hover:text-white"
          >
            Live Demo →
          </a>
        )}
      </div>
    </article>
  );
}
