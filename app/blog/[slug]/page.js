import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageTransition from "@/components/PageTransition";
import { posts } from "@/lib/data";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  };
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const fallbackRelated = related.length ? related : posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <PageTransition>
      <section className="px-6 py-16">
        <article className="mx-auto max-w-3xl">
          <Link href="/blog" className="mb-6 inline-block text-sm font-semibold text-primary-dark hover:underline">
            &larr; Back to Blog
          </Link>

          <span className="mb-3.5 inline-block rounded-full bg-bg-alt px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-dark">
            {post.category}
          </span>
          <h1 className="mb-3 text-3xl font-semibold sm:text-4xl">{post.title}</h1>
          <div className="mb-8 flex items-center gap-3.5 text-sm text-text-soft">
            <span>{post.author}</span>
            <span>&middot;</span>
            <span>{post.date}</span>
          </div>

          <div className="mb-9 overflow-hidden rounded-3xl shadow-lg">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              width={900}
              height={550}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            {post.content.map((para, i) => (
              <p key={i} className="mb-4.5 text-lg text-text-soft">
                {para}
              </p>
            ))}
          </div>

          <div className="my-9 flex gap-2.5">
            <a
              href="#"
              className="rounded-full border border-border px-4.5 py-2.5 text-sm font-semibold transition hover:bg-text hover:text-white"
            >
              Share on Facebook
            </a>
            <a
              href="#"
              className="rounded-full border border-border px-4.5 py-2.5 text-sm font-semibold transition hover:bg-text hover:text-white"
            >
              Share on X
            </a>
          </div>
        </article>

        {fallbackRelated.length > 0 && (
          <div className="mx-auto mt-14 max-w-5xl border-t border-border pt-14">
            <h2 className="mb-6 text-2xl font-semibold">You Might Also Like</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {fallbackRelated.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="overflow-hidden rounded-2xl bg-card shadow-sm transition hover:-translate-y-1.5 hover:shadow-md"
                >
                  <div className="aspect-[16/11] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={500}
                      height={340}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4.5">
                    <h3 className="text-base font-semibold leading-snug">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </PageTransition>
  );
}
