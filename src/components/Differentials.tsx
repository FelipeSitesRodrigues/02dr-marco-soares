import { motion } from 'framer-motion'
import { Zap, Eye, Heart, Clock, Shield, BarChart3 } from 'lucide-react'

const differentials = [
  {
    icon: Eye,
    title: 'Visão Estratégica',
    description: 'Cada caso começa com uma análise profunda das possibilidades jurídicas antes de qualquer ação, garantindo a melhor rota para o resultado desejado.',
  },
  {
    icon: Heart,
    title: 'Atendimento Humanizado',
    description: 'Tratamos cada cliente não como um número de processo, mas como um ser humano com uma história, uma dor e um direito a ser defendido com dignidade.',
  },
  {
    icon: Zap,
    title: 'Agilidade & Precisão',
    description: 'Prazos cumpridos rigorosamente, peças jurídicas de excelência e resposta rápida em situações urgentes como tutelas antecipadas e liminares.',
  },
  {
    icon: Clock,
    title: 'Acompanhamento Constante',
    description: 'Nosso cliente nunca fica no escuro. Comunicação proativa em cada etapa do processo, com relatórios claros e objetivos sobre a evolução do caso.',
  },
  {
    icon: Shield,
    title: 'Ética Inabalável',
    description: 'Atuação guiada por princípios éticos rigorosos, transparência total sobre honorários, estratégias e prognósticos reais — sem promessas vazias.',
  },
  {
    icon: BarChart3,
    title: 'Resultados Comprovados',
    description: 'Mais de 1.200 casos acompanhados com taxa de êxito superior a 98%, consolidando uma trajetória de entregas concretas e transformadoras.',
  },
]

export default function Differentials() {
  return (
    <section className="py-24 lg:py-32 bg-navy-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 text-emerald-600 text-xs font-semibold tracking-widest uppercase mb-5">
              <span className="w-8 h-px bg-emerald-500" />
              Por que nos escolher
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-700 text-navy-900 leading-tight mb-6">
              O que nos torna{' '}
              <span className="text-emerald-600">diferentes</span>
            </h2>
            <p className="text-navy-500 text-lg leading-relaxed mb-8">
              Em um mercado de advocacia saturado de promessas genéricas,
              o escritório do Dr. Marco Soares se distingue pela combinação
              entre rigor técnico, estratégia personalizada e presença humana
              em cada etapa da jornada jurídica do cliente.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-emerald-500 pl-6 py-1">
              <p className="font-serif text-xl text-navy-800 italic leading-snug">
                "Meu compromisso não é apenas ganhar um processo.
                É garantir que meu cliente sinta que foi defendido com
                toda a competência que ele merece."
              </p>
              <footer className="mt-3 text-navy-500 text-sm font-medium">
                — Dr. Marco Soares, OAB/DF
              </footer>
            </blockquote>
          </motion.div>

          {/* Right: cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {differentials.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="bg-white border border-navy-100 rounded-2xl p-6 hover:border-emerald-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 bg-navy-50 rounded-xl flex items-center justify-center mb-4">
                  <d.icon className="w-5 h-5 text-navy-700" />
                </div>
                <h3 className="font-serif font-600 text-navy-900 text-[16px] mb-2">{d.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{d.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
