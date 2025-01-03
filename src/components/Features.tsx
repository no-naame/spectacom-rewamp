"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const features = [
    {
        title: "Obstacle Race",
        description: "The Devils Circuit is not where you compete physically, but where you break your mental barriers.",
        images: [
            "https://spectacom.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fobst3.c733115b.jpg&w=3840&q=75",
            "https://spectacom.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fobst2.49e9d563.jpg&w=1920&q=75"
        ],
    },
    {
        title: "Ticketing Platform",
        description: "The one place to find curated sports & fitness competitions to join in. No clutter, only sport.",
        images: [
            "https://spectacom.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fticket3.96c7045c.jpg&w=1920&q=75",
            "https://spectacom.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fticket1.36f5c481.jpg&w=3840&q=75"
        ],
    },
    {
        title: "Health & Wellness App",
        description: "Holistic, vernacular, full of data science, ready to hold your hand and take those first crucial steps with you.",
        images: [
            "https://spectacom.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhealth1.24c8a49e.jpg&w=3840&q=75",
            "https://spectacom.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhealth2.ea87107a.jpg&w=3840&q=75"
        ],
    },
    {
        title: "Corporate Wellness",
        description: "A curated dashboard that empowers you with insightful data on employee health. Kick that insurance premium down!",
        images: [
            "https://spectacom.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoor1.6522a703.jpg&w=1920&q=75",
            "https://spectacom.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoor3.629d5d14.jpg&w=3840&q=75"
        ],
    },
    {
        title: "Media Properties",
        description: "We're storytellers, capturing the essence of adventure, health, and lifestyle through captivating content.",
        images: [
            "https://spectacom.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMediaProp1.b339c0ba.jpg&w=3840&q=75",
            "https://spectacom.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMediaProp2.6259f3d7.jpg&w=3840&q=75"
        ],
    },
]

export default function FeaturesComponent() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true)
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length)
                setIsTransitioning(false)
            }, 300)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative min-h-screen bg-black py-20">
            <div className="absolute inset-0 bg-gradient-to-b from-background to-black opacity-50" />

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl md:text-8xl font-light text-gradient mb-16 text-center">
                    Features
                </h2>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={cn(
                        "space-y-6 transition-opacity duration-300",
                        isTransitioning ? "opacity-0" : "opacity-100"
                    )}>
                        <h3 className="text-4xl md:text-7xl font-light text-gradient">
                            {features[currentIndex].title}
                        </h3>
                        <p className="text-xl text-muted-foreground max-w-xl">
                            {features[currentIndex].description}
                        </p>
                    </div>

                    <div className={cn(
                        "relative h-[600px] transition-opacity duration-300",
                        isTransitioning ? "opacity-0" : "opacity-100"
                    )}>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full h-full">
                                <Image
                                    src={features[currentIndex].images[0]}
                                    alt={`${features[currentIndex].title} - 1`}
                                    fill
                                    className="object-cover rounded-lg shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-4/5 h-4/5 -mt-16 ml-16">
                                <Image
                                    src={features[currentIndex].images[1]}
                                    alt={`${features[currentIndex].title} - 2`}
                                    fill
                                    className="object-cover rounded-lg shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-12 gap-2">
                    {features.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setIsTransitioning(true)
                                setTimeout(() => {
                                    setCurrentIndex(index)
                                    setIsTransitioning(false)
                                }, 300)
                            }}
                            className={cn(
                                "w-3 h-3 rounded-full transition-all duration-300",
                                currentIndex === index
                                    ? "bg-red-600 w-12"
                                    : "bg-gray-600 hover:bg-gray-500"
                            )}
                            aria-label={`View ${features[index].title}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

