import Image from "next/image";
import type { PortfolioApp } from "@/content/apps-content";

export function AppArtwork({
  app,
  compact = false
}: {
  app: PortfolioApp;
  compact?: boolean;
}) {
  if (app.artwork === "yestera") {
    return (
      <div className={compact ? "app-art app-art-yestera is-compact" : "app-art app-art-yestera"}>
        <div className="yestera-orbit yestera-orbit-one" />
        <div className="yestera-orbit yestera-orbit-two" />
        <div className="yestera-photo yestera-photo-back" aria-hidden="true" />
        <div className="yestera-photo yestera-photo-middle" aria-hidden="true" />
        <div className="yestera-icon-wrap">
          <Image
            src="/images/apps/yestera-icon.png"
            alt="Yestera app icon"
            fill
            sizes={compact ? "128px" : "(max-width: 768px) 220px, 320px"}
            className="object-cover"
            priority
          />
        </div>
      </div>
    );
  }

  const logo = {
    prompts: {
      src: "/images/apps/prompt-vault-logo.svg",
      alt: "Prompt Vault logo"
    },
    gallery: {
      src: "/images/apps/ai-art-hub-logo.png",
      alt: "AI Image Hub logo"
    },
    collection: {
      src: "/images/apps/the-collection-logo-v2.svg",
      alt: "The Collection logo"
    }
  }[app.artwork];

  return (
    <div className={`app-art app-art-web-brand app-art-${app.artwork}`}>
      <div className="brand-orbit brand-orbit-one" aria-hidden="true" />
      <div className="brand-orbit brand-orbit-two" aria-hidden="true" />
      <div className="brand-logo-card brand-logo-card-back" aria-hidden="true" />
      <div className="brand-logo-card brand-logo-card-middle" aria-hidden="true" />
      <div className="brand-logo-wrap">
        <Image
          src={logo.src}
          alt={logo.alt}
          width={512}
          height={512}
          sizes="135px"
          className="brand-logo-image"
          priority
        />
      </div>
    </div>
  );
}
