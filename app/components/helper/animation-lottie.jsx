"use client";

import Lottie from "lottie-react";
import { useMemo } from "react";

const AnimationLottie = ({ animationPath, width = "95%" }) => {
  const options = useMemo(
    () => ({
      loop: true,
      autoplay: true,
      animationData: animationPath,
      style: { width }
    }),
    [animationPath, width]
  );

  return <Lottie {...options} />;
};

export default AnimationLottie;
