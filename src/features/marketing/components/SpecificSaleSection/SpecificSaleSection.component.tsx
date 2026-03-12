import Link from "next/link";
import Image from "next/image";

import {
  containerClasses,
  imgClasses,
  contentClasses,
  titleClasses,
  paraClasses,
  linkClasses,
} from "./SpecificSaleSection.styles";

import { contentConfig } from "./SpecificSaleSection.config";

import type { FC } from "react";
import type { ISpecificSaleSection } from "./SpecificSaleSection.types";

export const SpecificSaleSection: FC<ISpecificSaleSection> = ({ type }) => {
  const data = contentConfig[type];
  const { title, sentence, img, link } = data;

  return (
    <section className={containerClasses}>
      <Image
        className={imgClasses}
        src={img}
        alt={`banner: ${title}`}
        width={1024}
        height={400}
      />
      <div className={contentClasses}>
        <h2 className={titleClasses}>{title}</h2>
        <p className={paraClasses}>{sentence}</p>
        <Link className={linkClasses} href={link}>
          選購
        </Link>
      </div>
    </section>
  );
};
