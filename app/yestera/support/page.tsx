import type { Metadata } from "next";
import Link from "next/link";
import { YesteraShell } from "@/components/yestera/yestera-shell";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Help with Photos access, memories, widgets, Shortcuts, notifications and sharing in Yestera.",
  alternates: {
    canonical: "/yestera/support"
  }
};

const helpTopics = [
  {
    title: "Yestera cannot see my photographs",
    body: "Open iPhone Settings, choose Apps, Yestera, then Photos. Select Full Access to see your whole library, or edit the selection if you prefer Limited Access. Yestera works only with the items you allow."
  },
  {
    title: "There are no memories for today",
    body: "That simply means there are no accessible items with today’s month and day. Use the calendar beside the date to explore another day. The app does not create or alter memories to fill an empty date."
  },
  {
    title: "A photograph or video is still loading",
    body: "An original stored in iCloud may need to download before Yestera can display or share it. Keep the iPhone connected and leave the memory open while the download completes."
  },
  {
    title: "The widget is not showing a photograph",
    body: "Open Yestera once after granting Photos access so it can prepare private, widget-sized images. Widget refresh timing is controlled by iOS and may not happen immediately."
  },
  {
    title: "Daily Memories did not appear",
    body: "Confirm Daily Memories is enabled in Yestera Settings and notifications are allowed in iPhone Settings. Yestera stays quiet on days with no accessible memories; Focus and Scheduled Summary can also affect delivery."
  },
  {
    title: "What does the sharing indicator mean?",
    body: "It records that iOS reported a completed sharing activity. It does not confirm that another person received or opened the media, and Yestera never stores the recipient or selected app."
  }
] as const;

export default function YesteraSupportPage() {
  return (
    <YesteraShell currentPage="support">
      <article className="yestera-document">
        <header className="yestera-document-hero">
          <p className="yestera-section-kicker">Yestera Support</p>
          <h1>How can we help?</h1>
          <p>
            Straightforward answers for the most common questions about your
            memories, privacy and iPhone settings.
          </p>
          <a
            className="yestera-support-button"
            href="mailto:contact@nathandarker.it?subject=Yestera%20support"
          >
            Email support <span aria-hidden="true">↗</span>
          </a>
        </header>

        <section className="yestera-support-grid" aria-label="Help topics">
          {helpTopics.map((topic) => (
            <article key={topic.title}>
              <h2>{topic.title}</h2>
              <p>{topic.body}</p>
            </article>
          ))}
        </section>

        <section className="yestera-support-notes">
          <div>
            <p className="yestera-section-kicker">Compatibility</p>
            <h2>Built for the newest iPhone experience.</h2>
          </div>
          <p>
            Yestera 1.0 is designed for iPhone and requires iOS 26.5 or later.
            An Apple Account is not required by Yestera. If you use iCloud
            Photos, Apple may need to download an original before Yestera can
            display or share it.
          </p>
        </section>

        <section className="yestera-contact-panel">
          <div>
            <p className="yestera-section-kicker">Still need help?</p>
            <h2>Tell us what happened.</h2>
            <p>
              Email <a href="mailto:contact@nathandarker.it">contact@nathandarker.it</a>{" "}
              with your iPhone model, iOS version and the steps that led to the
              issue. Please do not attach private photographs unless they are
              essential and you are comfortable sharing them.
            </p>
          </div>
          <Link className="yestera-text-link" href="/yestera/privacy">
            Read the privacy policy <span aria-hidden="true">→</span>
          </Link>
        </section>
      </article>
    </YesteraShell>
  );
}
