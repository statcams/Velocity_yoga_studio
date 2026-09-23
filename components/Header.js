"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/booking", label: "Schedule" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur"
      style={{ viewTransitionName: "site-header" }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 py-4 pl-3 pr-6">
        <Link href="/" className="flex items-center" aria-label="Velocity Yoga Studio — Home">
          <Image
            src="/velocity_yoga_head.png"
            alt="Velocity Yoga Studio"
            width={800}
            height={218}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </Link>

        <nav className="hidden items-center justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-lg font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-accent-dark after:transition-all after:duration-300 hover:text-primary-dark hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-4">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-1.5 p-1.5 md:hidden"
          >
            <span className="h-0.5 w-6 bg-text" />
            <span className="h-0.5 w-6 bg-text" />
            <span className="h-0.5 w-6 bg-text" />
          </button>

          <Link
            href="/booking"
            className="hidden rounded-full bg-accent px-7 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-accent-dark md:inline-block"
          >
            Book Now
          </Link>
        </div>
      </div>

      <nav
        className={`absolute inset-x-0 top-full origin-top overflow-hidden border-t border-border bg-bg shadow-lg transition-all duration-300 ease-in-out md:hidden ${
          open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-3 font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-accent px-7 py-3 text-center text-sm font-semibold text-primary"
          >
            Book Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
