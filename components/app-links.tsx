import Link from "next/link";
import { AppStoreIcon, GitHubIcon } from "@/components/icons";
import { ArrowIcon } from "@/components/apps-concept-shell";
import type { PortfolioApp } from "@/content/apps-content";

export function AppPrimaryLink({
  app,
  className
}: {
  app: PortfolioApp;
  className?: string;
}) {
  const content = (
    <>
      <span>{app.kind === "iOS" ? "Explore Yestera" : "Open app"}</span>
      <ArrowIcon className="h-4 w-4" />
    </>
  );

  if (app.siteUrl.startsWith("/")) {
    return (
      <Link className={className} href={app.siteUrl}>
        {content}
      </Link>
    );
  }

  return (
    <a className={className} href={app.siteUrl} target="_blank" rel="noreferrer">
      {content}
    </a>
  );
}

export function AppGitHubLink({
  app,
  className
}: {
  app: PortfolioApp;
  className?: string;
}) {
  if (!app.githubUrl) {
    return null;
  }

  return (
    <a
      className={className}
      href={app.githubUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open the ${app.name} GitHub repository`}
      title="GitHub repository"
    >
      <GitHubIcon className="h-4 w-4" />
    </a>
  );
}

export function AppStorePlaceholder({
  app,
  className
}: {
  app: PortfolioApp;
  className?: string;
}) {
  if (app.kind !== "iOS") {
    return null;
  }

  return (
    <span
      className={[className, "is-placeholder"].filter(Boolean).join(" ")}
      role="img"
      aria-label="App Store link coming soon"
      title="App Store link coming soon"
    >
      <AppStoreIcon className="h-5 w-5" />
    </span>
  );
}
