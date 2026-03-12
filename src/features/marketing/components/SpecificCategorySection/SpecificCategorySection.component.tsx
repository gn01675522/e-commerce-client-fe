import Link from "next/link";
import { cn } from "@/lib/utils";

import { contentConfig } from "./SpecificCategorySection.config";
import {
  containerClasses,
  containerForMenClasses,
  articleClasses,
  articleActiveClasses,
  articleTitleClasses,
  articleParaClasses,
  articleBtnClasses,
  imgWrapperClasses,
  imgActiveClasses,
  imgByTypeClasses,
} from "./SpecificCategorySection.styles";
import { GENDER } from "@/shared/types";

import type { FC } from "react";
import type { ISpecificCategorySection } from "./SpecificCategorySection.types";

export const SpecificCategorySection: FC<ISpecificCategorySection> = ({
  type,
  inView,
}) => {
  const data = contentConfig[type];
  const { title, sentence, img, link, btnContent } = data;
  const combinedContainerClasses = cn(
    containerClasses,
    type === GENDER.men ? containerForMenClasses : "",
  );
  const combinedArticleClasses = cn(
    articleClasses,
    inView ? articleActiveClasses : "",
  );
  const combinedImgClasses = cn(
    imgByTypeClasses(type),
    inView ? imgActiveClasses : "",
  );

  return (
    <div className={combinedContainerClasses}>
      <article className={combinedArticleClasses}>
        <h2 className={articleTitleClasses}>{title}</h2>
        <p className={articleParaClasses}>{sentence}</p>
        <Link className={articleBtnClasses} href={link}>
          {btnContent}
        </Link>
      </article>
      <div className={imgWrapperClasses}>
        <Link href={link} aria-label={`${type}'s shop`}>
          <img
            className={combinedImgClasses}
            src={img}
            alt={`banner: ${btnContent}`}
          />
        </Link>
      </div>
    </div>
  );
};
