import Script from "next/script";
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
        <div id="booking-widget-container" className="min-h-[640px] w-full">
          <Script
            type="module"
            src="https://widgets.wellnessliving.com/schedule/widget.js"
            strategy="afterInteractive"
          />
          <wl-schedule-widget
            k_business="879941"
            k_schema="01a10db5-fa6b-7086-8ac3-8118f86e018d"
          ></wl-schedule-widget>
        </div>
      </section>
    </PageTransition>
  );
}
