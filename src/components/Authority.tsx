import { motion } from 'framer-motion'
import { Mic, Tv, Trophy, Building2, BookOpen, Globe } from 'lucide-react'

const achievements = [
  {
    icon: Building2,
    category: 'Cargo Institucional',
    title: 'Membro da Diretoria — OAB/DF',
    description: 'Eleito para a diretoria da Ordem dos Advogados do Brasil, Seccional do Distrito Federal, triênio 2022–2025.',
  },
  {
    icon: BookOpen,
    category: 'Liderança Temática',
    title: 'Presidente da Comissão de Saúde',
    description: 'Preside a Comissão Especial de Saúde da OAB/DF, coordenando debates sobre legislação sanitária e direitos dos pacientes.',
  },
  {
    icon: Mic,
    category: 'Palestras & Eventos',
    title: 'Palestrante em Congressos Nacionais',
    description: 'Presença confirmada em congressos médico-jurídicos e de saúde pública em todo o território nacional.',
  },
  {
    icon: Tv,
    category: 'Mídia & Imprensa',
    title: 'Entrevistas em Veículos de Alcance Nacional',
    description: 'Consultado por jornais, portais e programas televisivos sobre temas relacionados ao Direito Médico e ao sistema de saúde brasileiro.',
  },
  {
    icon: Trophy,
    category: 'Reconhecimento Profissional',
    title: 'Referência em Direito Médico no DF',
    description: 'Reconhecido por pares e clientes como uma das referências mais sólidas em Direito Médico e Defesa do Paciente na capital federal.',
  },
  {
    icon: Globe,
    category: 'Representação',
    title: 'Articulação Institucional',
    description: 'Representação jurídica em fóruns de políticas de saúde e defesa de interesses coletivos de pacientes e profissionais da área médica.',
  },
]

const metrics = [
  { value: '15+', label: 'Anos de carreira' },
  { value: '1.200+', label: 'Clientes atendidos' },
  { value: '98%', label: 'Casos favoráveis' },
  { value: '50+', label: 'Palestras realizadas' },
  { value: '3x', label: 'Eleito para OAB' },
  { value: 'Top 1%', label: 'Em Direito Médico/DF' },
]

export default function Authority() {
  return (
    <section id="reconhecimento" className="py-24 lg:py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-emerald-500" />
            Autoridade & Reconhecimento
            <span className="w-8 h-px bg-emerald-500" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-700 text-white leading-tight mb-4">
            Uma trajetória de{' '}
            <span className="text-emerald-400">conquistas</span>
          </h2>
          <p className="text-navy-300 text-lg leading-relaxed">
            Reconhecimento institucional, presença midiática e liderança jurídica
            que consolidam a posição do Dr. Marco como referência nacional.
          </p>
        </motion.div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 lg:grid-cols-6 gap-px bg-navy-700/50 rounded-2xl overflow-hidden mb-16"
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-navy-800/80 flex flex-col items-center justify-center py-7 px-4 text-center"
            >
              <div className="font-serif font-700 text-2xl lg:text-3xl text-white mb-1">{m.value}</div>
              <div className="text-navy-400 text-[11px] font-medium tracking-wide">{m.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Achievement cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              className="group bg-navy-800/60 border border-navy-700 hover:border-emerald-500/30 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-emerald-500/10 group-hover:bg-emerald-500/20 rounded-xl flex items-center justify-center shrink-0 transition-colors">
                  <item.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-emerald-500 text-[10px] font-semibold tracking-widest uppercase mb-1">
                    {item.category}
                  </div>
                  <h3 className="font-serif font-600 text-white text-[17px] leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-navy-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
