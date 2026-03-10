import type { ComponentPropsWithRef } from "react";

export enum MESSAGE_TYPE {
  success = "success",
  danger = "danger",
}

export interface IMessage extends ComponentPropsWithRef<"div"> {
  text: string;
  type: MESSAGE_TYPE;
  className?: string;
}
