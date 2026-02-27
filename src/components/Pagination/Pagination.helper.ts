import { PAGE_ACTION_CLASSES } from "./Pagination.types";

import type { MouseEvent } from "react";

type HandlerProps = {
  e: MouseEvent<HTMLButtonElement>;
  currentPage: number;
  target?: number;
  onChangePage: (page: number) => void;
};

export const onChangePageHandler = ({
  e,
  currentPage,
  onChangePage,
}: HandlerProps) => {
  e.preventDefault();

  const { name } = e.currentTarget;

  const targetPage =
    name === PAGE_ACTION_CLASSES.next ? currentPage + 1 : currentPage - 1;

  onChangePage(targetPage);
};
