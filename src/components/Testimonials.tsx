import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ana Paula Ferreira',
    role: 'Paciente — Recusa de Plano de Saúde',
    text: 'O Dr. Marco foi fundamental para garantir meu direito ao tratamento oncológico que o plano havia negado. Em poucos dias, obtivemos uma liminar e o tratamento foi iniciado. Profissional incomparável.',
    rating: 5,
  },
  {
    name: 'Carlos Eduardo Mendes',
    role: 'Médico — Processo Ético CRM',
    text: 'Precisei de defesa em um processo ético no CRM e o Dr. Marco me apresentou uma estratégia técnica impecável. Fui absolvido e pude retornar ao exercício da medicina com minha reputação preservada.',
    rating: 5,
  },
  {
    name: 'Família Rodrigues',
    role: 'Ação por Erro Médico',
    text: 'Após perdermos um ente querido por negligência hospitalar, o Dr. Marco nos orientou com humanidade e firmeza. A reparação obtida não nos devolve a perda, mas foi feita justiça — e isso importa muito.',
    rating: 5,
  },
  {
    name: 'Roberto Alves',
    role: 'Servidor Público — Processo Administrativo',
    text: 'Passei por um processo administrativo que ameaçava minha carreira de 20 anos. O Dr. Marco desmontou a acusação ponto a ponto. Fui absolvido. Um advogado excepcional em Direito Administrativo.',
    rating: 5,
  },
  {
    name: 'Dra. Fernanda Lima',
    role: 'Clínica de Especialidades — Consultoria',
    text: 'A consultoria jurídica do Dr. Marco transformou nossa gestão de contratos e compliance. Temos muito mais segurança jurídica hoje. Recomendo a todos os gestores de saúde.',
    rating: 5,
  },
  {
    name: 'Marcos Vinícius Costa',
    role: 'Paciente — Cobertura de Medicamento',
    text: 'Meu plano negou o fornecimento de um medicamento de alto custo. O Dr. Marco ingressou com ação e conseguimos a tutela antecipada em 48 horas. Atendimento ágil, preciso e humano.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-white">
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
            Depoimentos
            <span className="w-8 h-px bg-emerald-500" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-700 text-navy-900 leading-tight mb-4">
            O que dizem nossos{' '}
            <span className="text-emerald-600">clientes</span>
          </h2>
          <p className="text-navy-500 text-lg leading-relaxed">
            Histórias reais de pessoas que tiveram seus direitos defendidos
            com excelência, estratégia e profundo comprometimento humano.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              className="bg-navy-50 border border-navy-100 hover:border-navy-200 rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-100"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-navy-200" />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gold-500 fill-gold-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-navy-600 text-sm leading-relaxed flex-1 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-navy-100">
                <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-white font-serif font-700 text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-navy-900 text-sm">{t.name}</div>
                  <div className="text-navy-500 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
