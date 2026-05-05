import Image from "next/image";
import Link from "next/link";
import {
  GitHubIcon,
  LinkedInIcon,
  PersonIcon,
  RssIcon,
  XIcon
} from "@/components/icons";
import { PageFrame } from "@/components/page-frame";
import { QuickLink } from "@/components/quick-link";
import { siteContent } from "@/content/site-content";

export function HomeCard() {
  const socialLinks = siteContent.links.filter((link) => link.icon !== "rss");
  const blogLink = siteContent.links.find((link) => link.icon === "rss");

  function renderIcon(icon: string) {
    if (icon === "rss") {
      return <RssIcon className="h-8 w-8" />;
    }

    if (icon === "github") {
      return <GitHubIcon className="h-7 w-7" />;
    }

    if (icon === "x") {
      return <XIcon className="h-6 w-6" />;
    }

    return <LinkedInIcon className="h-7 w-7" />;
  }

  return (
    <PageFrame footer={siteContent.footer}>
      <div className="grid w-full gap-6 md:grid-cols-[minmax(0,1fr)_205px] md:items-center md:gap-8 lg:grid-cols-[minmax(0,1fr)_225px] xl:grid-cols-[minmax(0,1fr)_245px] xl:gap-12">
        <section className="min-w-0 max-w-lg space-y-4">
          <div className="avatar avatar-large avatar-interactive">
            <Image
              src={siteContent.avatar.src}
              alt={siteContent.avatar.alt}
              fill
              sizes="136px"
              priority
              className="avatar-image object-cover"
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-[2.25rem] font-medium tracking-tight text-ink sm:text-[2.6rem] lg:text-[3rem] xl:text-[3.35rem]">
              {siteContent.name}
            </h1>
            <p className="max-w-lg text-sm leading-7 text-slate-300 sm:text-[0.94rem] sm:leading-[1.65] xl:text-base xl:leading-[1.75]">
              {siteContent.homeIntro}
            </p>
          </div>
        </section>

        <section className="flex min-w-0 flex-col justify-center gap-3 self-stretch lg:pl-0 xl:gap-5">
          <Link href="/about">
            <QuickLink label="About Me" icon={<PersonIcon className="h-8 w-8" />} />
          </Link>
          {blogLink ? (
            <a
              href={blogLink.href}
              target="_blank"
              rel="noreferrer"
              aria-label={blogLink.ariaLabel}
            >
              <QuickLink label={blogLink.label} icon={renderIcon(blogLink.icon)} />
            </a>
          ) : null}

          <div className="social-links" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className="social-link"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.ariaLabel}
                title={link.label}
              >
                <span className="social-link-icon">{renderIcon(link.icon)}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
