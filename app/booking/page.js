import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: { absolute: "Class Schedule & Booking | Velocity Yoga Studio Redmond" },
  description:
    "View the full class schedule and reserve your spot at Velocity Yoga in Redmond, WA. Easy online booking for all levels.",
};

export default function BookingPage() {
  return (
    <PageTransition>
      <section className="px-6 pb-2.5 pt-16 text-center">
        <h1 className="mb-3 text-4xl font-semibold sm:text-5xl">Reserve Your Spot</h1>
        <p className="mx-auto max-w-lg text-text-soft">
          Browse the full class schedule below and book online in a few clicks. New here? Look
          for classes marked All Levels or Beginner-Friendly.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        {/*
          DEVELOPER NOTE: this container is the reserved slot for the Wellness
          Living booking widget iframe. Replace its contents with the embed
          snippet once it's provided — leave the id in place if the embed
          script targets it.
        */}
        <div
          id="booking-widget-container"
          className="flex min-h-[640px] w-full items-center justify-center rounded-3xl border-2 border-dashed border-border bg-bg-alt p-10 text-center"
        >
          <div>
            <h3 className="mb-2.5 text-xl font-semibold">Booking widget coming soon</h3>
            <p className="mx-auto max-w-sm text-text-soft">
              This space is reserved for our online booking widget. Check back shortly, or call
              the studio to reserve your spot in the meantime.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
