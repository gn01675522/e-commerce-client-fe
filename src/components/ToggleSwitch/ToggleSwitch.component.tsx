import { cn } from "@/lib/utils";
import {
  containerClasses,
  titleClasses,
  checkboxClasses,
  wrapperClasses,
  toggleClasses,
} from "./ToggleSwitch.styles";

import type { FC } from "react";
import type { IToggleSwitch } from "./ToggleSwitch.types";

export const ToggleSwitch: FC<IToggleSwitch> = ({
  id,
  title,
  containerClass,
  titleClass,
  wrapperClass,
  toggleClass,
  ...props
}) => {
  const combinedContainerClass = cn(containerClasses, containerClass ?? "");
  const combinedTitleClass = cn(titleClasses, titleClass ?? "");
  const combinedWrapperClass = cn(wrapperClasses, wrapperClass ?? "");
  const combinedToggleClass = cn(toggleClasses, toggleClass ?? "");

  return (
    <fieldset className={combinedContainerClass}>
      <legend className={combinedTitleClass}>{title}</legend>
      <input id={id} {...props} type="checkbox" className={checkboxClasses} />
      <label htmlFor={id} className={combinedWrapperClass}>
        <div className={combinedToggleClass} />
      </label>
    </fieldset>
  );
};
