import WorldMap from "@/components/ui/world-map";
import { motion } from "framer-motion";

export function WorldMapDemo() {
  return (
    <div className="relative py-20 w-full bg-gradient-to-b from-slate-50 to-white overflow-hidden font-oswald">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200 rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-800 text-sm font-medium mb-8 shadow-lg">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            GLOBAL IEEE NETWORK
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
            IEEE&apos;S GLOBAL
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              RECOGNITION
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto mb-10 rounded-full"></div>
        </motion.div>

        {/* Enhanced description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light mb-6">
              The Institute of Electrical and Electronics Engineers (IEEE) is the world&apos;s largest 
              technical professional organization dedicated to advancing technology for humanity.
            </p>
            
            {/* Statistics grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">400K+</div>
                <div className="text-gray-600 font-medium">Global Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-indigo-600 mb-2">160+</div>
                <div className="text-gray-600 font-medium">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">39</div>
                <div className="text-gray-600 font-medium">Technical Societies</div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                IEEE&apos;s 39 technical societies provide specialized resources, cutting-edge research publications, 
                world-class conferences, and extensive networking opportunities for professionals and students 
                across diverse engineering and technology domains.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Enhanced world map container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100 overflow-hidden">
            {/* Decorative grid overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.3) 2px, transparent 0)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <WorldMap
                className="w-full h-auto transition-all duration-700 hover:scale-105"
                dotsStyle="fill-blue-600"
                dots={[
                  { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
                  { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } },
                  { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } },
                  { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
                  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } },
                  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } },
                  { start: { lat: 34.0522, lng: -118.2437 }, end: { lat: 40.7128, lng: -74.006 } },
                  { start: { lat: 40.7128, lng: -74.006 }, end: { lat: 45.4215, lng: -75.6972 } },
                  { start: { lat: 38.7223, lng: -9.1393 }, end: { lat: 48.8566, lng: 2.3522 } },
                  { start: { lat: 48.8566, lng: 2.3522 }, end: { lat: 52.52, lng: 13.405 } },
                  { start: { lat: 52.52, lng: 13.405 }, end: { lat: 59.3293, lng: 18.0686 } },
                  { start: { lat: 59.3293, lng: 18.0686 }, end: { lat: 55.7558, lng: 37.6173 } },
                  { start: { lat: 55.7558, lng: 37.6173 }, end: { lat: 25.276987, lng: 55.296249 } },
                  { start: { lat: 25.276987, lng: 55.296249 }, end: { lat: 28.6139, lng: 77.209 } },
                  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 13.7563, lng: 100.5018 } },
                  { start: { lat: 13.7563, lng: 100.5018 }, end: { lat: 35.6895, lng: 139.6917 } },
                  { start: { lat: 35.6895, lng: 139.6917 }, end: { lat: 37.5665, lng: 126.978 } },
                  { start: { lat: 37.5665, lng: 126.978 }, end: { lat: -33.8688, lng: 151.2093 } },
                  { start: { lat: -33.8688, lng: 151.2093 }, end: { lat: -26.2041, lng: 28.0473 } },
                  { start: { lat: -26.2041, lng: 28.0473 }, end: { lat: -1.2921, lng: 36.8219 } },
                  { start: { lat: -1.2921, lng: 36.8219 }, end: { lat: -34.6037, lng: -58.3816 } },
                  { start: { lat: -34.6037, lng: -58.3816 }, end: { lat: 19.4326, lng: -99.1332 } },
                  { start: { lat: 19.4326, lng: -99.1332 }, end: { lat: 40.7128, lng: -74.006 } },
                ]}
                lineColor="#3B82F6"
              />
            </div>
          </div>
          
          {/* Floating connection indicators */}
          <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Live Network</span>
            </div>
          </div>
          
          <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Global Reach</span>
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
          <div className="inline-flex items-center gap-4 text-gray-500 text-sm">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
            <span className="font-medium tracking-wider uppercase">Connecting Innovation Worldwide</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}