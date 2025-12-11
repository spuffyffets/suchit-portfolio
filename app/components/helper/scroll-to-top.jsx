"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`
        fixed bottom-8 right-6 z-50 p-4 rounded-full
        bg-gradient-to-r from-pink-500 to-violet-600
        transition-all duration-300 ease-out text-white
        flex items-center justify-center
        ${visible ? "" : "hidden"}
      `}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
