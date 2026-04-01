"use client";

import { useState } from "react";

const navItems = [
  { label: "ホーム", href: "#" },
  { label: "千手院について", href: "#about" },
  { label: "体験・活動", href: "#features" },
  { label: "お知らせ", href: "#news" },
  { label: "アクセス", href: "#access" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
