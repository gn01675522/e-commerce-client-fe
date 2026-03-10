import { cn } from "@/lib/utils";
import {
  containerClasses,
  checkBoxClasses,
  contentClasses,
  titleClasses,
  toggleClasses,
  triangleClasses,
} from "./ToggleList.styles";

import type { FC } from "react";

import type { IToggleList } from "./ToggleList.types";

export const ToggleList: FC<IToggleList> = ({
  children,
  title,
  titleClass,
}) => {
  const id = "toggle-list__trigger";

  const combinedTitleClass = cn(titleClasses, titleClass ?? "");

  return (
    <div className={containerClasses}>
      <input className={checkBoxClasses} id={id} type="checkbox" />
      <label htmlFor={id} className={toggleClasses}>
        <div className={triangleClasses} />
        <h2 className={combinedTitleClass}>{title}</h2>
      </label>
      <div className={contentClasses}>{children}</div>
    </div>
  );
};
