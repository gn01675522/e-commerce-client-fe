import { cn } from "@/lib/utils/style.utils";
import {
  containerClasses,
  dotsClasses,
  dotActiveClasses,
} from "./Indicator.style";

import type { FC } from "react";

type IndicatorProps = {
  imgCount: number;
  imgNum: number;
  onChangeImg: (i: number) => void;
};

export const Indicator: FC<IndicatorProps> = ({
  imgCount,
  imgNum,
  onChangeImg,
}) => {
  const dotCombinedClasses = (i: number) =>
    cn(dotsClasses, imgNum === i ? dotActiveClasses : "");

  return (
    <div className={containerClasses}>
      {[...new Array(imgCount)].map((_, i) => (
        <div
          key={i}
          className={dotCombinedClasses(i)}
          onClick={() => onChangeImg(i)}
        />
      ))}
    </div>
  );
};
