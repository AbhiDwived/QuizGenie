import React from "react";

const EndlessScroll = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900 text-white py-4">
      <style>{`
        @keyframes scrollRightToLeft {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: scrollRightToLeft 100s linear infinite;
        }
      `}</style>
      <style>{`
        @keyframes scrollRightToLeft {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee2 {
          animation: scrollRightToLeft 100s linear infinite;
        }
      `}</style>

      <div className="whitespace-nowrap animate-marquee inline-block">
        {/* Repeat elements for seamless scrolling */}
        <span className="mx-4">🚀 Client 1</span>
        <span className="mx-4">🔥 Client 2</span>
        <span className="mx-4">🌟 Client 3</span>
        <span className="mx-4">💼 Client 4</span>
        <span className="mx-4">🌐 Client 5</span>
        <span className="mx-4">🚀 Client 1</span>
        <span className="mx-4">🔥 Client 2</span>
        <span className="mx-4">🌟 Client 3</span>
        <span className="mx-4">💼 Client 4</span>
        <span className="mx-4">🌐 Client 5</span>
      </div>
      <div className="whitespace-nowrap animate-marquee inline-block">
        <span className="mx-4">🚀 Client 1</span>
        <span className="mx-4">🔥 Client 2</span>
        <span className="mx-4">🌟 Client 3</span>
        <span className="mx-4">💼 Client 4</span>
        <span className="mx-4">🌐 Client 5</span>
        <span className="mx-4">🚀 Client 1</span>
        <span className="mx-4">🔥 Client 2</span>
        <span className="mx-4">🌟 Client 3</span>
        <span className="mx-4">💼 Client 4</span>
        <span className="mx-4">🌐 Client 5</span>
      </div>
    </div>
  );
};

export default EndlessScroll;
