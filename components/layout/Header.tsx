"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "首页", href: "#home" },
  { label: "品牌故事", href: "#brand-story" },
  { label: "产品中心", href: "#products" },
  { label: "数字确权", href: "#digital-rights" },
  { label: "新闻动态", href: "#news" },
  { label: "联系我们", href: "#contact" },
];

export default function Header() {
  const [isLight, setIsLight] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("lumoon-theme") === "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
    localStorage.setItem("lumoon-theme", isLight ? "light" : "dark");
  }, [isLight]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[rgba(4,10,20,0.72)] backdrop-blur-xl light:border-slate-300/80 light:bg-[rgba(255,255,255,0.82)] light:shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
      <div className="container-shell flex h-18 items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-[0.18em] text-white light:text-slate-950"
        >
          LUMOON
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/84 transition hover:text-white light:text-slate-800 light:hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsLight((prev) => !prev)}
            className="btn-base btn-control px-4 py-2 text-sm"
          >
            <span suppressHydrationWarning>{isLight ? "深色" : "浅色"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
