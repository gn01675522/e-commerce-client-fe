import { cn } from "@/lib/utils/style.utils";
import { onChangePageHandler } from "./Pagination.helper";

import {
  containerClasses,
  buttonClasses,
  ulClasses,
  liClasses,
  activeClasses,
} from "./Pagination.style";

import type { FC } from "react";
import { PAGE_ACTION_CLASSES, type IPagination } from "./Pagination.types";

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
        aria-label={PAGE_ACTION_CLASSES.prev}
        name={PAGE_ACTION_CLASSES.prev}
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
        aria-label={PAGE_ACTION_CLASSES.next}
        name={PAGE_ACTION_CLASSES.next}
        disabled={!hasNext}
      >
        ＞
      </button>
    </nav>
  );
};
