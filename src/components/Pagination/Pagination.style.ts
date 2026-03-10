import { mergeSegmentClassesHelper } from "@/lib/utils";
import { CLASS_SEGMENT } from "@/shared/types";

export const containerClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.layout]: "flex gap-4 justify-between items-center",
  [CLASS_SEGMENT.structure]: "min-w-min",
});

export const buttonClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.style]:
    "border-none bg-transparent text-base font-black text-primary",
  [CLASS_SEGMENT.behavior]:
    "cursor-pointer disabled:cursor-not-allowed disabled:text-secondary-lt",
});

export const ulClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.layout]: "flex gap-4",
});

export const liClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.layout]: "flex justify-center items-center",
  [CLASS_SEGMENT.structure]: "w-8 h-8",
  [CLASS_SEGMENT.style]: "bg-secondary text-primary rounded-lg",
  [CLASS_SEGMENT.behavior]:
    "cursor-pointer hover:bg-primary hover:text-secondary",
});

export const activeClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.behavior]: "bg-primary text-secondary",
});
