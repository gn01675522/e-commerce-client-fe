import { mergeSegmentClassesHelper } from "@/lib/utils";
import { CLASS_SEGMENT } from "@/shared/types/style.type";

export const sellPriceClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.style]: "font-bold text-ghost-lt",
});

export const originalPriceClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.style]: "text-secondary",
});

export const onSaleClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.style]: "font-light",
});
