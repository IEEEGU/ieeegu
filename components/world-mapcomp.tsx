import { motion } from "framer-motion";

export function WorldMapDemo() {
  return (
    <div className="relative py-20 w-full bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden font-oswald">
      {/* Enhanced dark space-themed background */}
      <div className="absolute inset-0">
        {/* Dark space gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-gray-800/80 to-black/90"></div>
        
        {/* Floating dark orbs for space effect with natural animation */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-radial from-gray-600/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-radial from-slate-600/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-radial from-gray-700/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-60 h-60 bg-gradient-radial from-slate-500/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-radial from-gray-600/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
        
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30px_30px,rgba(156,163,175,0.2)_1px,transparent_0)] bg-[length:60px_60px]"></div>
        </div>
        
        {/* Dark rays effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/10 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
        {/* Premium header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800/50 to-slate-800/50 rounded-full text-gray-200 text-sm font-medium mb-8 shadow-lg border border-gray-700/50">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
            GLOBAL IEEE NETWORK
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            IEEE&apos;S GLOBAL
            <span className="block bg-gradient-to-r from-gray-400 via-slate-400 to-gray-300 bg-clip-text text-transparent">
              RECOGNITION
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-gray-400 via-slate-400 to-gray-300 mx-auto mb-10 rounded-full"></div>
        </motion.div>

        {/* Enhanced description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/30">
            <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed font-light mb-6">
              The Institute of Electrical and Electronics Engineers (IEEE) is the world&apos;s largest 
              technical professional organization dedicated to advancing technology for humanity.
            </p>
            
            {/* Statistics grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gray-300 mb-2">400K+</div>
                <div className="text-gray-400 font-medium">Global Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-slate-300 mb-2">160+</div>
                <div className="text-gray-400 font-medium">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gray-200 mb-2">39</div>
                <div className="text-gray-400 font-medium">Technical Societies</div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-gray-800/30 to-slate-800/30 rounded-xl border border-gray-600/30">
              <p className="text-lg text-gray-100 leading-relaxed font-light">
                IEEE&apos;s 39 technical societies provide specialized resources, cutting-edge research publications, 
                world-class conferences, and extensive networking opportunities for professionals and students 
                across diverse engineering and technology domains.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="inline-flex items-center gap-4 text-gray-300 text-sm">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
            <span className="font-medium tracking-wider uppercase">Connecting Innovation Worldwide</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}