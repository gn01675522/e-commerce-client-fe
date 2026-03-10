import type { ComponentPropsWithRef } from "react";

export enum INPUT_TYPES {
  text = "text",
  number = "number",
  date = "date",
  email = "email",
  tel = "tel",
  password = "password",
}

export interface IInput extends ComponentPropsWithRef<"input"> {
  message?: string;
  containerClass?: string;
  labelClass?: string;
  inputClass?: string;
}
