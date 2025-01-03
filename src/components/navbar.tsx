"use client"

import Link from "next/link"

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-muted">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="font-bold text-xl text-gradient">
                        Spectacom
                    </Link>
                    <span className="text-sm text-muted-foreground">Global</span>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        About Us
                    </Link>

                </div>
            </nav>
        </header>
    )
}

