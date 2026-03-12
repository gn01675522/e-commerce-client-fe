"use client";
import Link from "next/link";
import Image from "next/image";
import { useCarousel } from "../../hooks";

import { Button, BUTTON_VARIANT } from "@/components/Button";
import { Indicator } from "@/components/Indicator";
import { LeftArrowSVGIcon, RightArrowSVGIcon } from "@/components/SVGIcons";

import { BANNER_CONFIG } from "./HeroBanner.config";
import { DIRECTION_VARIANT } from "@/shared/types";

import {
  containerClasses,
  imgClasses,
  ctaWrapperClasses,
  contentTitleClasses,
  indicatorClasses,
  leftArrowBtnClasses,
  rightArrowBtnClasses,
  directionIconClasses,
  ctaBtnClasses,
} from "./HeroBanner.styles";

import type { FC } from "react";

export const HeroBanner: FC = () => {
  const { targetNum, onClickToChangeBanner, onChangeImg } = useCarousel({
    totalImg: BANNER_CONFIG.length,
  });

  return (
    <section className={containerClasses}>
      <Image
        className={imgClasses}
        src={BANNER_CONFIG[targetNum].img}
        alt="hero banner"
        width={1024}
        height={500}
      />
      <Button
        variant={BUTTON_VARIANT.circle}
        onClick={() => onClickToChangeBanner(DIRECTION_VARIANT.prev)}
        className={leftArrowBtnClasses}
      >
        <LeftArrowSVGIcon className={directionIconClasses} />
      </Button>
      <Button
        variant={BUTTON_VARIANT.circle}
        onClick={() => onClickToChangeBanner(DIRECTION_VARIANT.next)}
        className={rightArrowBtnClasses}
      >
        <RightArrowSVGIcon className={directionIconClasses} />
      </Button>

      <div className={ctaWrapperClasses}>
        <h1 className={contentTitleClasses}>
          {BANNER_CONFIG[targetNum].sentence}
        </h1>
        <Link className={ctaBtnClasses} href={BANNER_CONFIG[targetNum].url}>
          {BANNER_CONFIG[targetNum].text}
        </Link>
      </div>

      <Indicator
        totalCount={BANNER_CONFIG.length}
        targetNum={targetNum}
        onChangeImg={onChangeImg}
        containerClass={indicatorClasses}
      />
    </section>
  );
};
