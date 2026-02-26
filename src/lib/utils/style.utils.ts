import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { RWD_VARIANTS } from "@/shared/types/style.type";

import type { ClassValue } from "clsx";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const mergeRWDClassesHelper = <
  T extends Partial<Record<RWD_VARIANTS, string>>,
>(
  variants: T,
): string => cn(...Object.values(variants));
