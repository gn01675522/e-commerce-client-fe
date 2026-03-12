import { mergeRWDClassesHelper, mergeSegmentClassesHelper } from "@/lib/utils";
import { RWD_VARIANTS, CLASS_SEGMENT } from "@/shared/types";

export const containerClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.layout]: "relative",
    [CLASS_SEGMENT.structure]: "w-full h-100",
  }),
});

export const imgClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.structure]: "w-full h-full",
    [CLASS_SEGMENT.style]: "object-cover object-center",
  }),
});

export const contentClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.layout]:
      "absolute flex flex-col gap-4 top-1/2 left-1/2 justify-center items-center -translate-1/2",
    [CLASS_SEGMENT.structure]: "w-max h-min",
  }),
});

export const titleClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.style]: "text-primary-lt text-5xl font-light text-shadow-lg",
  }),
});

export const paraClasses = titleClasses;

export const linkClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.structure]: "w-25 h-10",
    [CLASS_SEGMENT.style]:
      "border border-primary text-center bg-primary-lt text-primary font-bold leading-[40px] opacity-60",
    [CLASS_SEGMENT.behavior]: "hover:opacity-80 cursor-pointer",
  }),
});
