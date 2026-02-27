import { mergeSegmentClassesHelper } from "@/lib/utils";
import { CLASS_SEGMENT } from "@/shared/types/style.type";

export const containerClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.layout]:
    "flex absolute gap-2 bottom-8 right-[50%] -translate-x-[50%]",
});

export const dotsClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.structure]: "w-2.5 h-2.5",
  [CLASS_SEGMENT.style]:
    "border border-primary bg-secondary-lt rounded-full opacity-50",
  [CLASS_SEGMENT.behavior]: "cursor-pointer",
});

export const dotActiveClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.style]: "bg-white",
});
