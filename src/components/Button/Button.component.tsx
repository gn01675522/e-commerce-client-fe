import { cn } from "@/lib/utils/style.utils";

import { buttonClassByVariant } from "./Button.styles";

import type { FC } from "react";
import { BUTTON_VARIANT, type IButton } from "./Button.types";

export const Button: FC<IButton> = ({
  children,
  className,
  variant = BUTTON_VARIANT.primary,
  isLoading = false,
  ...props
}) => {
  const combinedClasses = cn(buttonClassByVariant[variant], className);

  return (
    <button disabled={isLoading} className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
