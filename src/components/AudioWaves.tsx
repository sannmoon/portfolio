import React from "react";

const AudioWave: React.FC = () => {
  return (
    <div className="w-full h-24 overflow-hidden relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 80 36"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        style={{ transform: "translate3d(0px, 0px, 0px)" }}
      >
        <path
          className="wave-path"
          d="M0,18 C10,5 20,32 30,18 C40,5 50,32 60,18 C70,5 80,32"
          fill="transparent"
          stroke="#029ED1"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
};

export default AudioWave;
