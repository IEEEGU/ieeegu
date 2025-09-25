"use client";

import React from 'react';

const ResearchBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Simple gradient background - no animations for better performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white/80 to-indigo-50/60"></div>
      
      {/* Static soft shapes - no motion animations to reduce CPU usage */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-10 w-60 h-60 bg-indigo-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-cyan-200/30 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default ResearchBackground;
