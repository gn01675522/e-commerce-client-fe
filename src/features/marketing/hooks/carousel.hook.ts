import { useState, useEffect } from "react";

import { DIRECTION_VARIANT } from "@/shared/types";

type PropsType = {
  totalImg: number;
  carouselTime?: number;
};

export const useCarousel = ({ totalImg, carouselTime = 10000 }: PropsType) => {
  const [targetNum, setTargetNum] = useState(0);

  const onChangeImg = (i: number) => {
    setTargetNum(i);
  };

  const onClickToChangeBanner = (type: DIRECTION_VARIANT) => {
    switch (type) {
      case DIRECTION_VARIANT.prev:
        if (targetNum === 0) {
          setTargetNum(totalImg - 1);
        } else {
          setTargetNum(targetNum - 1);
        }
        break;
      case DIRECTION_VARIANT.next:
        if (targetNum === totalImg - 1) {
          setTargetNum(0);
        } else {
          setTargetNum(targetNum + 1);
        }
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (targetNum === totalImg - 1) {
        setTargetNum(0);
      } else {
        setTargetNum(targetNum + 1);
      }
    }, carouselTime);

    return () => {
      clearInterval(timer);
    };
  }, [targetNum]);

  return { targetNum, onClickToChangeBanner, onChangeImg };
};
