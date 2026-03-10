import { cn, formatCurrency } from "@/lib/utils";
import {
  sellPriceClasses,
  originalPriceClasses,
  onSaleClasses,
} from "./PriceTag.styles";

import type { FC } from "react";
import type { IPriceTag } from "./PriceTag.types";

export const PriceTag: FC<IPriceTag> = ({ origin_price, price }) => {
  const combinedPriceClasses = cn(
    originalPriceClasses,
    origin_price > price ? onSaleClasses : "",
  );

  return (
    <>
      {origin_price > price && (
        <p className={sellPriceClasses}>NT$ {formatCurrency(price)}</p>
      )}
      <p className={combinedPriceClasses}>NT$ {formatCurrency(origin_price)}</p>
    </>
  );
};
