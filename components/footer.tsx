import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-8 bg-brand-dark text-brand-light border-t border-white/10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} VELOCITY. Pure Driving Emotion.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm hover:text-brand-accent transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm hover:text-brand-accent transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="text-sm hover:text-brand-accent transition-colors">
            Legal
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link href="#" aria-label="Facebook" className="text-brand-light hover:text-brand-accent transition-colors">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Instagram" className="text-brand-light hover:text-brand-accent transition-colors">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Twitter" className="text-brand-light hover:text-brand-accent transition-colors">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Youtube" className="text-brand-light hover:text-brand-accent transition-colors">
            <Youtube className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
