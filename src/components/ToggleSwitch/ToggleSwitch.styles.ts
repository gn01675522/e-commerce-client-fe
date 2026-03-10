import { mergeSegmentClassesHelper } from "@/lib/utils";
import { CLASS_SEGMENT } from "@/shared/types";

export const containerClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.layout]: "flex gap-2.5 place-content-between item-center",
  [CLASS_SEGMENT.behavior]: "group",
});

export const titleClasses = mergeSegmentClassesHelper({});

export const checkboxClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.layout]: "hidden",
});

export const wrapperClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.layout]: "flex p-1 justify-start",
  [CLASS_SEGMENT.structure]: "w-17.5 h-10",
  [CLASS_SEGMENT.style]: "bg-ghost border rounded-[40px]",
  [CLASS_SEGMENT.behavior]: "group-has-checked:bg-success cursor-pointer",
});

export const toggleClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.structure]: "w-7.5 h-7.5",
  [CLASS_SEGMENT.style]: "border rounded-full bg-primary-lt",
  [CLASS_SEGMENT.behavior]:
    "group-has-checked:translate-x-full transition-transform duration-300 ease-in-out",
});
