import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import type { ClassValue } from "clsx";
import type { RWD_VARIANTS, CLASS_SEGMENT } from "@/shared/types";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const mergeRWDClassesHelper = <
  T extends Partial<Record<RWD_VARIANTS, string>>,
>(
  variants: T,
): string => cn(...Object.values(variants));

export const mergeSegmentClassesHelper = <
  T extends Partial<Record<CLASS_SEGMENT, string>>,
>(
  segment: T,
): string => cn(...Object.values(segment));
