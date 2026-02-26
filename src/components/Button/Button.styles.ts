import { mergeSegmentClassesHelper } from "@/lib/utils/style.utils";
import { CLASS_SEGMENT } from "@/shared/types/style.type";

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
};
