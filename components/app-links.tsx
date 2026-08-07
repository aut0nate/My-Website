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
  const destination = app.appStoreUrl ?? app.siteUrl;
  const content = (
    <>
      <span>{app.kind === "iOS" ? "Download Yestera" : "Open app"}</span>
      <ArrowIcon className="h-4 w-4" />
    </>
  );

  if (destination.startsWith("/")) {
    return (
      <Link className={className} href={destination}>
        {content}
      </Link>
    );
  }

  return (
    <a className={className} href={destination} target="_blank" rel="noreferrer">
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

export function AppStoreLink({
  app,
  className
}: {
  app: PortfolioApp;
  className?: string;
}) {
  if (!app.appStoreUrl) {
    return null;
  }

  return (
    <a
      className={className}
      href={app.appStoreUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Download ${app.name} on the App Store`}
      title={`Download ${app.name} on the App Store`}
    >
      <AppStoreIcon className="h-5 w-5" />
    </a>
  );
}
