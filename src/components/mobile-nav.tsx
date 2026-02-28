"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

import { primaryNav, type NavItem } from "@/lib/navigation";

function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          className="block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-surface"
          onClick={onClose}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-surface"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul className="ml-4 space-y-1 border-l-2 border-border pl-3">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-ink"
                onClick={onClose}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-ink transition-colors hover:bg-surface lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Zavrieť menu" : "Otvoriť menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/30 lg:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <nav
            className="fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] overflow-y-auto bg-white shadow-xl animate-slide-down lg:hidden"
            aria-label="Mobilná navigácia"
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-4">
              <span className="font-serif text-lg font-semibold text-ocean">Menu</span>
              <button
                type="button"
                className="rounded-lg p-2 text-muted transition-colors hover:bg-surface hover:text-ink"
                onClick={() => setIsOpen(false)}
                aria-label="Zavrieť menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="space-y-1 p-4">
              {primaryNav.map((item) => (
                <MobileNavItem key={item.href} item={item} onClose={() => setIsOpen(false)} />
              ))}
            </ul>
          </nav>
        </>
      )}
    </>
  );
}
