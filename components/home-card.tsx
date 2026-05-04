import Image from "next/image";
import Link from "next/link";
import {
  GitHubIcon,
  LinkedInIcon,
  PersonIcon,
  RssIcon
} from "@/components/icons";
import { PageFrame } from "@/components/page-frame";
import { QuickLink } from "@/components/quick-link";
import { siteContent } from "@/content/site-content";

export function HomeCard() {
  return (
    <PageFrame footer={siteContent.footer}>
      <div className="grid w-full gap-6 md:grid-cols-[minmax(0,1fr)_220px] md:items-center md:gap-8 lg:grid-cols-[minmax(0,1fr)_250px] xl:grid-cols-[minmax(0,1fr)_280px] xl:gap-12">
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

        <section className="grid min-w-0 gap-3 lg:pl-0 xl:gap-5">
          <Link href="/about">
            <QuickLink label="About Me" icon={<PersonIcon className="h-8 w-8" />} />
          </Link>
          {siteContent.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.ariaLabel}
            >
              <QuickLink
                label={link.label}
                icon={
                  link.icon === "rss" ? (
                    <RssIcon className="h-8 w-8" />
                  ) : link.icon === "github" ? (
                    <GitHubIcon className="h-7 w-7" />
                  ) : (
                    <LinkedInIcon className="h-7 w-7" />
                  )
                }
              />
            </a>
          ))}
        </section>
      </div>
    </PageFrame>
  );
}
