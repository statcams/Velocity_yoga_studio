import PageTransition from "@/components/PageTransition";
import PosesLibrary from "@/components/PosesLibrary";

export const metadata = {
  title: { absolute: "Yoga Pose Library | Velocity Yoga Studio" },
  description:
    "Browse yoga poses by category with English and Sanskrit names, alignment cues, benefits, and modifications. A learning resource from Velocity Yoga.",
};

// Note: intentionally not linked in the main navigation yet, per requirements —
// the page exists at /poses and can be enabled from the header nav later.
export default function PosesPage() {
  return (
    <PageTransition>
      <section className="border-b border-border bg-bg-alt px-6 py-18 text-center">
        <span className="mb-3.5 inline-block text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Library
        </span>
        <h1 className="mb-3.5 text-4xl font-semibold sm:text-5xl">Yoga Poses Library</h1>
        <p className="mx-auto max-w-lg text-text-soft">
          Browse postures by category and tap any pose for alignment cues, benefits, and safety
          tips.
        </p>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <PosesLibrary />
        </div>
      </section>
    </PageTransition>
  );
}
