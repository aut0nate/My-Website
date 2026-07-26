import { AppArtwork } from "@/components/app-artwork";
import { AppGitHubLink, AppPrimaryLink } from "@/components/app-links";
import { AppsConceptShell } from "@/components/apps-concept-shell";
import { appsContent } from "@/content/apps-content";

export default function MosaicAppsConcept() {
  return (
    <AppsConceptShell active="Mosaic">
      <section className="mosaic-heading apps-heading">
        <div>
          <p className="apps-eyebrow">{appsContent.eyebrow}</p>
          <h1>Things I’ve<br />brought to life.</h1>
        </div>
        <div className="mosaic-heading-aside">
          <span className="mosaic-count">04</span>
          <p>{appsContent.intro}</p>
        </div>
      </section>

      <section className="mosaic-grid" aria-label="Apps">
        {appsContent.items.map((app) => (
          <article
            className={`mosaic-card mosaic-card-${app.artwork}`}
            key={app.name}
          >
            <div className="mosaic-card-art">
              <AppArtwork app={app} compact={!app.featured} />
            </div>
            <div className="mosaic-card-shade" />
            <div className="mosaic-card-copy">
              <div className="mosaic-card-meta">
                <span>{app.featured ? "Featured · " : ""}{app.kind}</span>
                <AppGitHubLink app={app} className="mosaic-github-link" />
              </div>
              <div>
                <p>{app.label}</p>
                <h2>{app.name}</h2>
              </div>
              <p className="mosaic-description">{app.description}</p>
              <AppPrimaryLink app={app} className="mosaic-open-link" />
            </div>
          </article>
        ))}
      </section>
    </AppsConceptShell>
  );
}
