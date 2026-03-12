import { mergeRWDClassesHelper, mergeSegmentClassesHelper } from "@/lib/utils";
import { RWD_VARIANTS, CLASS_SEGMENT } from "@/shared/types";

export const containerClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.structure]: "w-full",
    [CLASS_SEGMENT.layout]: "px-4",
  }),
  [RWD_VARIANTS.large]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.layout]: "lg:px-28",
  }),
});

export const contentClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.layout]: "flex flex-col gap-4 p-4 justify-center",
    [CLASS_SEGMENT.structure]: "w-full h-75",
    [CLASS_SEGMENT.style]: "bg-secondary",
  }),
});

export const titleClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.style]: "text-5xl font-bold leading-[3rem]",
  }),
  [RWD_VARIANTS.large]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.style]: "lg:text-6xl",
  }),
});

export const paraClass = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.style]: "text-base leading-[1.5rem]",
  }),
});
