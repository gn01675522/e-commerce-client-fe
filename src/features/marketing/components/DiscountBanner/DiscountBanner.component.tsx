import {
  containerClasses,
  contentClasses,
  titleClasses,
  paraClass,
} from "./DiscountBanner.types";

import type { FC } from "react";

import "./DiscountBanner.styles.scss";

export const DiscountBanner: FC = () => {
  return (
    <div className={containerClasses}>
      <div className={contentClasses}>
        <h3>Grand Opening Sale</h3>
        <h2 className={titleClasses}>EXTRA 30% OFF SALE</h2>
        <p className={paraClass}>
          慶祝您我的相遇，也歡迎您加入我們的旅程，輸入 newBeginning 即可享全品項
          7 折優惠！
        </p>
      </div>
    </div>
  );
};
