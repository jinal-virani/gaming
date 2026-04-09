"use client";

import { useEffect } from "react";

export default function ClientEnhancements() {
  useEffect(() => {
    const header = document.getElementById("siteHeader");
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const faders = document.querySelectorAll(".fade-in");

    const onScroll = () => {
      if (!header) return;
      if (window.scrollY > 24) {
        header.classList.add("bg-base/95", "backdrop-blur", "border-b", "border-white/10");
      } else {
        header.classList.remove("bg-base/95", "backdrop-blur", "border-b", "border-white/10");
      }
    };

    const onMenuClick = () => {
      if (!menuBtn || !mobileMenu) return;
      const expanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!expanded));
      mobileMenu.classList.toggle("hidden");
    };

    menuBtn?.addEventListener("click", onMenuClick);

    mobileMenu?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuBtn?.setAttribute("aria-expanded", "false");
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    faders.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear().toString();

    return () => {
      menuBtn?.removeEventListener("click", onMenuClick);
      window.removeEventListener("scroll", onScroll);
      faders.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return null;
}
