"use client";
import { motion } from "framer-motion";
import React, { memo } from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

const ImagesSliderDemo = memo(function ImagesSliderDemo() {
    // Optimized images with WebP format and proper dimensions
    const images = [
        "https://res.cloudinary.com/dgna3swph/image/upload/c_fill,w_1920,h_1080,f_webp,q_auto:good/v1741287531/YS0_8171_iigcgb.jpg",
        "https://res.cloudinary.com/dgna3swph/image/upload/c_fill,w_1920,h_1080,f_webp,q_auto:good/v1741288705/DSC07170_coyqn0.jpg",
        "https://res.cloudinary.com/dgna3swph/image/upload/c_fill,w_1920,h_1080,f_webp,q_auto:good/v1741287532/SAM_3177_xlxi0h.jpg",
        "https://res.cloudinary.com/dgna3swph/image/upload/c_fill,w_1920,h_1080,f_webp,q_auto:good/v1741289132/DSC09852_blblck.jpg",
    ];

    return (
        <ImagesSlider 
            images={images} 
            className="w-full md:h-screen h-[30vh] overflow-hidden"
            autoplay={true}
        >
            <div className="w-full h-full flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: -80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full h-full"
                />
            </div>
        </ImagesSlider>
    );
});

export { ImagesSliderDemo };
