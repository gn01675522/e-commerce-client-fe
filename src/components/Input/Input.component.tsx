import { cn } from "@/lib/utils";

import {
  containerClasses,
  labelWrapperClasses,
  labelClasses,
  inputClasses,
  msgClasses,
} from "./Input.styles";

import type { FC } from "react";
import type { IInput } from "./Input.types";

export const Input: FC<IInput> = ({
  id,
  title,
  message,
  containerClass,
  labelClass,
  inputClass,
  ...props
}) => {
  const combinedContainerClasses = cn(containerClasses, containerClass ?? "");
  const combinedLabelClasses = cn(labelClasses, labelClass ?? "");
  const combinedInputClasses = cn(inputClasses, labelClass ?? "");

  return (
    <fieldset className={combinedContainerClasses}>
      {title && (
        <div className={labelWrapperClasses}>
          <label htmlFor={id} className={combinedLabelClasses}>
            {title}
          </label>
          {message && <span className={msgClasses}>{message}</span>}
        </div>
      )}
      <input className={combinedInputClasses} id={id} {...props} />
    </fieldset>
  );
};
