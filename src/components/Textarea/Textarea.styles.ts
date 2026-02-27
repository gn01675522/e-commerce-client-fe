import { mergeSegmentClassesHelper } from "@/lib/utils";
import { CLASS_SEGMENT } from "@/shared/types";

export const containerClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.layout]: "flex flex-col gap-4",
});

export const labelClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.style]: "font-bold",
});

export const textareaClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.structure]: "h-25",
  [CLASS_SEGMENT.behavior]: "resize-none",
});
