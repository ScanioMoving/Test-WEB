import Link from "next/link";
import { COMPANY, TEL_HREF, MAILTO_HREF } from "@/lib/contact";
import { pageMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMetadata({
  path: "/accessibility",
  title: "Accessibility Statement",
  description:
    "Scanio Moving & Storage is committed to keeping scaniomoving.com accessible to everyone, targeting WCAG 2.1 Level AA. Contact us if you encounter any barrier.",
});

export default function AccessibilityPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Accessibility", path: "/accessibility" },
        ])}
      />
      <div className="h-[150px] w-full bg-white" />
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-16">
          <p className="text-[11px] tracking-[0.3em] uppercase font-medium mb-3" style={{ color: "#0B5DB5" }}>
            Our commitment
          </p>
          <h1
            className="text-[clamp(34px,4.8vw,60px)] font-semibold leading-[1.05] tracking-[-0.02em] mb-8"
            style={{ color: "#0B5DB5" }}
          >
            Accessibility Statement
          </h1>

          <div className="article-prose">
            <p>
              Scanio Moving &amp; Storage wants everyone to be able to use our
              website, including people who rely on assistive technology such as
              screen readers, screen magnifiers, voice control, or keyboard-only
              navigation. Accessibility is an ongoing effort, and we work to keep
              this site usable for the widest possible audience.
            </p>

            <h2>Standard we aim for</h2>
            <p>
              We aim to conform to the{" "}
              <a
                href="https://www.w3.org/WAI/WCAG21/quickref/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web Content Accessibility Guidelines (WCAG) 2.1, Level AA
              </a>
              , the standard widely referenced under the Americans with
              Disabilities Act (ADA).
            </p>

            <h2>What we have done</h2>
            <ul>
              <li>Text and interface colors are checked for sufficient contrast.</li>
              <li>The site is operable with a keyboard alone, with a visible focus indicator and a &ldquo;skip to main content&rdquo; link.</li>
              <li>Form fields have clear, programmatically associated labels.</li>
              <li>Images carry descriptive alternative text, and headings follow a logical order.</li>
              <li>Animation is reduced for visitors whose devices request reduced motion.</li>
              <li>We test with automated tools and manual review on an ongoing basis.</li>
            </ul>

            <h2>Known limitations</h2>
            <p>
              Despite our efforts, some content may not yet be fully accessible.
              We are actively working to identify and resolve any remaining
              issues, and third-party tools embedded on the site (such as address
              lookup) are designed to fall back to a standard text field if they
              do not load.
            </p>

            <h2>Tell us about a problem</h2>
            <p>
              If you run into any barrier on this website, or need information in
              a different format, please let us know and we will do our best to
              help and to fix the issue:
            </p>
            <ul>
              <li>
                Phone:{" "}
                <a href={TEL_HREF}>{COMPANY.phone.display}</a>
              </li>
              <li>
                Email:{" "}
                <a href={MAILTO_HREF}>{COMPANY.email}</a>
              </li>
            </ul>
            <p>
              Please include the web address of the page and a description of the
              problem so we can respond as quickly as possible. You can also{" "}
              <Link href="/contact">reach us through our contact page</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
