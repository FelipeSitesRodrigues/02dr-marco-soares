import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown, Award, Users, BookOpen, Star } from 'lucide-react'
import heroImg from '../assets/hero.png'

const WA_LINK = 'https://wa.me/5500000000000?text=Olá%2C%20Dr.%20Marco!%20Gostaria%20de%20agendar%20uma%20consulta.'

const stats = [
  { icon: Award, value: '15+', label: 'Anos de Experiência' },
  { icon: Users, value: '1.200+', label: 'Clientes Atendidos' },
  { icon: BookOpen, value: 'OAB', label: 'Membro da Diretoria' },
  { icon: Star, value: '98%', label: 'Casos Favoráveis' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />

      {/* Subtle geometric accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-white" />
        <div className="absolute top-40 right-40 w-64 h-64 rounded-full border border-white" />
        <div className="absolute top-60 right-10 w-32 h-32 rounded-full border border-white" />
      </div>

      {/* Green accent line */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-emerald-500 to-transparent opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Advocacia Especializada · Brasília
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="font-serif text-4xl lg:text-5xl xl:text-6xl font-700 text-white leading-[1.1] tracking-tight mb-6"
            >
              Defesa dos seus{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                direitos
              </span>{' '}
              com{' '}
              <br className="hidden lg:block" />
              estratégia e precisão
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="text-navy-200 text-lg leading-relaxed mb-10 max-w-xl"
            >
              Atuação jurídica de alto nível em Defesa do Paciente, Direito Médico
              e Direito Administrativo. Mais de 15 anos protegendo quem mais precisa,
              com resultados comprovados.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-0.5 text-[15px]"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Agendar Consulta Gratuita
              </a>
              <a
                href="#sobre"
                className="flex items-center justify-center gap-2 text-white/80 hover:text-white font-medium px-8 py-4 rounded-xl border border-white/15 hover:border-white/30 transition-all duration-200 text-[15px]"
              >
                Conheça o Dr. Marco
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={4}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-1">
                    <stat.icon className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="font-serif font-700 text-2xl text-white leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-navy-300 text-[11px] font-medium tracking-wide leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Green glow behind photo */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
              {/* Photo frame */}
              <div className="relative w-72 h-[420px] lg:w-80 lg:h-[480px] xl:w-96 xl:h-[560px]">
                <img
                  src={heroImg}
                  alt="Dr. Marco Soares"
                  className="w-full h-full object-cover object-top rounded-2xl"
                  style={{ objectPosition: 'center top' }}
                />

                {/* Credential badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -left-6 bottom-12 bg-white rounded-xl shadow-2xl px-4 py-3 min-w-[160px]"
                >
                  <div className="text-[10px] font-semibold text-navy-500 uppercase tracking-widest mb-0.5">OAB/DF</div>
                  <div className="font-serif font-700 text-navy-900 text-sm">Membro da Diretoria</div>
                  <div className="text-[11px] text-navy-500 mt-0.5">Triênio 2022–2025</div>
                </motion.div>

                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-navy-400 text-xs tracking-widest uppercase">Rolar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-emerald-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
