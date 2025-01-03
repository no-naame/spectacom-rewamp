import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-secondary py-12 mx-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gradient">Spectacom Global</h3>
                        <p className="text-muted-foreground">Empowering health and wellness through innovative technology.</p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
                        <nav className="flex flex-col space-y-2">
                            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
                            <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
                            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
                            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
                        </nav>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">Connect With Us</h4>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Facebook size={24} />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Twitter size={24} />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Instagram size={24} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Linkedin size={24} />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-muted text-center text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Spectacom Global. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

