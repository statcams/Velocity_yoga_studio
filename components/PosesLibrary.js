"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { poseCategories, poses } from "@/lib/data";

export default function PosesLibrary() {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered = active === "all" ? poses : poses.filter((p) => p.category === active);

  useEffect(() => {
    if (!selected) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div>
      <div className="mb-11 flex flex-wrap justify-center gap-3">
        {poseCategories.map((cat) => (
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

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((pose) => (
          <button
            key={pose.id}
            onClick={() => setSelected(pose)}
            className="overflow-hidden rounded-2xl bg-card text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <Image
                src={pose.image}
                alt={pose.imageAlt || pose.name}
                width={450}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4.5">
              <h3 className="text-base font-semibold">{pose.name}</h3>
              <span className="text-sm italic text-text-soft">{pose.sanskrit}</span>
              <span className="mt-2.5 block text-xs font-bold uppercase tracking-wider text-primary-dark">
                {pose.category} &middot; {pose.level}
              </span>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/55 p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelected(null);
          }}
        >
          <div
            data-lenis-prevent
            className="relative max-h-[86vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-bg shadow-xl"
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute right-4.5 top-4.5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm"
            >
              &times;
            </button>
            <div className="aspect-[16/9] overflow-hidden rounded-t-3xl">
              <Image
                src={selected.image}
                alt={selected.imageAlt || selected.name}
                width={900}
                height={506}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold">{selected.name}</h2>
              <span className="text-sm italic text-text-soft">
                {selected.sanskrit} &middot; {selected.category} &middot; {selected.level}
              </span>

              <PoseSection title="Alignment Cues" items={selected.cues} />
              <PoseSection title="Benefits" items={selected.benefits} />
              <PoseSection title="Modifications & Variations" items={selected.modifications} />
              <PoseSection title="Safety Tips" items={[selected.safety]} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PoseSection({ title, items }) {
  return (
    <div className="mt-5.5">
      <h4 className="mb-2 text-sm font-semibold text-primary-dark">{title}</h4>
      <ul>
        {items.map((item, i) => (
          <li key={i} className="relative mb-2 pl-5 text-sm text-text-soft">
            <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
