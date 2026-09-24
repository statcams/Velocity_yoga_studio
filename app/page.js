import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import HeroBackground from "@/components/HeroBackground";
import InitialsAvatar from "@/components/InitialsAvatar";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import { teachers, events } from "@/lib/data";

export const metadata = {
  title: { absolute: "Velocity Yoga Studio | Yoga Classes in Redmond, WA" },
  description:
    "Redmond's newest yoga studio, located above Velocity Pickleball Club. All-levels classes, expert teachers, and a welcoming space to move and breathe. Book your first class today.",
};

const values = [
  { title: "Community First", body: "A studio that feels like home from your very first class." },
  { title: "Real Progress", body: "Thoughtful sequencing that builds strength and mobility over time." },
  { title: "Mindful Teaching", body: "Small class sizes and hands-on guidance from experienced teachers." },
  { title: "Whole-Person Wellness", body: "Movement, breathwork, and mindfulness — all in one practice." },
];

export default function HomePage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden text-white">
        <HeroBackground />

        <div className="relative mx-auto w-full max-w-5xl px-6 text-center">
          <h1 className="text-2xl font-bold sm:whitespace-nowrap sm:text-3xl md:text-4xl lg:text-5xl">
            Strength Meets Stillness
          </h1>
          <p
            className="mt-2 text-2xl text-accent sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Redmond&apos;s Newest Yoga Studio
          </p>

          <div className="mx-auto my-8 h-px w-48 bg-white/40" />

          <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-white/85">
            Built for people whose minds never stop moving — right above{" "}
            <strong className="text-white">Velocity Pickleball Club</strong>. Whether
            you&apos;re brand new to yoga or have practiced for years, this is a space to slow
            down, breathe, and move with people who feel like community. Come as you are.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/booking"
              className="inline-block rounded-full bg-accent px-9 py-4 text-sm font-semibold text-primary shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-accent-dark"
            >
              Book Your First Class
            </Link>
            <Link
              href="/booking"
              className="inline-block rounded-full border border-white/50 px-9 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
            >
              View Class Schedule
            </Link>
          </div>
        </div>

        <a
          href="#mission"
          aria-label="Scroll to explore"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest text-white/70 transition hover:text-white sm:flex"
        >
          Scroll
          <span className="h-8 w-px animate-pulse bg-white/50" />
        </a>
      </section>

      {/* Mission */}
      <section id="mission" className="bg-primary py-22 px-6 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1fr_0.85fr]">
          <Reveal>
            <span className="mb-3.5 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              Our Mission
            </span>
            <h2 className="mb-5 text-3xl font-semibold sm:text-4xl">
              Yoga that meets you where you are.
            </h2>
            <p className="mb-10 text-white/70">
              At Velocity Yoga, we believe movement should feel intentional, not intimidating.
              Our mission is to build a studio where beginners feel as welcome as seasoned
              practitioners — a place to build strength, flexibility, and calm, one class at a
              time. We&apos;re proud to share a home with an active, competitive community next
              door, and we designed our classes to meet you wherever your body is on a
              particular day: recovering, stretching, or simply showing up.
            </p>

            <div className="divide-y divide-white/10 border-t border-white/10">
              {values.map((v, i) => (
                <div key={v.title} className="flex gap-5 py-5">
                  <span className="text-sm font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="mb-1 text-base font-semibold">{v.title}</h4>
                    <p className="text-sm text-white/60">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="overflow-hidden rounded-3xl ring-1 ring-white/15">
              <Image
                src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=900&q=80"
                alt="Instructor guiding a student through a pose at Velocity Yoga Studio in Redmond, WA"
                width={900}
                height={1100}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Teachers */}
      <section className="bg-bg-alt py-22 px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto mb-13 max-w-xl text-center">
            <span className="mb-3.5 inline-block text-xs font-semibold uppercase tracking-widest text-primary-dark">
              Our Team
            </span>
            <h2 className="mb-3.5 text-3xl font-semibold sm:text-4xl">Meet Our Teachers</h2>
            <p className="text-text-soft">
              Every teacher at Velocity brings their own style, specialty, and story — united by
              a shared passion for helping students feel at home on the mat.
            </p>
          </Reveal>

          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-7 sm:grid-cols-2">
            {teachers.map((t, i) => (
              <Reveal key={t.id} delay={i * 90}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-sm transition hover:-translate-y-1.5 hover:shadow-md">
                  <div className="aspect-[16/11] overflow-hidden">
                    {t.placeholderImage ? (
                      <InitialsAvatar name={t.name} />
                    ) : (
                      <Image
                        src={t.image}
                        alt={t.imageAlt || t.name}
                        width={700}
                        height={480}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5.5">
                    <h3 className="text-xl font-semibold leading-snug">{t.name}</h3>
                    <span className="mt-1 text-sm font-semibold text-primary-dark">
                      {t.role}
                    </span>
                    <p
                      className={`mt-3 flex-1 text-sm leading-relaxed ${
                        t.placeholder ? "italic text-orange-600" : "text-text-soft"
                      }`}
                    >
                      {t.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-22 px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto mb-13 max-w-xl text-center">
            <span className="mb-3.5 inline-block text-xs font-semibold uppercase tracking-widest text-primary-dark">
              What&apos;s Coming Up
            </span>
            <h2 className="mb-3.5 text-3xl font-semibold sm:text-4xl">
              Upcoming Events &amp; Workshops
            </h2>
            <p className="text-text-soft">
              From weekend retreats to focused masterclasses, there&apos;s always a way to deepen
              your practice at Velocity.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e, i) => (
              <Reveal key={e.id} delay={i * 90}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="aspect-[16/10] overflow-hidden">
                    <Image
                      src={e.image}
                      alt={e.imageAlt || e.title}
                      width={700}
                      height={440}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 p-5.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-dark">
                      {e.date}
                    </span>
                    <h3 className="text-lg font-semibold">{e.title}</h3>
                    <p className="flex-1 text-sm">{e.description}</p>
                    <Link
                      href="/booking"
                      className="text-sm font-semibold text-primary-dark hover:underline"
                    >
                      Reserve your spot &rarr;
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="bg-bg-alt py-22 px-6">
        <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <span className="mb-3.5 inline-block text-xs font-semibold uppercase tracking-widest text-primary-dark">
              Contact
            </span>
            <h2 className="mb-4 text-3xl font-semibold sm:text-4xl">Get in Touch</h2>
            <p className="mb-8 text-text-soft">
              Questions about classes, pricing, or finding us upstairs at Velocity? Send a
              message and our front desk team will get back to you fast.
            </p>
            <address className="space-y-2 text-sm not-italic text-text-soft">
              <p>9660 153rd Ave NE, Redmond, WA 98052</p>
              <p>
                <a href="tel:4256456656" className="hover:text-primary-dark">
                  425-645-6656
                </a>
              </p>
              <p>
                <a href="mailto:info@skpvelocity.com" className="hover:text-primary-dark">
                  info@skpvelocity.com
                </a>
              </p>
            </address>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-7 sm:p-9">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
