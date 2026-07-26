import { AppArtwork } from "@/components/app-artwork";
import { AppGitHubLink, AppPrimaryLink } from "@/components/app-links";
import { AppsConceptShell } from "@/components/apps-concept-shell";
import { appsContent } from "@/content/apps-content";

export default function EditorialAppsConcept() {
  const [yestera, ...webApps] = appsContent.items;

  return (
    <AppsConceptShell active="Editorial">
      <section className="editorial-heading apps-heading">
        <div>
          <p className="apps-eyebrow">{appsContent.eyebrow}</p>
          <h1>{appsContent.title}</h1>
        </div>
        <p>{appsContent.intro}</p>
      </section>

      <section className="editorial-feature">
        <div className="editorial-feature-copy">
          <div className="app-meta-row">
            <span>Featured app</span>
            <span>{yestera.kind}</span>
          </div>
          <div>
            <p className="app-kicker">{yestera.label}</p>
            <h2>{yestera.name}</h2>
            <p className="editorial-feature-description">{yestera.description}</p>
          </div>
          <AppPrimaryLink app={yestera} className="apps-primary-button" />
        </div>

        <div className="editorial-feature-art">
          <AppArtwork app={yestera} />
        </div>
      </section>

      <section className="editorial-web-section">
        <header className="apps-section-heading">
          <p>Also on the web</p>
          <span>Three practical tools, designed and built for everyday use.</span>
        </header>

        <div className="editorial-web-grid">
          {webApps.map((app, index) => (
            <article className="editorial-web-card" key={app.name}>
              <div className="editorial-card-number">0{index + 2}</div>
              <AppArtwork app={app} compact />
              <div className="editorial-card-copy">
                <div className="app-card-title-row">
                  <div>
                    <span>{app.label}</span>
                    <h3>{app.name}</h3>
                  </div>
                  <AppGitHubLink app={app} className="apps-icon-button" />
                </div>
                <p>{app.description}</p>
                <AppPrimaryLink app={app} className="apps-text-link" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </AppsConceptShell>
  );
}
