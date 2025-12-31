import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container-clinical max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft size={16} />
              Voltar ao início
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/15 border border-primary/30">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-display font-display text-foreground">Termos de Uso</h1>
            </div>

            <p className="text-sm text-muted-foreground mb-8">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <div className="prose prose-lg max-w-none space-y-8 text-foreground/80">
              <section className="space-y-4">
                <h2 className="text-title font-display text-foreground mb-4">1. Aceitação dos Termos</h2>
                <p>
                  Ao acessar e utilizar o site da Plena Saúde, você concorda com estes Termos de Uso.
                  Se você não concordar com qualquer parte destes termos, solicitamos que não utilize nossos serviços.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-title font-display text-foreground mb-4">2. Descrição dos Serviços</h2>
                <p>
                  A Plena Saúde oferece serviços de saúde integrativa através do Método MAPA, incluindo:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Avaliação clínica personalizada</li>
                  <li>Acompanhamento de saúde integrado</li>
                  <li>Orientações e protocolos individualizados</li>
                  <li>Conteúdo informativo sobre saúde</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-title font-display text-foreground mb-4">3. Uso do Site</h2>
                <p>Você concorda em:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fornecer informações verdadeiras e atualizadas</li>
                  <li>Não utilizar o site para fins ilegais ou não autorizados</li>
                  <li>Não tentar acessar áreas restritas do sistema</li>
                  <li>Não reproduzir ou distribuir conteúdo sem autorização</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-title font-display text-foreground mb-4">4. Conteúdo Informativo</h2>
                <p>
                  As informações disponibilizadas neste site têm caráter informativo e educacional.
                  Elas não substituem a consulta médica profissional, diagnóstico ou tratamento.
                </p>
                <p>
                  Sempre consulte um profissional de saúde qualificado para questões específicas sobre sua condição.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-title font-display text-foreground mb-4">5. Agendamentos</h2>
                <p>
                  Os agendamentos realizados através do WhatsApp estão sujeitos à disponibilidade de horários.
                  Cancelamentos devem ser comunicados com antecedência mínima de 24 horas.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-title font-display text-foreground mb-4">6. Propriedade Intelectual</h2>
                <p>
                  Todo o conteúdo deste site, incluindo textos, imagens, logotipos, design e metodologias,
                  é propriedade da Plena Saúde e está protegido por leis de direitos autorais.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-title font-display text-foreground mb-4">7. Limitação de Responsabilidade</h2>
                <p>
                  A Plena Saúde não se responsabiliza por:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Decisões tomadas com base apenas nas informações do site</li>
                  <li>Indisponibilidade temporária do site por motivos técnicos</li>
                  <li>Danos decorrentes do uso indevido das informações</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-title font-display text-foreground mb-4">8. Modificações</h2>
                <p>
                  Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento.
                  As alterações entram em vigor imediatamente após sua publicação no site.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-title font-display text-foreground mb-4">9. Legislação Aplicável</h2>
                <p>
                  Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
                  Fica eleito o foro da Comarca de Guarujá/SP para dirimir quaisquer controvérsias.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-title font-display text-foreground mb-4">10. Contato</h2>
                <div className="bg-muted/20 p-6 rounded-lg text-center">
                  <p className="text-muted-foreground mb-2">Para dúvidas sobre estes Termos de Uso, entre em contato conosco:</p>
                  <a href="mailto:contato@plenasaude.com.br" className="text-primary font-medium hover:underline">
                    contato@plenasaude.com.br
                  </a>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
