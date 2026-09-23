"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogCategories, posts } from "@/lib/data";

export default function BlogGrid() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {blogCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
              active === cat.id
                ? "border-primary bg-primary text-white"
                : "border-border bg-card hover:border-primary hover:bg-primary hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm transition hover:-translate-y-1.5 hover:shadow-md"
          >
            <div className="aspect-[16/11] overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt || post.title}
                width={700}
                height={480}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2.5 p-5.5">
              <span className="inline-block w-fit rounded-full bg-bg-alt px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-dark">
                {post.category}
              </span>
              <h3 className="text-lg font-semibold leading-snug">{post.title}</h3>
              <span className="text-xs text-text-soft">
                {post.author} &middot; {post.date}
              </span>
              <p className="flex-1 text-sm">{post.excerpt}</p>
              <span className="text-sm font-semibold text-primary-dark">Read More &rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
