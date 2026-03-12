"use client";

import { SpecificCategorySection } from "@/features/marketing/components/SpecificCategorySection";
import { GENDER } from "@/shared/types";

import type { FC } from "react";

import "@/styles/index.css";

const Home: FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <SpecificCategorySection type={GENDER.men} inView={true} />
    </div>
  );
};

export default Home;
