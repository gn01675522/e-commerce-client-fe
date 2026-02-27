import { mergeSegmentClassesHelper } from "@/lib/utils";
import { CLASS_SEGMENT } from "@/shared/types/style.type";

export const containerClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.base]: "z-4000",
  [CLASS_SEGMENT.layout]: "fixed flex bottom-20 right-7 p-4",
  [CLASS_SEGMENT.structure]: "w-62.5 h-17.5",
  [CLASS_SEGMENT.style]: "border bg-primary-lt border-primary",
});

export const iconWrapperClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.structure]: "min-w-min h-full",
  [CLASS_SEGMENT.layout]: "flex items-center justify-center",
});

export const iconClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.structure]: "w-9 h-9",
});

export const contentWrapperClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.structure]: "w-full h-full p-1.25 item-center",
  [CLASS_SEGMENT.layout]: "flex",
});

export const contentClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.structure]: "w-full h-full",
  [CLASS_SEGMENT.style]: "text-primary",
});
