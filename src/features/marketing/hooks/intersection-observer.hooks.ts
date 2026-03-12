import { useState, useEffect, useRef } from "react";

export const useIntersectionObserver = () => {
  const [firstBannerDetect, setFirstBannerDetect] = useState(false);
  const [thirdBannerDetect, setThirdBannerDetect] = useState(false);

  const firstBannerRef = useRef<HTMLDivElement>(null);
  const thirdBannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const firstBanner = firstBannerRef.current;
    const thirdBanner = thirdBannerRef.current;

    const firstBannerDetector = new IntersectionObserver(
      ([entry]) => setFirstBannerDetect(entry.isIntersecting),
      {
        root: null,
        threshold: 0.1,
      },
    );
    const thirdBannerDetect = new IntersectionObserver(
      ([entry]) => setThirdBannerDetect(entry.isIntersecting),
      {
        root: null,
        threshold: 0.1,
      },
    );

    if (firstBanner) {
      firstBannerDetector.observe(firstBanner);
    }
    if (thirdBanner) {
      thirdBannerDetect.observe(thirdBanner);
    }
    return () => {
      if (firstBanner) {
        firstBannerDetector.unobserve(firstBanner);
      }
      if (thirdBanner) {
        thirdBannerDetect.unobserve(thirdBanner);
      }
    };
  }, []);

  return {
    firstBannerDetect,
    thirdBannerDetect,
    firstBannerRef,
    thirdBannerRef,
  };
};
