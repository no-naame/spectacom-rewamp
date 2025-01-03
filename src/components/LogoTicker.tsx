"use client";

import Image from "next/image";
import { motion } from "framer-motion";
const logos = [
    { name: "acme", url: "/logo-Acme.png" },
    { name: "quantum", url: "/logo-quantum.png" },
    { name: "echo", url: "/logo-echo.png" },
    { name: "celestial", url: "/logo-celestial.png" },
    { name: "pulse", url: "/logo-pulse.png" },
    { name: "apex", url: "/logo-apex.png" },
];

export const LogoTicker = () => {
    return (
        <div className="py-12 md:py-16">
            <div className="container mx-auto px-4">
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white,transparent)]">
                    <motion.div
                        className="flex gap-14 flex-none pr-14"
                        animate={{
                            translateX: "-40%",
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                    >
                        {[...logos, ...logos].map((logo, index) => (
                            <Image
                                key={`${logo.name}-${index}`}
                                src={logo.url}
                                alt={`${logo.name} Logo`}
                                width={100}
                                height={50}
                                className="logo-ticker-image invert"
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

