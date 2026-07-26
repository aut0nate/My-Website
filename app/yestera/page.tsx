import Image from "next/image";
import Link from "next/link";
import { YesteraShell } from "@/components/yestera/yestera-shell";

const features = [
  {
    number: "01",
    title: "This day, across every year",
    body: "Start with a beautiful mosaic of the photographs, Live Photos and videos captured on today’s date, then explore any other day."
  },
  {
    number: "02",
    title: "The details behind the moment",
    body: "See when and where a memory was made, which camera captured it and open recorded places in Apple Maps."
  },
  {
    number: "03",
    title: "Made for the way you remember",
    body: "Move between Mosaic and Timeline, browse full-screen media, revisit favourites and share the untouched original."
  },
  {
    number: "04",
    title: "Present beyond the app",
    body: "Bring memories to your Home or Lock Screen and use focused Shortcuts to open, count or choose today’s memories."
  }
] as const;

export default function YesteraPage() {
  return (
    <YesteraShell currentPage="home">
      <section className="yestera-hero" aria-labelledby="yestera-title">
        <div className="yestera-hero-copy">
          <p className="yestera-eyebrow">
            <span aria-hidden="true" />
            A private photo companion for iPhone
          </p>
          <h1 id="yestera-title">
            Your past,
            <br />
            <em>beautifully present.</em>
          </h1>
          <p className="yestera-hero-summary">
            Rediscover photographs and videos from this day across the years,
            in a calm, modern experience built around your Photos library.
          </p>
          <div className="yestera-hero-actions">
            <span className="yestera-coming-soon">Coming soon to the App Store</span>
            <Link className="yestera-text-link" href="/yestera/privacy">
              Read our privacy promise <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="yestera-hero-art" aria-label="Yestera app icon">
          <div className="yestera-sun-disc" aria-hidden="true" />
          <div className="yestera-photo-stack yestera-photo-stack-back" aria-hidden="true" />
          <div className="yestera-photo-stack yestera-photo-stack-mid" aria-hidden="true" />
          <div className="yestera-icon-mount">
            <Image
              src="/images/yestera/app-icon.png"
              width={1024}
              height={1024}
              alt="Yestera app icon, an instant photograph framing a low sun"
              className="yestera-app-icon"
              priority
            />
            <p>On this day</p>
          </div>
        </div>
      </section>

      <section className="yestera-manifesto" aria-labelledby="private-heading">
        <p className="yestera-section-kicker">Private by design</p>
        <h2 id="private-heading">
          Made for your library.
          <br />
          <span>Not ours.</span>
        </h2>
        <p>
          Yestera has no accounts, advertising, tracking or analytics. Your
          photographs and videos remain in Apple Photos, and the app has no
          developer-operated server.
        </p>
        <div className="yestera-principles" aria-label="Privacy principles">
          <span>No account</span>
          <span>No tracking</span>
          <span>No adverts</span>
          <span>No photo uploads</span>
        </div>
      </section>

      <section className="yestera-features" aria-labelledby="features-heading">
        <div className="yestera-section-heading">
          <p className="yestera-section-kicker">Thoughtfully familiar</p>
          <h2 id="features-heading">Everything the moment needs.</h2>
        </div>
        <div className="yestera-feature-grid">
          {features.map((feature) => (
            <article key={feature.number}>
              <span className="yestera-feature-number">{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="yestera-closing">
        <div>
          <p className="yestera-section-kicker">Yestera for iPhone</p>
          <h2>There is more to today than today.</h2>
        </div>
        <Link className="yestera-support-button" href="/yestera/support">
          Visit support <span aria-hidden="true">→</span>
        </Link>
      </section>
    </YesteraShell>
  );
}
