import { cn } from "@/lib/utils/style.utils";
import {
  containerClasses,
  labelWrapperClasses,
  labelClasses,
  selectClasses,
  msgClasses,
} from "./Select.styles";

import type { FC } from "react";
import type { ISelect } from "./Select.types";

export const Select: FC<ISelect> = ({
  id,
  title,
  options,
  message,
  containerClass,
  labelClass,
  selectClass,
  messageClass,
  ...props
}) => {
  const combinedContainerClasses = cn(containerClasses, containerClass ?? "");
  const combinedLabelClasses = cn(labelClasses, labelClass ?? "");
  const combinedSelectClasses = cn(selectClasses, selectClass ?? "");
  const combinedMessageClasses = cn(msgClasses, messageClass ?? "");

  return (
    <fieldset className={combinedContainerClasses}>
      <div className={labelWrapperClasses}>
        <label htmlFor={id} className={combinedLabelClasses}>
          {title}
        </label>
        {message && <span className={combinedMessageClasses}>{message}</span>}
      </div>
      <select {...props} className={combinedSelectClasses} id={id}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </fieldset>
  );
};
