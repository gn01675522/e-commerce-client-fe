import type { ComponentPropsWithRef } from "react";

export interface IPagination extends ComponentPropsWithRef<"nav"> {
  pageCount: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}
