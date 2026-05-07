import Link from "next/link";
import { GitHubIcon } from "@/components/icons";
import { PageFrame } from "@/components/page-frame";
import { siteContent } from "@/content/site-content";

export default function ProjectsPage() {
  return (
    <main className="shell projects-shell">
      <PageFrame footer={siteContent.footer} className="projects-frame">
        <div className="w-full space-y-8">
          <Link className="back-link" href="/">
            <span aria-hidden="true">←</span>
            <span>Back</span>
          </Link>

          <section className="max-w-3xl space-y-4">
            <h1 className="text-[2.45rem] font-semibold tracking-tight text-ink sm:text-[3.25rem]">
              Projects
            </h1>
            <p className="project-intro text-base leading-8 text-slate-300">
              {siteContent.projects.intro}
            </p>
          </section>

          <section
            className="projects-grid"
            aria-label="Apps and tools built using Codex"
          >
            {siteContent.projects.items.map((project) => (
              <article className="project-card" key={project.name}>
                <a
                  className="project-tile"
                  href={project.siteUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name}`}
                >
                  <span className="project-preview">
                    <iframe
                      src={project.siteUrl}
                      title={`${project.name} live preview`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      scrolling="no"
                    />
                  </span>
                </a>

                <div className="project-details">
                  <div>
                    <div className="project-title-row">
                      <h2>{project.name}</h2>
                      <a
                        className="project-github-icon"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open the ${project.name} GitHub repository`}
                        title="GitHub repository"
                      >
                        <GitHubIcon className="h-5 w-5" />
                      </a>
                    </div>
                    <p>{project.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </PageFrame>
    </main>
  );
}
