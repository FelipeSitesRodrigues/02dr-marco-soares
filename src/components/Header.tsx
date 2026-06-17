import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle, Scale } from 'lucide-react'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Atuação', href: '#atuacao' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Reconhecimento', href: '#reconhecimento' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
]

const WA_LINK = 'https://wa.me/5500000000000?text=Olá%2C%20Dr.%20Marco!%20Gostaria%20de%20agendar%20uma%20consulta.'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_24px_rgba(10,22,40,0.10)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300 ${scrolled ? 'bg-navy-800' : 'bg-white/20 backdrop-blur-sm'}`}>
              <Scale className={`w-5 h-5 ${scrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <div>
              <div className={`font-serif font-700 text-[15px] leading-tight tracking-wide transition-colors ${scrolled ? 'text-navy-900' : 'text-white'}`}>
                Dr. Marco Soares
              </div>
              <div className={`text-[10px] font-medium tracking-[0.18em] uppercase transition-colors ${scrolled ? 'text-navy-500' : 'text-white/70'}`}>
                Advocacia
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium tracking-wide transition-colors duration-200 hover:text-emerald-500 ${
                  scrolled ? 'text-navy-700' : 'text-white/85'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-emerald-600/25 hover:-translate-y-px"
            >
              <MessageCircle className="w-4 h-4" />
              Fale pelo WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-navy-800 hover:bg-navy-50' : 'text-white hover:bg-white/10'}`}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-navy-100 shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-navy-700 hover:text-emerald-600 font-medium py-3 text-sm border-b border-navy-50 last:border-0 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold py-3 rounded-lg text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Fale pelo WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
