"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"
import { Car, Sun, Moon, Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Models", href: "/models" },
    { name: "Design", href: "/design" },
    { name: "Specs", href: "/specs" },
    { name: "Contact", href: "/contact" },
    { name: "History", href: "/history" },
    { name: "Environment", href: "/environment" },
  ]

  if (!mounted) {
    return (
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <div className="flex items-center justify-between px-6 py-3 bg-black/30 backdrop-blur-lg border border-white/10 rounded-full shadow-lg w-full max-w-6xl">
          <div className="flex items-center gap-2 text-brand-light">
            <Car className="h-6 w-6" />
            <span className="font-bold text-lg tracking-wider">VELOCITY</span>
          </div>
          <div className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-brand-light" />
            <div className="w-11 h-6 bg-gray-700 rounded-full"></div>
            <Moon className="h-5 w-5 text-brand-light" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="flex items-center justify-between px-6 py-3 bg-black/30 backdrop-blur-lg border border-white/10 rounded-full shadow-lg w-full max-w-6xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-brand-light hover:text-brand-accent transition-colors">
          <Car className="h-6 w-6" />
          <span className="font-bold text-lg tracking-wider">VELOCITY</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <Button
              key={link.name}
              asChild
              variant="ghost"
              size="sm"
              className="text-brand-light hover:bg-white/10 hover:text-brand-accent transition-colors text-sm font-medium px-3 py-2"
            >
              <Link href={link.href}>{link.name}</Link>
            </Button>
          ))}
        </div>

        {/* Right side - Theme toggle and mobile menu */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4 text-brand-light" />
            <Switch
              checked={theme === "dark"}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              className="data-[state=checked]:bg-brand-accent data-[state=unchecked]:bg-gray-600"
            />
            <Moon className="h-4 w-4 text-brand-light" />
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-brand-light hover:bg-white/10 p-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-brand-dark/95 backdrop-blur-lg border-l border-white/10 w-[300px] sm:w-[400px]"
              >
                <div className="flex flex-col gap-6 pt-8">
                  <div className="flex items-center gap-2 text-brand-light mb-4">
                    <Car className="h-6 w-6" />
                    <span className="font-bold text-lg tracking-wider">VELOCITY</span>
                  </div>
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <Link
                        href={link.href}
                        className="block text-brand-light text-lg font-medium py-3 px-4 hover:text-brand-accent hover:bg-white/5 rounded-lg transition-all"
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
