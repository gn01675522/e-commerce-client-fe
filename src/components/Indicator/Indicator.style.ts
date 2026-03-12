import { mergeSegmentClassesHelper } from "@/lib/utils";
import { CLASS_SEGMENT } from "@/shared/types";

export const containerClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.layout]: "flex gap-2",
});

export const dotsClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.structure]: "w-2.5 h-2.5",
  [CLASS_SEGMENT.style]:
    "border border-primary-lt bg-secondary-lt rounded-full opacity-50",
  [CLASS_SEGMENT.behavior]: "cursor-pointer",
});

export const dotActiveClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.style]: "bg-primary",
});
