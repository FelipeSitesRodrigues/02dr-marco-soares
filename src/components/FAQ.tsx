import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Como funciona a primeira consulta?',
    a: 'A primeira consulta é gratuita e pode ser realizada de forma presencial em nosso escritório em Brasília ou por videoconferência. Nela, analisamos os fatos do seu caso, identificamos as possibilidades jurídicas e orientamos sobre os próximos passos sem qualquer compromisso.',
  },
  {
    q: 'O escritório atende em todo o Brasil?',
    a: 'Sim. Com sede em Brasília/DF, atendemos clientes em todo o território nacional, especialmente em casos de Direito Médico, Defesa do Paciente e Direito Administrativo Federal. As consultas remotas por videoconferência facilitam o acesso para clientes de outros estados.',
  },
  {
    q: 'Qual é o prazo para resposta após o contato inicial?',
    a: 'Nosso compromisso é responder todos os contatos em até 2 horas úteis. Para situações de urgência — como liminares para cobertura de tratamentos —, priorizamos o atendimento imediato no mesmo dia.',
  },
  {
    q: 'Quais são os honorários e formas de pagamento?',
    a: 'Os honorários são definidos de forma transparente na primeira consulta, após a análise do caso. Trabalhamos com diferentes modelos: honorários fixos, percentual sobre o resultado obtido ou honorários mensais para contratos de consultoria. Parcelamento disponível.',
  },
  {
    q: 'Meu plano de saúde negou um procedimento. O que devo fazer?',
    a: 'Você deve coletar a negativa por escrito, a prescrição médica e qualquer documentação relacionada ao tratamento. Em seguida, entre em contato conosco — atuamos com agilidade para obter, se necessário, tutelas de urgência que obrigue o plano a fornecer a cobertura dentro de 24 a 48 horas.',
  },
  {
    q: 'Sofri um erro médico. Tenho como buscar reparação?',
    a: 'Sim. O Direito brasileiro prevê responsabilidade civil e, em alguns casos, criminal para erros médicos. Analisamos cuidadosamente prontuários, laudos e toda a documentação para identificar se houve negligência, imprudência ou imperícia. Se confirmado, buscamos a reparação integral dos danos causados.',
  },
  {
    q: 'Quanto tempo costuma durar um processo judicial?',
    a: 'O tempo varia conforme o tipo de ação e a complexidade do caso. Tutelas antecipadas (como autorizações de tratamento) podem ser obtidas em dias. Processos de indenização por dano moral e material costumam durar de 1 a 4 anos, dependendo da comarca e da instância. Mantemos o cliente informado em todo o percurso.',
  },
  {
    q: 'O escritório também atende médicos e instituições de saúde?',
    a: 'Sim. Atuamos tanto na defesa de pacientes quanto de profissionais e instituições da saúde. Oferecemos consultoria preventiva, assessoria em contratos, defesa em processos éticos no CRM e CFM, além de suporte em Direito Administrativo Sanitário para hospitais, clínicas e operadoras de saúde.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-navy-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="font-medium text-navy-800 group-hover:text-navy-900 text-[15px] leading-snug transition-colors">
          {q}
        </span>
        <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-navy-100 flex items-center justify-center transition-colors group-hover:bg-emerald-100">
          {open
            ? <Minus className="w-3.5 h-3.5 text-emerald-600" />
            : <Plus className="w-3.5 h-3.5 text-navy-600 group-hover:text-emerald-600 transition-colors" />
          }
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-navy-500 text-sm leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-navy-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 text-emerald-600 text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-emerald-500" />
            Perguntas Frequentes
            <span className="w-8 h-px bg-emerald-500" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-700 text-navy-900 leading-tight mb-4">
            Tire suas{' '}
            <span className="text-emerald-600">dúvidas</span>
          </h2>
          <p className="text-navy-500 text-lg leading-relaxed">
            As perguntas mais comuns que recebemos — respondidas com clareza
            e transparência, como em todo o nosso atendimento.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl border border-navy-100 px-8 py-2"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
