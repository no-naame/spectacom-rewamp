"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Acme from "@/../public/logo-Acme.png"
import Quantum from "@/../public/logo-quantum.png"
import Echo from "@/../public/logo-echo.png"
import Celestial from "@/../public/logo-celestial.png"
import Pulse from "@/../public/logo-pulse.png"
import Apex from "@/../public/logo-apex.png"
const logos = [
    { name: "acme", url: Acme },
    { name: "quantum", url: Quantum },
    { name: "echo", url: Echo },
    { name: "celestial", url: Celestial },
    { name: "pulse", url: Pulse },
    { name: "apex", url: Apex },
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

