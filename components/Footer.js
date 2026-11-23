import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-primary py-16 text-[#e9e9e2]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 pb-11 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center" aria-label="Velocity Yoga Studio — Home">
              <Image
                src="/velocity_yoga_foot.png"
                alt="Velocity Yoga Studio"
                width={800}
                height={218}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-3.5 max-w-xs text-sm text-[#a9b4bd]">
              A warm, welcoming studio for building strength, flexibility, and calm — one breath
              at a time.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm uppercase tracking-wider text-white">Explore</h4>
            <ul className="space-y-2.5 text-sm text-[#a9b4bd]">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/booking" className="hover:text-white">Schedule &amp; Booking</Link></li>
              <li><Link href="/#get-in-touch" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm uppercase tracking-wider text-white">Visit Us</h4>
            <address className="space-y-1.5 text-sm not-italic text-[#a9b4bd]">
              <p>9660 153rd Ave NE</p>
              <p>Redmond, WA 98052</p>
              <p>
                <a href="tel:4252730329" className="hover:text-white">
                  425-273-0329
                </a>
              </p>
              <p>
                <a href="mailto:info@velocityyoga.co" className="hover:text-white">
                  info@velocityyoga.co
                </a>
              </p>
              <p>
                <a
                  href="https://instagram.com/velocityyoga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  @velocityyoga
                </a>
              </p>
            </address>
          </div>

          <div>
            <h4 className="mb-4 text-sm uppercase tracking-wider text-white">Stay in the Loop</h4>
            <p className="mb-3 text-sm text-[#a9b4bd]">
              Get class updates &amp; wellness tips in your inbox.
            </p>
            <NewsletterForm />
            <div className="mt-4 flex gap-3">
              <a
                href="https://instagram.com/velocityyoga"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1c3247] text-xs hover:border-accent hover:bg-accent hover:text-primary"
              >
                IG
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-2 border-t border-[#1c3247] pt-5 text-xs text-[#8a95a3]">
          <span>&copy; 2026 Velocity Yoga Studio. All rights reserved.</span>
          <span>Designed with care for our community.</span>
        </div>
      </div>
    </footer>
  );
}
