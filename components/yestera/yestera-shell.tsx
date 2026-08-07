import Image from "next/image";
import Link from "next/link";
import { yesteraAppStoreURL } from "@/content/apps-content";

type YesteraPage = "home" | "support" | "privacy";

const navigation: Array<{ href: string; label: string; page: YesteraPage }> = [
  { href: "/yestera", label: "Overview", page: "home" },
  { href: "/yestera/support", label: "Support", page: "support" },
  { href: "/yestera/privacy", label: "Privacy", page: "privacy" }
];

export function YesteraShell({
  children,
  currentPage
}: {
  children: React.ReactNode;
  currentPage: YesteraPage;
}) {
  return (
    <div className="yestera-site">
      <a className="yestera-skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="yestera-header">
        <Link className="yestera-wordmark" href="/yestera" aria-label="Yestera home">
          <Image
            src="/images/yestera/app-icon.png"
            width={42}
            height={42}
            alt=""
            className="yestera-wordmark-icon"
            priority
          />
          <span>Yestera</span>
        </Link>

        <nav className="yestera-nav" aria-label="Yestera">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              aria-current={currentPage === item.page ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a href={yesteraAppStoreURL} target="_blank" rel="noreferrer">
            Download
          </a>
        </nav>
      </header>

      <main id="main-content">{children}</main>

      <footer className="yestera-footer">
        <div>
          <Link className="yestera-footer-brand" href="/yestera">
            Yestera
          </Link>
          <p>Your past, beautifully present.</p>
        </div>
        <div className="yestera-footer-links">
          <Link href="/yestera/support">Support</Link>
          <Link href="/yestera/privacy">Privacy</Link>
          <a href={yesteraAppStoreURL} target="_blank" rel="noreferrer">
            App Store
          </a>
          <Link href="/">Nathan Darker</Link>
        </div>
        <p className="yestera-copyright">© 2026 Nathan Darker</p>
      </footer>
    </div>
  );
}
