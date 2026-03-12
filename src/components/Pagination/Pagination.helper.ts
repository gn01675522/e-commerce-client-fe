import { DIRECTION_VARIANT } from "@/shared/types";

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
    name === DIRECTION_VARIANT.next ? currentPage + 1 : currentPage - 1;

  onChangePage(targetPage);
};
