import Link from "next/link"
import { Youtube, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-4 px-4 border-t border-white/10">
      <div className="flex flow-row justify-between hidden sm:flex pb-4 ">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-center w-full max-w-[260px] text-sm mt-4"
            >
              Let's talk
            </Link>
            
            <div className="flex flex-row space-x-4 justify-center mt-6">
                  <Link
                    href="https://x.com/piotrmacai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white/90 transition-colors"
                  >
                    <Twitter size={20} />
                    <span className="sr-only">X (Twitter)</span>
                  </Link>
                  <Link
                    href="https://www.instagram.com/piotr.macai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white/90 transition-colors"
                  >
                    <Instagram size={20} />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/piotrmacai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white/90 transition-colors"
                  >
                    <Linkedin size={20} />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://www.behance.net/macaistudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white/90 transition-colors"
                  >
                    <span className="font-bold text-lg">Be</span>
                    <span className="sr-only">Behance</span>
                  </Link>
                  {/* <Link
                    href="https://www.youtube.com/@MacaiStudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white/90 transition-colors"
                  > 
                    <Youtube size={20} />
                    <span className="sr-only">YouTube</span>
                  </Link> */}
            </div>

            <Link
              href="/contact"
              className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium bg-white/10 hover:bg-white/5 transition-colors text-center w-full max-w-[260px] text-sm mt-4"
            >
              Contact
            </Link>
        </div>
    </footer>
  )
}



// import Link from "next/link"

// export default function Footer() {
//   return (
//     <footer className="w-full py-6 px-8 border-t border-white/10">
//       <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//         <div className="text-xs text-white/40">© {new Date().getFullYear()} Piotr Macai. All rights reserved.</div>
//         <div className="flex space-x-6">
//           <Link href="/privacy" className="text-xs text-white/40 hover:text-white/60 transition-colors">
//             Privacy Policy
//           </Link>
//           <Link href="/terms" className="text-xs text-white/40 hover:text-white/60 transition-colors">
//             Terms of Use
//           </Link>
//         </div>
//       </div>
//     </footer>
//   )
// }

