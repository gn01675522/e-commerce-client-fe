import { cn } from "@/lib/utils";
import { mergeRWDClassesHelper, mergeSegmentClassesHelper } from "@/lib/utils";
import { RWD_VARIANTS, CLASS_SEGMENT } from "@/shared/types";

import { GENDER } from "@/shared/types";

export const containerClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.layout]: "flex flex-col",
    [CLASS_SEGMENT.structure]: "w-full h-min",
    [CLASS_SEGMENT.style]: "justify-center items-center",
  }),
  [RWD_VARIANTS.medium]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.layout]: "md:flex-row",
  }),
});

export const containerForMenClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.medium]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.layout]: "md:flex-row-reverse",
  }),
});

export const articleClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.layout]: "flex flex-col gap-8 justify-center items-center",
    [CLASS_SEGMENT.structure]: "w-full py-8 px-12",
    [CLASS_SEGMENT.style]: "text-primary",
  }),
  [RWD_VARIANTS.medium]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.structure]: "md:w-1/2",
    [CLASS_SEGMENT.style]: "md:opacity-0",
  }),
});

export const articleActiveClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.medium]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.style]:
      "md:opacity-100 md:transition-opacity md:duration-[3000ms] md:ease-out",
  }),
});

export const articleTitleClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.style]: "text-4xl font-bold",
  }),
});

export const articleParaClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.structure]: "w-full",
    [CLASS_SEGMENT.style]: "text-start leading-[1.5rem]",
  }),
  [RWD_VARIANTS.medium]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.structure]: "w-[36vh]",
  }),
});

export const articleBtnClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.layout]: "relative p-1.25",
    [CLASS_SEGMENT.style]: "bg-primary-lt text-primary font-bold opacity-60",
    [CLASS_SEGMENT.behavior]: "transition-fade cursor-pointer",
  }),
});

export const imgWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.structure]: "w-full h-full",
  }),
  [RWD_VARIANTS.medium]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.layout]: "md:w-1/2 md:overflow-hidden",
  }),
});

const imgClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.structure]: "w-full h-175",
    [CLASS_SEGMENT.style]: "object-cover object-center",
  }),
  [RWD_VARIANTS.medium]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.style]: "md:opacity-0",
  }),
});

export const imgActiveClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.medium]: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.style]:
      "md:translate-x-0 md:opacity-100 md:transition-[transform,opacity] md:duration-[1500ms] md:ease-in-out",
  }),
});

export const imgByTypeClasses = (type: GENDER) =>
  cn(
    imgClasses,
    mergeRWDClassesHelper({
      [RWD_VARIANTS.medium]: mergeSegmentClassesHelper({
        [CLASS_SEGMENT.style]: `md:${type === GENDER.men ? "-translate-x-full" : "translate-x-full"}`,
      }),
    }),
  );
