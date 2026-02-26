import type { ComponentPropsWithRef } from "react";

export interface ISelect extends ComponentPropsWithRef<"select"> {
  id: string;
  title: string;
  options: { id: string; name: string }[];
  message?: string;
  containerClass?: string;
  labelClass?: string;
  selectClass?: string;
  messageClass?: string;
}
