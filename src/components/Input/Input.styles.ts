import { mergeSegmentClassesHelper } from "@/lib/utils";
import { CLASS_SEGMENT } from "@/shared/types/style.type";

export const containerClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.structure]: "min-w-50",
  [CLASS_SEGMENT.layout]: "relative flex flex-col gap-4",
});

export const labelWrapperClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.layout]: "flex justify-center",
});

export const labelClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.style]: "text-xl",
});

export const inputClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.structure]: "w-full h-10 ",
});

export const msgClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.style]: "text-error text-xs",
});
