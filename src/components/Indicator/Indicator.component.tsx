"use client";
import { cn } from "@/lib/utils";
import {
  containerClasses,
  dotsClasses,
  dotActiveClasses,
} from "./Indicator.style";

import type { FC } from "react";
import type { IIndicator } from "./Indicator.types";

export const Indicator: FC<IIndicator> = ({
  totalCount,
  targetNum,
  onChangeImg,
  containerClass,
}) => {
  const combinedContainerClasses = cn(containerClasses, containerClass ?? "");
  const combinedDotClasses = (i: number) =>
    cn(dotsClasses, targetNum === i ? dotActiveClasses : "");

  return (
    <div className={combinedContainerClasses}>
      {[...new Array(totalCount)].map((_, i) => (
        <div
          key={i}
          className={combinedDotClasses(i)}
          onClick={() => onChangeImg(i)}
        />
      ))}
    </div>
  );
};
