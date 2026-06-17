import { motion } from 'framer-motion'
import { Heart, Stethoscope, FileText, Briefcase, Scale, Shield } from 'lucide-react'

const areas = [
  {
    icon: Heart,
    title: 'Defesa do Paciente',
    description:
      'Proteção integral dos direitos do paciente frente a erros médicos, recusas indevidas de planos de saúde e negligências assistenciais.',
    highlight: true,
  },
  {
    icon: Stethoscope,
    title: 'Direito Médico',
    description:
      'Assessoria e defesa de profissionais e instituições de saúde em processos éticos, administrativos e judiciais.',
    highlight: false,
  },
  {
    icon: FileText,
    title: 'Direito Administrativo',
    description:
      'Atuação em processos administrativos, licitações, contratos públicos e defesa de servidores e agentes públicos.',
    highlight: false,
  },
  {
    icon: Briefcase,
    title: 'Consultoria Jurídica',
    description:
      'Consultoria estratégica preventiva para pessoas físicas, empresas e entidades do setor da saúde e administração pública.',
    highlight: false,
  },
  {
    icon: Scale,
    title: 'Direito Civil',
    description:
      'Resolução de conflitos civis, responsabilidade civil, contratos e demandas patrimoniais com foco em resultados concretos.',
    highlight: false,
  },
  {
    icon: Shield,
    title: 'Planos de Saúde',
    description:
      'Ações contra negativas abusivas de cobertura, reajustes ilegais e cancelamentos indevidos de planos de saúde.',
    highlight: false,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function PracticeAreas() {
  return (
    <section id="atuacao" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-emerald-600 text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-emerald-500" />
            Áreas de Atuação
            <span className="w-8 h-px bg-emerald-500" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-700 text-navy-900 leading-tight mb-4">
            Especialização que{' '}
            <span className="text-emerald-600">faz a diferença</span>
          </h2>
          <p className="text-navy-500 text-lg leading-relaxed">
            Cada área de atuação é exercida com profundo conhecimento técnico,
            postura estratégica e comprometimento total com os interesses do cliente.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {areas.map((area) => (
            <motion.div
              key={area.title}
              variants={cardVariants}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default ${
                area.highlight
                  ? 'bg-navy-900 border-navy-700 hover:border-emerald-500/50 hover:shadow-navy-900/20'
                  : 'bg-white border-navy-100 hover:border-navy-200 hover:shadow-navy-100/80'
              }`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                  area.highlight
                    ? 'bg-emerald-500/15 group-hover:bg-emerald-500/25'
                    : 'bg-navy-50 group-hover:bg-navy-100'
                }`}
              >
                <area.icon
                  className={`w-6 h-6 ${area.highlight ? 'text-emerald-400' : 'text-navy-700'}`}
                />
              </div>

              <h3
                className={`font-serif font-600 text-xl mb-3 ${
                  area.highlight ? 'text-white' : 'text-navy-900'
                }`}
              >
                {area.title}
              </h3>

              <p className={`text-sm leading-relaxed ${area.highlight ? 'text-navy-300' : 'text-navy-500'}`}>
                {area.description}
              </p>

              {/* Accent line */}
              <div
                className={`absolute bottom-0 left-8 right-8 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                  area.highlight ? 'bg-emerald-500' : 'bg-navy-800'
                }`}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
