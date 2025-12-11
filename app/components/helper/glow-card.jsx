"use client";

import { useEffect, useRef } from "react";

const GlowCard = ({ children, identifier }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const CONTAINER = containerRef.current;
    const CARDS = CONTAINER?.querySelectorAll(`.glow-card-${identifier}`);

    if (!CONTAINER || !CARDS?.length) return;

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event) => {
      CARDS.forEach((CARD) => {
        const rect = CARD.getBoundingClientRect();

        const inside =
          event.x > rect.left - CONFIG.proximity &&
          event.x < rect.right + CONFIG.proximity &&
          event.y > rect.top - CONFIG.proximity &&
          event.y < rect.bottom + CONFIG.proximity;

        CARD.style.setProperty("--active", inside ? 1 : CONFIG.opacity);

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        let angle =
          (Math.atan2(event.y - centerY, event.x - centerX) * 180) / Math.PI;

        if (angle < 0) angle += 360;

        CARD.style.setProperty("--start", angle + 90);
      });
    };

    const RESTYLE = () => {
      CONTAINER.style.setProperty("--gap", CONFIG.gap);
      CONTAINER.style.setProperty("--blur", CONFIG.blur);
      CONTAINER.style.setProperty("--spread", CONFIG.spread);
      CONTAINER.style.setProperty(
        "--direction",
        CONFIG.vertical ? "column" : "row"
      );
    };

    RESTYLE();
    document.body.addEventListener("pointermove", UPDATE);

    return () => {
      document.body.removeEventListener("pointermove", UPDATE);
    };
  }, [identifier]);

  return (
    <div ref={containerRef} className={`glow-container-${identifier} glow-container`}>
      <article
        className={`glow-card glow-card-${identifier} 
        relative w-full h-fit cursor-pointer rounded-xl 
        border border-[#2a2e5a] bg-[#101123] text-gray-200 
        transition-all duration-300 hover:border-transparent`}
      >
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
