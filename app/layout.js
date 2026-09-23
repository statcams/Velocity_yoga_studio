import { Poppins, Inter, Pacifico } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.velocityyoga.studio"),
  title: {
    default: "Velocity Yoga Studio | Yoga Classes in Redmond, WA",
    template: "%s | Velocity Yoga Studio",
  },
  description:
    "Velocity Yoga Studio is Redmond, WA's newest yoga studio, located above Velocity Pickleball Club. A warm, welcoming space to build strength, flexibility, and calm. Explore our classes, meet our teachers, and book your first session today.",
  openGraph: {
    siteName: "Velocity Yoga Studio",
    type: "website",
  },
};

// LocalBusiness structured data — address is confirmed. Add `openingHoursSpecification`
// once Ellie finalizes studio hours; omit rather than guess in the meantime.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "Velocity Yoga Studio",
  description:
    "Redmond's newest yoga studio, located above Velocity Pickleball Club. All-levels classes, expert teachers, and a welcoming space to move and breathe.",
  url: "https://www.velocityyoga.studio",
  telephone: "+14256456656",
  email: "info@skpvelocity.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9660 153rd Ave NE",
    addressLocality: "Redmond",
    addressRegion: "WA",
    postalCode: "98052",
    addressCountry: "US",
  },
  sameAs: ["https://instagram.com/velocitypbc"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${pacifico.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-text" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <SmoothScroll />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
