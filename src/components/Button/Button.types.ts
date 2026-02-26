import type { ButtonHTMLAttributes, ReactNode } from "react";

export enum BUTTON_VARIANT {
  primary = "primary",
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: BUTTON_VARIANT;
  isLoading: boolean;
  className?: string;
}
