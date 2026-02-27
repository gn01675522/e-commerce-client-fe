import { mergeSegmentClassesHelper } from "@/lib/utils";
import { CLASS_SEGMENT } from "@/shared/types/style.type";

export const containerClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.base]: "z-10000",
  [CLASS_SEGMENT.structure]: "w-screen h-screen",
  [CLASS_SEGMENT.layout]: "fixed flex justify-center items-center top-0 left-0",
  [CLASS_SEGMENT.style]: "bg-secondary backdrop-blur-md opacity-50",
});

export const loaderClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.structure]: "w-18.75 h-18.75",
  //todo border-top 需要修正
  [CLASS_SEGMENT.style]: "border-15 border-t-indigo-500 rounded-full",
  [CLASS_SEGMENT.behavior]: "animate-spin",
});
