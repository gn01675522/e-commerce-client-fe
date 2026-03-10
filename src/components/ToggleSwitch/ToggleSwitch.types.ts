import type { ComponentPropsWithRef } from "react";

export interface IToggleSwitch extends ComponentPropsWithRef<"input"> {
  id: string;
  title: string;
  containerClass?: string;
  titleClass?: string;
  wrapperClass?: string;
  toggleClass?: string;
}
