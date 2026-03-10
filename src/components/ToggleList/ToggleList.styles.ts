import { mergeSegmentClassesHelper } from "@/lib/utils";
import { CLASS_SEGMENT } from "@/shared/types";

export const containerClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.layout]: "flex flex-col gap-4",
  [CLASS_SEGMENT.structure]: "w-full",
  [CLASS_SEGMENT.behavior]: "group",
});

export const checkBoxClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.layout]: "hidden",
  [CLASS_SEGMENT.behavior]: "group",
});

export const toggleClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.layout]: "flex gap-4 justify-center p-2",
  [CLASS_SEGMENT.structure]: "min-h-min",
  [CLASS_SEGMENT.style]: "bg-ghost",
  [CLASS_SEGMENT.behavior]: "cursor-pointer",
});

export const triangleClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.style]: "triangle",
  [CLASS_SEGMENT.structure]: "w-4 h-4 bg-primary",
  [CLASS_SEGMENT.behavior]: "group-has-checked:rotate-180",
});

export const contentClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.structure]: "w-full",
  [CLASS_SEGMENT.layout]: "hidden flex-col gap-2",
  [CLASS_SEGMENT.behavior]: "group-has-checked:flex",
});

export const titleClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.layout]: "item-center",
  [CLASS_SEGMENT.structure]: "w-full",
  [CLASS_SEGMENT.style]: "text-base font-bold leading-[20px] text-secondary",
});
