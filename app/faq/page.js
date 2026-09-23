import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: { absolute: "FAQs | Velocity Yoga Studio Redmond" },
  description:
    "Answers to common questions about classes, pricing, what to bring, studio etiquette, and finding us upstairs at Velocity. New to yoga? Start here.",
};

export default function FaqPage() {
  return (
    <PageTransition>
      <section className="border-b border-border bg-bg-alt px-6 py-18 text-center">
        <span className="mb-3.5 inline-block text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Support
        </span>
        <h1 className="mb-3.5 text-4xl font-semibold sm:text-5xl">Frequently Asked Questions</h1>
        <p className="mx-auto max-w-lg text-text-soft">
          New to Velocity? Start here — and if you don&apos;t see your question, reach out and
          we&apos;ll get back to you fast.
        </p>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <FaqAccordion />

          <div className="mx-auto mt-5 max-w-3xl rounded-3xl bg-bg-alt p-11 text-center">
            <h3 className="mb-2.5 text-2xl font-semibold">Still have questions?</h3>
            <p className="mb-5.5 text-text-soft">
              Our front desk team is happy to help with anything not covered here.
            </p>
            <Link
              href="/booking"
              className="inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-accent-dark"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
