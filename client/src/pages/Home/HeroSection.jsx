import { MoveRight } from "lucide-react";
import React from "react";
import EndlessScroll from "./EndlessScroll";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-3">
      <div>
        <h6 className="font-sans">#1 Quizz Application for learning</h6>
      </div>
      <div className="mt-2">
        <h1 className="text-[40px]  text-[#F57A21]">
          Intuitive. Flexible. Scalable.
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[45px] font-bold">
          Your platform for high-value training.
        </h1>
        <button className="flex items-center gap-2 font-bold bg-[#2CCFF6] border border-blue-200 border-4 transition-all duration-200 cursor-pointer rounded-xl py-3 px-25 mt-4 hover:bg-blue-500 transition-all duration-300">
          Sign up <MoveRight />
        </button>
        <h1 className="mt-2 text-[15px] font-thin text-gray-400">
          No credit card needed
        </h1>
        <div className="mt-10 pb-[100px]">
          <img
            src="https://images.www.talentlms.com/wp-content/uploads/2025/01/home-page-hero.webp"
            alt="heroimage"
            className="w-[1200px]"
            style={{ clipPath: "circle(80.1% at 50% -126%)" }}
          />
        </div>
        <EndlessScroll />
      </div>
    </div>
  );
};

export default HeroSection;
