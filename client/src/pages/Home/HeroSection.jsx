import { MoveRight } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-3">
      <div>
        <h6 className="font-sans">#1 Quizz Application for learning</h6>
      </div>
      <div className="mt-2">
        <h1 className="text-[40px] font-medium bg-gradient-to-r from-[#FFCA4D] to-[#F57A21] bg-clip-text text-transparent">
          Intuitive. Flexible. Scalable.
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[45px] font-bold">
          Your platform for high-value training.
        </h1>
        <button className="flex items-center gap-2 font-bold bg-[#2CCFF6] border border-blue-200 border-4 transition-all duration-200 cursor-pointer rounded-xl py-3 px-25 mt-4">
          Sign up <MoveRight />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
