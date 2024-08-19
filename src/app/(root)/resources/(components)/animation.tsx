"use client";
import { useEffect, useRef, useState } from "react";
import type { LottiePlayer } from "lottie-web";

const Animation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,

        path: "/images/animation.json",
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return <div ref={ref} className="w-full sm:max-w-[400px]" />;
};

export default Animation;
