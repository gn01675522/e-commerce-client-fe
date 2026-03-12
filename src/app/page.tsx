"use client";
import { HeroBanner } from "@/features/marketing/components/HeroBanner";

import type { FC } from "react";

import "@/styles/index.css";

const Home: FC = () => {
  return (
    <div className="home bg-white">
      <HeroBanner />
    </div>
  );
};

export default Home;
