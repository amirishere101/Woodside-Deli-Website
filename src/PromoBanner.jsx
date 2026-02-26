import React from "react";

// ============================================================
// PROMO BANNER — flip this to false to take it down manually,
// or it auto-hides after the expiration date below.
const SHOW_PROMO = true;
const EXPIRATION_DATE = new Date("2026-03-18T00:00:00"); // day after St. Patrick's
// ============================================================

const CloverRow = () => (
  <div
    className="flex justify-between w-full overflow-hidden text-green-500/50 text-xs leading-none select-none pointer-events-none"
    aria-hidden="true"
  >
    {"☘️ "
      .repeat(40)
      .trim()
      .split(" ")
      .map((c, i) => (
        <span key={i}>{c}</span>
      ))}
  </div>
);

const PromoBanner = () => {
  // Don't render if manually disabled or expired
  if (!SHOW_PROMO || new Date() >= EXPIRATION_DATE) {
    return null;
  }

  return (
    <div className="bg-secondary text-white py-2 text-center font-din2014 shadow-md z-40 overflow-hidden">
      <CloverRow />
      <div className="container mx-auto flex items-center justify-center py-4">
        <p className="text-sm sm:text-base font-semibold tracking-wide">
          <span className="font-bold text-green-300">
            Corned Beef & Cabbage
          </span>{" "}
          available now through St. Patrick&apos;s Day!
        </p>
      </div>
      <CloverRow />
    </div>
  );
};

export default PromoBanner;
