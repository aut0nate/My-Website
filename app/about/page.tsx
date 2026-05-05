import Image from "next/image";
import Link from "next/link";
import { PageFrame } from "@/components/page-frame";
import { siteContent } from "@/content/site-content";

export default function AboutPage() {
  return (
    <main className="shell">
      <PageFrame footer={siteContent.footer}>
        <div className="w-full space-y-7">
          <Link className="back-link" href="/">
            <span aria-hidden="true">←</span>
            <span>Back</span>
          </Link>

          <section className="mx-auto max-w-[42rem] text-center">
            <div className="avatar avatar-medium avatar-interactive mx-auto">
              <Image
                src={siteContent.avatar.src}
                alt={siteContent.avatar.alt}
                fill
                sizes="152px"
                className="avatar-image object-cover"
              />
            </div>
            <h1 className="mt-5 text-[2.4rem] font-semibold tracking-tight text-ink sm:text-[3rem]">
              About Me
            </h1>
          </section>

          <section className="w-full max-w-none space-y-5 text-left text-[0.97rem] leading-7 text-slate-200 sm:text-[1.02rem] sm:leading-8">
            {siteContent.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        </div>
      </PageFrame>
    </main>
  );
}
