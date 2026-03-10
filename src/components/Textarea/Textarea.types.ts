import type { ComponentPropsWithRef } from "react";

export interface ITextarea extends ComponentPropsWithRef<"textarea"> {
  id: string;
  title: string;
  containerClass?: string;
  labelClass?: string;
  textareaClass?: string;
}
