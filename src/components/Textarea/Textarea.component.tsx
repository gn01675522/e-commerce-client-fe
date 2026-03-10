import { cn } from "@/lib/utils";
import {
  containerClasses,
  labelClasses,
  textareaClasses,
} from "./Textarea.styles";

import type { FC } from "react";
import type { ITextarea } from "./Textarea.types";

export const Textarea: FC<ITextarea> = ({
  id,
  title,
  containerClass,
  labelClass,
  textareaClass,
  ...props
}) => {
  const combinedWrapperClasses = cn(containerClasses, containerClass ?? "");
  const combinedLabelClasses = cn(labelClasses, labelClass ?? "");
  const combinedTextareaClasses = cn(textareaClasses, textareaClass ?? "");

  return (
    <fieldset className={combinedWrapperClasses}>
      <label htmlFor={id} className={combinedLabelClasses}>
        {title}
      </label>
      <textarea className={combinedTextareaClasses} id={id} {...props} />
    </fieldset>
  );
};
