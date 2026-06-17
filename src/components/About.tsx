import { motion } from 'framer-motion'
import { CheckCircle2, GraduationCap, Award, Users, MessageCircle } from 'lucide-react'
import palestraImg from '../assets/marco-palestra.jpg'

const WA_LINK = 'https://wa.me/5500000000000?text=Olá%2C%20Dr.%20Marco!%20Gostaria%20de%20agendar%20uma%20consulta.'

const credentials = [
  { icon: GraduationCap, text: 'Graduado em Direito pela UnB — Universidade de Brasília' },
  { icon: Award, text: 'Pós-graduado em Direito Médico e Bioética' },
  { icon: Award, text: 'Especialista em Direito Administrativo Sanitário' },
  { icon: Users, text: 'Membro da Diretoria da OAB/DF — Triênio 2022–2025' },
  { icon: Users, text: 'Presidente da Comissão de Saúde da OAB/DF' },
]

const differentials = [
  'Atendimento 100% personalizado — nenhum caso é tratado como padrão',
  'Estratégia jurídica definida antes de qualquer ação',
  'Comunicação clara e constante durante todo o processo',
  'Visão humanizada e profundo respeito ao cliente',
  'Atuação em casos de alta complexidade técnica',
  'Presença ativa em eventos e fóruns jurídicos nacionais',
]

export default function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-navy-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative">
              {/* Background accent */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-navy-900/8 rounded-3xl" />
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-emerald-500/20 rounded-3xl" />

              <img
                src={palestraImg}
                alt="Dr. Marco Soares — Advogado"
                className="relative z-10 w-full max-w-md mx-auto lg:max-w-full rounded-3xl object-cover object-top shadow-2xl"
                style={{ maxHeight: '560px', objectPosition: 'center top' }}
              />

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -right-4 lg:-right-8 top-12 bg-white rounded-2xl shadow-xl p-5 max-w-[180px] z-20"
              >
                <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center mb-3">
                  <Award className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="font-serif font-700 text-navy-900 text-2xl leading-none mb-1">15+</div>
                <div className="text-navy-500 text-xs leading-snug">Anos de atuação jurídica de excelência</div>
              </motion.div>

              {/* Bottom card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-6 left-8 bg-navy-900 rounded-2xl shadow-xl p-5 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-serif font-700 text-white text-xl leading-none">1.200+</div>
                    <div className="text-navy-300 text-[11px] mt-0.5">Clientes atendidos</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 text-emerald-600 text-xs font-semibold tracking-widest uppercase mb-5">
              <span className="w-8 h-px bg-emerald-500" />
              Sobre o Advogado
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl font-700 text-navy-900 leading-tight mb-6">
              Dr. Marco Soares
            </h2>

            <div className="space-y-4 text-navy-600 leading-relaxed mb-8">
              <p>
                Com mais de 15 anos de trajetória jurídica, o Dr. Marco Soares construiu
                uma reputação sólida baseada em dedicação, ética e resultados concretos.
                Sua formação técnica de alto nível, aliada à sensibilidade humana para
                compreender cada caso em sua complexidade real, o torna um defensor
                singular no campo jurídico brasileiro.
              </p>
              <p>
                Atuando com foco em Defesa do Paciente, Direito Médico e Direito
                Administrativo, o Dr. Marco construiu um método próprio de trabalho:
                análise estratégica profunda antes de qualquer ação, comunicação
                transparente e acompanhamento próximo durante toda a jornada jurídica
                do cliente.
              </p>
              <p>
                Além de sua atuação no contencioso, o Dr. Marco é reconhecido
                institucionalmente como membro ativo da Diretoria da OAB/DF e
                Presidente da Comissão de Saúde, demonstrando seu compromisso com
                a excelência da advocacia e a proteção dos direitos dos cidadãos.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-3 mb-8">
              {credentials.map((cred) => (
                <div key={cred.text} className="flex items-start gap-3">
                  <cred.icon className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="text-navy-700 text-sm leading-snug">{cred.text}</span>
                </div>
              ))}
            </div>

            {/* Differentials */}
            <div className="bg-white rounded-2xl border border-navy-100 p-6 mb-8">
              <h3 className="font-serif font-600 text-navy-900 text-lg mb-4">
                Diferenciais do atendimento
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {differentials.map((d) => (
                  <div key={d} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-navy-600 text-sm leading-snug">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-px text-[14px]"
            >
              <MessageCircle className="w-4 h-4" />
              Agendar consulta
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
