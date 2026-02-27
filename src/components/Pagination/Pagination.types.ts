import type { ComponentPropsWithRef } from "react";

export enum PAGE_ACTION_CLASSES {
  prev = "previous",
  next = "next",
  specific = "specific",
}

export interface IPagination extends ComponentPropsWithRef<"nav"> {
  pageCount: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}
