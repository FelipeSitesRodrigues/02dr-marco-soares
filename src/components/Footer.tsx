import { Scale, MapPin, Phone, Mail, MessageCircle, Link2, Share2, Globe } from 'lucide-react'

const WA_LINK = 'https://wa.me/5500000000000?text=Olá%2C%20Dr.%20Marco!%20Gostaria%20de%20agendar%20uma%20consulta.'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Áreas de Atuação', href: '#atuacao' },
  { label: 'Sobre o Dr. Marco', href: '#sobre' },
  { label: 'Reconhecimento', href: '#reconhecimento' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
]

const areas = [
  'Defesa do Paciente',
  'Direito Médico',
  'Direito Administrativo',
  'Consultoria Jurídica',
  'Planos de Saúde',
  'Responsabilidade Civil',
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-navy-800 rounded-lg flex items-center justify-center">
                <Scale className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="font-serif font-700 text-white text-[15px]">Dr. Marco Soares</div>
                <div className="text-navy-400 text-[10px] tracking-widest uppercase">Advocacia</div>
              </div>
            </div>
            <p className="text-navy-400 text-sm leading-relaxed mb-6">
              Advocacia especializada em Defesa do Paciente, Direito Médico e
              Direito Administrativo. Mais de 15 anos defendendo quem mais precisa.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Share2, href: '#' },
                { icon: Link2, href: '#' },
                { icon: Globe, href: '#' },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="w-9 h-9 bg-navy-800 hover:bg-navy-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-navy-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-navy-400 hover:text-emerald-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">Áreas de Atuação</h3>
            <ul className="space-y-3">
              {areas.map((area) => (
                <li key={area}>
                  <span className="text-navy-400 text-sm">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-navy-400 text-sm leading-snug">
                  SGAS 915, Bloco B, Sala 302<br />
                  Brasília — DF, 70390-150
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+5561900000000" className="text-navy-400 hover:text-white text-sm transition-colors">
                  (61) 9 0000-0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:contato@drmarcosoares.adv.br" className="text-navy-400 hover:text-white text-sm transition-colors">
                  contato@drmarcosoares.adv.br
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-navy-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Dr. Marco Soares Advocacia. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1 text-navy-600 text-xs">
            <span>OAB/DF</span>
            <span className="w-1 h-1 rounded-full bg-navy-700" />
            <span>Brasília — DF</span>
            <span className="w-1 h-1 rounded-full bg-navy-700" />
            <span>Atendimento Nacional</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
