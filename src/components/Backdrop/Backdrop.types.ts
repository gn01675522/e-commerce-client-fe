import type { ReactNode, ComponentPropsWithRef, MouseEvent } from "react";

export interface IBackdrop extends ComponentPropsWithRef<"div"> {
  children?: ReactNode;
  onClose: (e: MouseEvent<HTMLElement>) => void;
}
