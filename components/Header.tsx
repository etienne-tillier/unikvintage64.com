"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <div style={{
              width: "44px",
              height: "44px",
              background: "linear-gradient(135deg, #7D5C35 0%, #A0784A 50%, #C8974A 100%)",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.4rem",
              flexShrink: 0,
              border: "1px solid rgba(200,151,74,0.3)",
            }}>
              🏺
            </div>
            <div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "var(--color-amber-light)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}>
                Unikvintage64
              </div>
              <div style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.58rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(249, 244, 237, 0.45)",
              }}>
                Expert Vintage
              </div>
            </div>
          </Link>

          {/* Nav desktop */}
          <nav style={{ display: "flex", gap: "0.1rem" }} className="hidden-mobile">
            {siteConfig.mainNav.map((item) => (
              <Link key={item.href} href={item.href} className="header-link">
                {item.title}
              </Link>
            ))}
          </nav>

          {/* CTA + Burger */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link
              href="/contact"
              className="btn-primary hidden-mobile"
              style={{ padding: "0.5rem 1.2rem", fontSize: "0.85rem" }}
            >
              Nous contacter
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--color-amber-light)",
                fontSize: "1.5rem",
                cursor: "pointer",
                display: "none",
              }}
              className="burger-btn"
              aria-label="Menu navigation"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{
            paddingBottom: "1.25rem",
            borderTop: "1px solid rgba(160, 120, 74, 0.2)",
            paddingTop: "0.75rem",
          }}>
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="header-link"
                style={{ display: "block", padding: "0.65rem 0.5rem" }}
                onClick={() => setMobileOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary"
              style={{ marginTop: "0.75rem", display: "inline-flex", fontSize: "0.9rem" }}
              onClick={() => setMobileOpen(false)}
            >
              Nous contacter
            </Link>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .burger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
