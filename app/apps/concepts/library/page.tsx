import Link from "next/link";
import { AppArtwork } from "@/components/app-artwork";
import {
  AppGitHubLink,
  AppPrimaryLink,
  AppStorePlaceholder
} from "@/components/app-links";
import { AppsConceptShell } from "@/components/apps-concept-shell";
import { appsContent } from "@/content/apps-content";

export default function LibraryAppsConcept() {
  return (
    <AppsConceptShell
      active="Library"
      footerVariant="homepage"
      frameVariant="library"
      showTopbar={false}
    >
      <section className="library-heading apps-heading">
        <div>
          <Link className="back-link library-back-link" href="/">
            <span aria-hidden="true">←</span>
            <span>Back</span>
          </Link>
          <h1>Apps</h1>
        </div>
        <div className="library-heading-copy">
          <p>
            A collection of iOS and Web apps I have designed and built utilising
            Agentic tools. Each project turns a useful idea into a practical app
            or utility.
          </p>
        </div>
      </section>

      <section className="library-grid" aria-label="Apps">
        {appsContent.items.map((app) => (
          <article
            className={app.featured ? "library-card is-featured" : "library-card"}
            key={app.name}
          >
            <div className="library-card-art">
              <AppArtwork app={app} compact={app.featured} />
              <div className="library-card-badges">
                {app.featured ? <span>Featured</span> : null}
                <span>{app.kind}</span>
              </div>
            </div>
            <div className="library-card-copy">
              <div className="app-card-title-row">
                <div>
                  <span>{app.label}</span>
                  <h2>{app.name}</h2>
                </div>
                <AppStorePlaceholder app={app} className="apps-icon-button" />
                <AppGitHubLink app={app} className="apps-icon-button" />
              </div>
              <p>{app.description}</p>
              <AppPrimaryLink app={app} className="apps-text-link" />
            </div>
          </article>
        ))}
      </section>
    </AppsConceptShell>
  );
}
