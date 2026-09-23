import BlogGrid from "@/components/BlogGrid";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: { absolute: "Yoga & Wellness Blog | Velocity Yoga Studio" },
  description:
    "Mindfulness tips, practice guidance, and studio news from Velocity Yoga in Redmond, WA — for both new and experienced students.",
};

export default function BlogPage() {
  return (
    <PageTransition>
      <section className="border-b border-border bg-bg-alt px-6 py-18 text-center">
        <span className="mb-3.5 inline-block text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Journal
        </span>
        <h1 className="mb-3.5 text-4xl font-semibold sm:text-5xl">Blog &amp; News</h1>
        <p className="mx-auto max-w-lg text-text-soft">
          Studio announcements, wellness tips, and mindfulness articles from our teaching team.
        </p>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <BlogGrid />
        </div>
      </section>
    </PageTransition>
  );
}
