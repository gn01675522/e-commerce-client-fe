import { cn } from "@/lib/utils";
import { onChangePageHandler } from "./Pagination.helper";

import {
  containerClasses,
  buttonClasses,
  ulClasses,
  liClasses,
  activeClasses,
} from "./Pagination.style";

import { DIRECTION_VARIANT } from "@/shared/types";

import type { FC } from "react";
import type { IPagination } from "./Pagination.types";

export const Pagination: FC<IPagination> = ({
  pageCount = 1,
  currentPage = 1,
  onChangePage,
}) => {
  const totalPage = [...new Array(pageCount)].map((_, i) => ({
    id: i + 1,
    page: i + 1,
  }));
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < pageCount;

  const anchorCombinedClasses = (i: number): string =>
    cn(liClasses, currentPage === i + 1 ? activeClasses : "");

  return (
    <nav className={containerClasses} aria-label="Page navigation">
      <button
        type="button"
        aria-label={DIRECTION_VARIANT.prev}
        name={DIRECTION_VARIANT.prev}
        className={buttonClasses}
        onClick={(e) => onChangePageHandler({ e, currentPage, onChangePage })}
        disabled={!hasPrev}
      >
        ＜
      </button>

      <ul className={ulClasses}>
        {totalPage.map((item, i) => (
          <li
            key={item.id}
            className={anchorCombinedClasses(i)}
            onClick={() => onChangePage(item.page)}
          >
            {item.page}
          </li>
        ))}
      </ul>
      <button
        className={buttonClasses}
        onClick={(e) => onChangePageHandler({ e, currentPage, onChangePage })}
        aria-label={DIRECTION_VARIANT.next}
        name={DIRECTION_VARIANT.next}
        disabled={!hasNext}
      >
        ＞
      </button>
    </nav>
  );
};
