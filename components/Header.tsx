"use client"

import { useState, useEffect, useRef } from "react" // 💡 IMPORTED useRef
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ppEditorialNewUltralightItalic } from "@/app/fonts"
import { Menu, X, Github, Rss, ChevronDown } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  // 💡 NEW REF: To manage the timeout for closing the dropdown
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // --- Utility Functions for Dropdown Control ---

  // 💡 NEW FUNCTION: Clear any pending close timeout
  const clearDropdownTimeout = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
      dropdownTimeoutRef.current = null
    }
  }

  // 💡 NEW FUNCTION: Start the close timer when the mouse leaves the area
  const startDropdownCloseTimer = () => {
    clearDropdownTimeout()
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false)
    }, 200) // Delay closure by 200ms (adjust as needed)
  }

  // --- Existing Logic ---
  
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    setIsServicesDropdownOpen(false)
  }, [pathname])

  const desktopNavLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    {
      href: "#services",
      label: "Services",
      isDropdown: true,
      submenu: [
        { href: "/ai", label: "AI Solutions" },
        { href: "/web", label: "Web Development" },
        { href: "/vibe-coding", label: "Vibe Coding" },
        { href: "/creativeai", label: "Creative AI" },
        { href: "https://gen.macai.cloud", label: "Video AI", target: "_blank" }
      ]
    },
    { href: "/about", label: "About Me" },
    { href: "/contact", label: "Contact" }
  ]

  const socialLinks = [
    { name: "Behance", icon: Rss, url: "https://www.behance.net/yourprofile" },
    { name: "GitHub", icon: Github, url: "https://github.com/yourprofile" },
  ]

  return (
    <header
      className={`fixed p-4 md:p-2 top-0 left-0 right-0 z-30`}
    >
      <div
        className={`md:mx-auto md:max-w-[95rem] mb-12 md:px-4 ${ 
          "md:bg-transparent md:backdrop-blur-xl"
        } 
        md:py-4 md:mt-2 md:mb-6`} 
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <span className={`text-xl font-bold text-white ${ppEditorialNewUltralightItalic.className}`}>
              <img src="/logoainsider.png" alt="Insdr Studio logo" className="h-8 w-auto" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex space-x-12 text-white"
            // REMOVED onMouseLeave from <nav>
          > 
            {desktopNavLinks.map((link) => (
              // 💡 UPDATED WRAPPER: This wrapper now manages the hover state for the Services link and its submenu
              <div 
                key={link.label}
                className="relative h-full flex items-center"
                // 💡 ACTION: When mouse enters the link or the whole wrapper, clear the close timer and open it
                onMouseEnter={() => {
                    if (link.isDropdown) {
                        clearDropdownTimeout()
                        setIsServicesDropdownOpen(true)
                    }
                }}
                // 💡 ACTION: When mouse leaves the link or the whole wrapper, start the delayed close timer
                onMouseLeave={() => link.isDropdown && startDropdownCloseTimer()}
              >
                <Link
                  href={link.href}
                  className={`text-base flex items-center gap-1 ${
                    pathname === link.href || (link.isDropdown && link.submenu?.some(sub => pathname === sub.href))
                      ? "text-white font-medium"
                      : "text-white/80 hover:text-white/100"
                  } transition-colors`}
                  onClick={(e) => link.isDropdown && e.preventDefault()} 
                >
                  {link.label}
                  {link.isDropdown && <ChevronDown size={16} className={`transition-transform ${isServicesDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />}
                </Link>

                {/* Submenu/Dropdown Content */}
                {link.isDropdown && link.submenu && isServicesDropdownOpen && (
                  <div 
                    className="absolute top-full mt-4 w-48 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg shadow-xl overflow-hidden z-20"
                    // The submenu inherits the onMouseLeave/onMouseEnter logic from the parent div, 
                    // ensuring the dropdown stays open while hovering over the submenu items.
                  >
                    {link.submenu.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        target={(subLink as any).target}
                        rel={(subLink as any).target === "_blank" ? "noopener noreferrer" : undefined}
                        className={`block px-4 py-3 text-sm ${
                          pathname === subLink.href
                            ? "bg-white/10 text-white font-medium"
                            : "text-white/70 hover:bg-white/5 hover:text-white/100"
                        } transition-colors`}
                        onClick={() => {
                            clearDropdownTimeout() // Ensure no lingering timeout messes up navigation
                            setIsServicesDropdownOpen(false) 
                        }} 
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons / Mobile Menu (Right Side) */}
          <div className="flex items-center space-x-3">
            {/* Social Icons (Desktop only) */}
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white/80 border border-white/10 hover:bg-black/70 transition-colors"
                aria-label={social.name}
              >
                <social.icon size={18} />
              </a>
            ))}
            
            {/* Chat With Us Button */}
            <Link
              href="/contact"
              className="hidden md:block px-6 py-2 bg-white hover:bg-white/90 text-black font-semibold rounded-full transition-colors shadow-lg shadow-white-500/30"
            >
              Let's Talk
            </Link>

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
        </div>
      </div>

      {/* Mobile Menu Overlay (UNCHANGED) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <img src="/logoainsider.png" alt="Ainsdr Studio logo" className="h-8 w-auto" />
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
              {desktopNavLinks.map((link) => (
                <div key={link.label} className="w-full text-center">
                  <Link
                    href={link.href}
                    className={`text-xl ${
                      pathname === link.href || (link.isDropdown && link.submenu?.some(sub => pathname === sub.href))
                        ? `text-white ${ppEditorialNewUltralightItalic.className} italic`
                        : "text-white/60 hover:text-white"
                    } transition-colors`}
                    onClick={() => {
                        if (!link.isDropdown) {
                            setIsMenuOpen(false);
                        }
                    }}
                  >
                    {link.label}
                  </Link>
                  {link.isDropdown && link.submenu && (
                    <div className="flex flex-col gap-2 mt-4 text-sm w-48 mx-auto">
                      {link.submenu.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          target={(subLink as any).target}
                          rel={(subLink as any).target === "_blank" ? "noopener noreferrer" : undefined}
                          className={`text-white/50 hover:text-white transition-colors`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="mt-6 px-6 py-3 text-lg bg-white-500 hover:bg-white-400 text-black font-semibold rounded-full transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Chat With Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}


// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { ppEditorialNewUltralightItalic } from "@/app/fonts"
// import { Menu, X } from "lucide-react"

// export default function Header() {
//   const pathname = usePathname()
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isMobile, setIsMobile] = useState(false)
//   const [hasScrolled, setHasScrolled] = useState(false)

//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768)
//     }
//     checkIfMobile()
//     window.addEventListener("resize", checkIfMobile)
//     return () => window.removeEventListener("resize", checkIfMobile)
//   }, [])

//   useEffect(() => {
//     setIsMenuOpen(false)
//   }, [pathname])

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/portfolio", label: "Portfolio" },
//     {
//       href: "/",
//       label: "Services",
//       submenu: [
//         { href: "/ai", label: "AI Solutions" },
//         { href: "/web", label: "Web Development" },
//         { href: "/visuals", label: "Design & UX/UI" },
//         { href: "/growth", label: "Marketing" },
//         { href: "/socialmedia", label: "Social Media" }
//        ]
//     },
//     { href: "/about", label: "About Me" },
//     { href: "/contact", label: "Contact" }
//   ]

//   return (
//     <header 
//       className={`w-full py-4 px-4 md:px-8 relative z-30 ${
//         isMobile ? 'fixed top-0 left-0 right-0' : ''
//       } ${
//         isMobile && hasScrolled ? 'backdrop-blur-sm bg-black/30' : ''
//       }`}
//     >
//       <div className="flex justify-between items-center">
//         <Link href="/">
//           <img src="/logoainsider.png" alt="Ainsider logo" className="h-8 w-auto" />
//         </Link>


//         <nav className="hidden md:flex space-x-8">
//           {navLinks.map((link) => (
//             <div key={link.href} className="relative group">
//               <Link
//                 href={link.href}
//                 className={`text-sm ${
//                   pathname === link.href 
//                     ? "text-white" 
//                     : "text-white/60 hover:text-white/90"
//                 } transition-colors`}
//               >
//                 {link.label}
//               </Link>
//               {link.submenu && (
//                 <div className="absolute left-0 top-full mt-2 bg-black/80 backdrop-blur-md rounded-lg p-2 min-w-[200px] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
//                   {link.submenu.map((subLink) => (
//                     <Link
//                       key={subLink.href}
//                       href={subLink.href}
//                       className="block px-4 py-2 hover:bg-white/10 rounded text-white/80 hover:text-white transition-colors"
//                     >
//                       {subLink.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>


//         <button 
//           className="md:hidden text-white p-1 focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//         >
//           {isMenuOpen ? (
//             <X size={24} className="text-white/90" />
//           ) : (
//             <Menu size={24} className="text-white/90" />
//           )}
//         </button>
//       </div>

 
//       {isMenuOpen && (
//         <div className="fixed inset-0 bg-black/95 z-40 md:hidden">
//           <div className="flex flex-col h-full">
//             <div className="flex justify-between items-center p-4">
//               <Link href="/" onClick={() => setIsMenuOpen(false)}>
//                 <img src="/logoainsider.png" alt="Ainsider logo" className="h-8 w-auto" />
//               </Link>
//               <button 
//                 className="text-white p-1 focus:outline-none"
//                 onClick={() => setIsMenuOpen(false)}
//                 aria-label="Close menu"
//               >
//                 <X size={24} className="text-white/90" />
//               </button>
//             </div>

//             <nav className="flex flex-col items-center justify-center flex-1 gap-8">
//               {navLinks.flatMap((link) => {
//                 if (isMobile && link.submenu) {
//                   return link.submenu.map((subLink) => (
//                     <Link
//                       key={subLink.href}
//                       href={subLink.href}
//                       className={`text-xl ${
//                         pathname === subLink.href 
//                           ? `text-white ${ppEditorialNewUltralightItalic.className} italic` 
//                           : "text-white/60 hover:text-white"
//                       } transition-colors`}
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       {subLink.label}
//                     </Link>
//                   ))
//                 }

//                 return (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     className={`text-xl ${
//                       pathname === link.href 
//                         ? `text-white ${ppEditorialNewUltralightItalic.className} italic` 
//                         : "text-white/60 hover:text-white"
//                     } transition-colors`}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {link.label}
//                   </Link>
//                 )
//               })}
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }
