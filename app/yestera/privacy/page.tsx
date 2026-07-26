import type { Metadata } from "next";
import { YesteraShell } from "@/components/yestera/yestera-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Yestera handles Photos access, sharing history, widgets, notifications and support information.",
  alternates: {
    canonical: "/yestera/privacy"
  }
};

export default function YesteraPrivacyPage() {
  return (
    <YesteraShell currentPage="privacy">
      <article className="yestera-document yestera-policy">
        <header className="yestera-document-hero">
          <p className="yestera-section-kicker">Yestera Privacy Policy</p>
          <h1>Your memories remain yours.</h1>
          <p>
            Yestera is designed to rediscover your Photos library without
            creating a new collection of your personal information.
          </p>
          <p className="yestera-effective-date">Effective 26 July 2026</p>
        </header>

        <div className="yestera-policy-intro">
          <strong>The short version</strong>
          <p>
            Yestera has no advertising, tracking, analytics, user accounts or
            developer-operated server. It does not upload your photographs or
            videos to us.
          </p>
        </div>

        <div className="yestera-policy-content">
          <section>
            <h2>1. Information Yestera accesses</h2>
            <p>
              With your permission, Yestera accesses items in your Apple Photos
              library so it can find photographs, Live Photos and videos
              captured on a selected calendar day. This may include the media,
              creation date, favourite state, media type, camera metadata and
              recorded location stored with an item.
            </p>
            <p>
              This information is processed on your iPhone to provide the app’s
              features. Yestera supports both Full Access and Limited Access and
              works only with the items you allow.
            </p>
          </section>

          <section>
            <h2>2. Photographs and videos</h2>
            <p>
              Your original media remains in Apple Photos. Yestera does not
              copy your library to a Yestera server. High-quality media may be
              downloaded from your iCloud Photos library by Apple when you
              choose to view or share it.
            </p>
            <p>
              When sharing requires a file, Yestera creates a protected
              temporary copy and asks iOS to present the standard share sheet.
              Temporary exports are removed after use or during later app
              housekeeping. Yestera does not learn which person or destination
              application you choose.
            </p>
          </section>

          <section>
            <h2>3. Sharing history</h2>
            <p>
              If iOS reports that a sharing activity completed, Yestera stores
              the first and most recent completion dates, a completion count and
              an identifier needed to reconnect that record with the Photos
              item. A completed activity does not prove that a recipient
              received or opened the media.
            </p>
            <p>
              This minimal history is stored only on your iPhone. It is not
              uploaded to Yestera, iCloud or a developer-operated service.
              Yestera does not store media, thumbnails, coordinates, place
              names, captions, recipients or destination applications in its
              sharing history.
            </p>
          </section>

          <section>
            <h2>4. Widgets and Shortcuts</h2>
            <p>
              Yestera prepares a small, protected on-device cache of
              widget-sized images from eligible photographs and Live Photos.
              Videos are excluded. The cache is size-limited, expires on a
              rolling basis and is cleared if Photos access is removed.
            </p>
            <p>
              App Shortcuts access your library only when you run a Yestera
              action. If you choose a memory for use in another Shortcut,
              Yestera provides the selected original file to that workflow at
              your request.
            </p>
          </section>

          <section>
            <h2>5. Notifications and location</h2>
            <p>
              Daily Memories reminders are optional and are scheduled locally
              on your iPhone. Yestera does not use remote push notifications
              and stays quiet when there are no accessible memories for the
              day.
            </p>
            <p>
              Yestera can display a location already recorded in a Photos item
              and open it as a destination in Apple Maps. It does not request or
              track your current location.
            </p>
          </section>

          <section>
            <h2>6. Changes to your Photos library</h2>
            <p>
              Yestera changes a favourite state or requests deletion only after
              you select the corresponding action. Deletion uses Apple’s system
              confirmation. No other Photos-library changes are made.
            </p>
          </section>

          <section>
            <h2>7. Information we collect</h2>
            <p>
              We do not collect data from the Yestera app. There are no
              third-party analytics or advertising SDKs, and Yestera does not
              create an account or profile about you.
            </p>
            <p>
              If you email support, your message and contact details are
              received through your chosen email service and used only to
              respond to your request. Do not send private media unless it is
              necessary and you choose to do so.
            </p>
          </section>

          <section>
            <h2>8. Your choices</h2>
            <p>
              You can change Photos or notification permission in iPhone
              Settings. Yestera Settings lets you clear sharing history and
              remove prepared widget data. Deleting Yestera removes its local
              app data. Apple separately controls the photographs and videos
              retained in your Photos library, including items in iCloud
              Photos.
            </p>
          </section>

          <section>
            <h2>9. Children</h2>
            <p>
              Yestera is a general-audience Photos utility and is not directed
              at children. Because the app does not collect data, it does not
              knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2>10. Updates and contact</h2>
            <p>
              This policy may be updated when Yestera’s features or legal
              requirements change. The effective date above will identify the
              latest version.
            </p>
            <p>
              Questions about this policy can be sent to{" "}
              <a href="mailto:contact@nathandarker.it?subject=Yestera%20privacy">
                contact@nathandarker.it
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </YesteraShell>
  );
}
