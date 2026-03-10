import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { ComponentPropsWithRef } from "react";

export enum BUTTON_VARIANT {
  primary = "primary",
}

export interface IButton extends ComponentPropsWithRef<"button"> {
  children: ReactNode;
  variant: BUTTON_VARIANT;
  isLoading: boolean;
  className?: string;
}
