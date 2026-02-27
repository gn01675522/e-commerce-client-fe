import { mergeSegmentClassesHelper } from "@/lib/utils";
import { CLASS_SEGMENT } from "@/shared/types";

export const tableClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.structure]: "w-full min-h-min",
  [CLASS_SEGMENT.style]: "bg-secondary",
});

export const tableHeaderClasses = mergeSegmentClassesHelper({});

export const tableHeadClasses = mergeSegmentClassesHelper({});

export const tableBodyClasses = mergeSegmentClassesHelper({});

export const tableRowClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.structure]: "h-12",
  [CLASS_SEGMENT.style]: "even:bg-ghost-lt",
});

export const tableCellClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.structure]: "h-full",
  [CLASS_SEGMENT.layout]: "item-center",
  [CLASS_SEGMENT.style]: "border border-primary",
});

export const tableFooterClasses = mergeSegmentClassesHelper({});
