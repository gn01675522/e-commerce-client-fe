import { mergeRWDClassesHelper } from "@/lib/utils/style.utils";

import { RWD_VARIANTS } from "@/shared/types/style.type";

export const backdropClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "fixed w-full h-screen top-0 left-0 bg-ghost-lt backdrop-blur-md z-2000",
});

export const modalClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "absolute w-[90%] h-min bg-primary p-4 rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-3000",
  [RWD_VARIANTS.medium]: "w-[40%]",
});
