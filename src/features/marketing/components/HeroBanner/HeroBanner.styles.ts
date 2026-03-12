import { cn } from "@/lib/utils";
import { mergeRWDClassesHelper, mergeSegmentClassesHelper } from "@/lib/utils";
import { CLASS_SEGMENT, RWD_VARIANTS } from "@/shared/types";

export const containerClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.layout]: "relative",
    [CLASS_SEGMENT.structure]: "w-full",
  }),
});

export const imgClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.structure]: "w-full h-125",
    [CLASS_SEGMENT.style]: "object-cover object-center",
  }),
  [RWD_VARIANTS.large]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.structure]: "h-175",
  }),
});

export const ctaWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.layout]:
      "absolute flex flex-col top-1/2 left-1/2 items-center align-center",
    [CLASS_SEGMENT.structure]: "w-max h-min",
    [CLASS_SEGMENT.style]:
      "text-primary-lt tracking-wide -translate-1/2 text-shadow-lg",
  }),
});

export const contentTitleClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.layout]: "mb-12",
    [CLASS_SEGMENT.style]: "text-2xl font-bold",
  }),
  [RWD_VARIANTS.medium]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.style]: "md:text-4xl",
  }),
  [RWD_VARIANTS.large]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.layout]: "lg:mb-18",
    [CLASS_SEGMENT.style]: "lg:text-5xl",
  }),
});

export const ctaBtnClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.structure]: "w-25 h-15",
    [CLASS_SEGMENT.style]:
      "bg-primary-lt text-primary text-center leading-[60px] font-bold opacity-70",
    [CLASS_SEGMENT.behavior]: "hover:opacity-90",
  }),
});

export const indicatorClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.layout]: "absolute bottom-8 right-1/2 translate-x-1/2",
  }),
});

export const changePageBtnClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.layout]: "absolute top-1/2 translate-y-[-50%]",
    [CLASS_SEGMENT.behavior]: "hover:opacity-80",
  }),
});

export const leftArrowBtnClasses = cn(
  changePageBtnClasses,
  mergeRWDClassesHelper({
    [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
      [CLASS_SEGMENT.layout]: "left-[16px] ",
    }),
    [RWD_VARIANTS.medium]: mergeSegmentClassesHelper({
      [CLASS_SEGMENT.layout]: "md:left-[24px]",
    }),
    [RWD_VARIANTS.large]: mergeSegmentClassesHelper({
      [CLASS_SEGMENT.layout]: "lg:left-[32px]",
    }),
  }),
);

export const rightArrowBtnClasses = cn(
  changePageBtnClasses,
  mergeRWDClassesHelper({
    [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
      [CLASS_SEGMENT.layout]: "right-[16px] ",
    }),
    [RWD_VARIANTS.medium]: mergeSegmentClassesHelper({
      [CLASS_SEGMENT.layout]: "md:right-[24px]",
    }),
    [RWD_VARIANTS.large]: mergeSegmentClassesHelper({
      [CLASS_SEGMENT.layout]: "lg:right-[32px]",
    }),
  }),
);

export const directionIconClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.structure]: "w-5 g-5",
});
