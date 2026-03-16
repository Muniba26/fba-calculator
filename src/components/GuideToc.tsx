
"use client";

import { useEffect, useState } from "react";

type TocItem = {
  id: string;
  text: string;
  level: "h2" | "h3";
};

function makeSlug(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function GuideToc() {
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const article = document.querySelector("[data-guide-content]");
    if (!article) return;

    const headings = article.querySelectorAll("h2, h3");
    const tocItems: TocItem[] = [];

    headings.forEach((heading) => {
      const text = heading.textContent?.trim();
      if (!text) return;

      let id = heading.getAttribute("id");

      if (!id) {
        id = makeSlug(text);
        heading.setAttribute("id", id);
      }

      tocItems.push({
        id,
        text,
        level: heading.tagName.toLowerCase() as "h2" | "h3",
      });
    });

    setItems(tocItems);
  }, []);

  if (items.length === 0) return null;

  return (
    <aside className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold text-neutral-900 mb-4">
        Table of Contents
      </h2>

      <nav>
        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item.id}
              className={item.level === "h3" ? "ml-4" : ""}
            >
              <a
                href={`#${item.id}`}
                className="text-sm text-neutral-700 hover:text-black hover:underline"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}