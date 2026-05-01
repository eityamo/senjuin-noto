"use client";

import { useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const navItems = [
  { label: "ホーム", href: `${basePath}/` },
  { label: "千手院について", href: `${basePath}/#about` },
  { label: "体験・活動", href: `${basePath}/#features` },
  { label: "イベント", href: `${basePath}/events` },
  { label: "お知らせ", href: `${basePath}/news` },
  { label: "縁の下", href: `${basePath}/members` },
  { label: "アクセス", href: `${basePath}/#access` },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* トップへ（菱形ロゴ） */}
      <a
        href={`${basePath}/`}
        className="fixed top-0 left-0 z-50 flex h-16 w-16 items-center justify-center bg-temple text-white transition-colors duration-200 hover:bg-temple-dark"
        aria-label="トップページへ"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="opacity-90"
          aria-hidden
        >
          <path d="M24 4 L44 24 L24 44 L4 24 Z" />
          <path d="M24 12 L36 24 L24 36 L12 24 Z" />
        </svg>
      </a>

      {/* ハンバーガーボタン */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-0 right-0 z-50 w-16 h-16 bg-temple flex items-center justify-center cursor-pointer transition-colors duration-200 hover:bg-temple-dark"
        aria-label="メニューを開く"
        aria-expanded={isOpen}
      >
        <div className="flex flex-col gap-1.5">
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </div>
      </button>

      {/* オーバーレイメニュー */}
      <div
        className={`fixed inset-0 z-40 bg-temple/95 flex items-center justify-center transition-opacity duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <nav>
          <ul className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-xl font-serif tracking-widest cursor-pointer transition-opacity duration-200 hover:opacity-70"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
