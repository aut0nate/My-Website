import Link from "next/link";
import type { ReactNode } from "react";
import { siteContent } from "@/content/site-content";

const concepts = [
  { href: "/apps/concepts/editorial", label: "01", name: "Editorial" },
  { href: "/apps/concepts/library", label: "02", name: "Library" },
  { href: "/apps/concepts/mosaic", label: "03", name: "Mosaic" }
] as const;

export function AppsConceptShell({
  active,
  children,
  footerVariant = "default",
  frameVariant = "default",
  showTopbar = true
}: {
  active?: (typeof concepts)[number]["name"];
  children: ReactNode;
  footerVariant?: "default" | "homepage";
  frameVariant?: "default" | "library";
  showTopbar?: boolean;
}) {
  return (
    <main className="apps-concepts-shell">
      <div
        className={
          frameVariant === "library"
            ? "apps-concepts-frame is-library"
            : "apps-concepts-frame"
        }
      >
        {showTopbar ? (
          <header className="concept-topbar">
            <Link className="concept-brand" href="/">
              <span className="concept-brand-mark">ND</span>
              <span>Nathan Darker</span>
            </Link>

            <nav className="concept-switcher" aria-label="Apps page concepts">
              {concepts.map((concept) => (
                <Link
                  key={concept.name}
                  className={active === concept.name ? "is-active" : undefined}
                  href={concept.href}
                  aria-current={active === concept.name ? "page" : undefined}
                >
                  <span>{concept.label}</span>
                  {concept.name}
                </Link>
              ))}
            </nav>
          </header>
        ) : null}

        {children}

        <footer
          className={
            footerVariant === "homepage"
              ? "concept-footer is-homepage"
              : "concept-footer"
          }
        >
          <span>{siteContent.footer}</span>
          {footerVariant === "default" ? <Link href="/">Back to home</Link> : null}
        </footer>
      </div>
    </main>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
