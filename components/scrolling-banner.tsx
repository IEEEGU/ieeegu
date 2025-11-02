"use client";

export default function ScrollingBanner() {
  return (
    <div className="w-full overflow-hidden bg-[#4169E1] py-2 md:py-3">
      <div className="animate-scroll-x flex whitespace-nowrap">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-center mr-8">
            <span className="text-white text-sm md:text-lg font-medium">IEEE DAY</span>
            <span className="text-white mx-2 md:mx-4">❋</span>
            <span className="text-white text-sm md:text-lg font-medium">CELEBRATION</span>
            <span className="text-white mx-2 md:mx-4">❋</span>
            <span className="text-white text-sm md:text-lg font-medium">IS COMING SOON</span>
            <span className="text-white mx-2 md:mx-4">❋</span>
            <span className="text-white text-sm md:text-lg font-medium">1ST WEEK OF OCTOBER</span>
            <span className="text-white mx-2 md:mx-4">❋</span>
          </div>
        ))}
      </div>
    </div>
  );
}

