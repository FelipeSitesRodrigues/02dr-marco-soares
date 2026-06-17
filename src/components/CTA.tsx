import { motion } from 'framer-motion'
import { MessageCircle, Phone, Clock } from 'lucide-react'

const WA_LINK = 'https://wa.me/5500000000000?text=Olá%2C%20Dr.%20Marco!%20Gostaria%20de%20agendar%20uma%20consulta.'

export default function CTA() {
  return (
    <section className="py-24 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 rounded-3xl overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-navy-600/30 rounded-full blur-3xl" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />

          <div className="relative z-10 px-8 py-14 lg:px-16 lg:py-16 text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
              <Clock className="w-3.5 h-3.5" />
              Atendimento personalizado disponível
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl font-700 text-white leading-tight mb-5">
              Seu caso merece a{' '}
              <span className="text-emerald-400">atenção certa</span>
            </h2>

            <p className="text-navy-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Não espere o problema se agravar. Uma consulta agora pode ser
              a diferença entre proteger seus direitos ou perdê-los para sempre.
              Entre em contato hoje mesmo — a primeira conversa é gratuita.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-0.5 text-[15px]"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Falar com o Dr. Marco agora
              </a>
              <a
                href="tel:+5500000000000"
                className="flex items-center gap-2 text-white/70 hover:text-white font-medium transition-colors text-[15px]"
              >
                <Phone className="w-4 h-4" />
                (61) 9 0000-0000
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 pt-10 border-t border-white/10">
              {[
                'Consulta inicial gratuita',
                'Sigilo absoluto garantido',
                'Resposta em até 2 horas',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-navy-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {item}
                </div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
