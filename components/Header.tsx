"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ppEditorialNewUltralightItalic } from "@/app/fonts"
import { Menu, X } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    {
      href: "/",
      label: "Usługi",
      submenu: [
        { href: "/ai", label: "AI Solutions" },
        { href: "/web", label: "Web Development" },
        { href: "/visuals", label: "Design & UX/UI" },
        { href: "/growth", label: "Marketing" }
       ]
    },
    { href: "/about", label: "O Nas" },
    { href: "/contact", label: "Kontakt" }
  ]

  return (
    <header 
      className={`w-full py-4 px-4 md:px-8 relative z-30 ${
        isMobile ? 'fixed top-0 left-0 right-0' : ''
      } ${
        isMobile && hasScrolled ? 'backdrop-blur-sm bg-black/30' : ''
      }`}
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <img src="/logoainsider.png" alt="Ainsider logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className={`text-sm ${
                  pathname === link.href 
                    ? "text-white" 
                    : "text-white/60 hover:text-white/90"
                } transition-colors`}
              >
                {link.label}
              </Link>
              {link.submenu && (
                <div className="absolute left-0 top-full mt-2 bg-black/80 backdrop-blur-md rounded-lg p-2 min-w-[200px] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                  {link.submenu.map((subLink) => (
                    <Link
                      key={subLink.href}
                      href={subLink.href}
                      className="block px-4 py-2 hover:bg-white/10 rounded text-white/80 hover:text-white transition-colors"
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-1 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X size={24} className="text-white/90" />
          ) : (
            <Menu size={24} className="text-white/90" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <img src="/logoainsider.png" alt="Ainsider logo" className="h-8 w-auto" />
              </Link>
              <button 
                className="text-white p-1 focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} className="text-white/90" />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.flatMap((link) => {
                // In mobile: flatten submenu and skip parent "Services"
                if (isMobile && link.submenu) {
                  return link.submenu.map((subLink) => (
                    <Link
                      key={subLink.href}
                      href={subLink.href}
                      className={`text-xl ${
                        pathname === subLink.href 
                          ? `text-white ${ppEditorialNewUltralightItalic.className} italic` 
                          : "text-white/60 hover:text-white"
                      } transition-colors`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subLink.label}
                    </Link>
                  ))
                }

                // Normal link
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xl ${
                      pathname === link.href 
                        ? `text-white ${ppEditorialNewUltralightItalic.className} italic` 
                        : "text-white/60 hover:text-white"
                    } transition-colors`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
