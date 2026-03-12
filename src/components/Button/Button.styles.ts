import { mergeSegmentClassesHelper } from "@/lib/utils";
import { CLASS_SEGMENT } from "@/shared/types";

const buttonBaseClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.layout]: "flex justify-center items-center",
  [CLASS_SEGMENT.style]: "text-xs font-bold tracking-[1px] leading-[18px]",
  [CLASS_SEGMENT.behavior]: "cursor-pointer",
});

export const buttonClassByVariant = {
  primary: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.base]: buttonBaseClasses,
    [CLASS_SEGMENT.structure]: "w-40 h-12",
    [CLASS_SEGMENT.style]: "bg-primary text-white",
    [CLASS_SEGMENT.behavior]: "hover:bg-primary-lt",
  }),
  circle: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.base]: buttonBaseClasses,
    [CLASS_SEGMENT.structure]: "w-12.5 h-12.5",
    [CLASS_SEGMENT.style]: "bg-primary-lt rounded-full opacity-60",
  }),
};
