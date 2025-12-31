import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PoliticaDePrivacidade() {

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
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-display font-display text-foreground">Política de Privacidade</h1>
            </div>

            <p className="text-sm text-muted-foreground mb-8">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <div className="prose prose-lg max-w-none space-y-12 text-foreground/80">

              {/* INFORMAÇÕES QUE COLETAMOS */}
              <section className="space-y-4">
                <h2 className="text-title font-display text-foreground mb-4">INFORMAÇÕES QUE COLETAMOS</h2>
                <div className="p-4 rounded-lg bg-muted/30 border border-border/50 text-sm">
                  <p className="font-medium text-foreground mb-2">Importante:</p>
                  <p>
                    Você não é obrigado a conceder informações através de nosso site. Entretanto, sem conceder certas informações quando estas forem solicitadas, talvez não lhe seja permitido o acesso a algumas funcionalidades que deseje utilizar ou então não poderemos entrar em contato para realizar o atendimento desejado.
                  </p>
                </div>
                <h3 className="text-lg font-semibold text-foreground mt-4">Fluxo de Coleta</h3>
                <p>
                  Nós poderemos coletar informações de identificação pessoal do usuário, tais como: Nome, email e telefone. A <strong>Plena Saúde</strong> irá utilizar essas informações para entrar em contato com o usuário. Tais dados poderão ser armazenados e utilizados e de acordo com a Lei 13.709/2018 – LGPD e art. 7º, inciso VIII da Lei 12.965/2014 (Marco Civil da Internet).
                </p>
              </section>

              {/* USO DA INFORMAÇÃO */}
              <section className="space-y-4">
                <h2 className="text-title font-display text-foreground mb-4">USO DA INFORMAÇÃO</h2>
                <p>
                  Sempre que você acessa e utiliza o nosso site, recebemos e armazenamos automaticamente, quando necessário ao desempenho do nosso trabalho, informações incluindo seu endereço IP e informações de cookies, que estão relacionadas com as informações pessoais que você fornece.
                </p>
                <p>
                  Somente iremos disponibilizar suas informações pessoais, sem aviso prévio, quando:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>(a) para fins de cumprimento de legislação, regulamentação, processo legal ou solicitação governamental aplicável;</li>
                  <li>(b) para fins de investigação, de possíveis violações, por parte do Poder Público;</li>
                  <li>(c) para fins de apuração de fraude ou por questões de segurança; ou</li>
                  <li>(d) para fins de proteção contra dano aos direitos, a propriedade ou a segurança do nosso site, nossos usuários ou o público em geral, conforme solicitado e/ou permitido por lei, em especial, a Lei 13.709/2018.</li>
                </ul>
                <p className="mt-4">
                  Armazenaremos estes dados em nosso sistema e os manteremos de forma segura até que seu cadastro seja excluído de nosso banco de dados, o que poderá ser solicitado pelo usuário a qualquer momento através de contato pelo e-mail <strong>contato@plenasaude.com.br</strong>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {[
                    "Confirmar acesso",
                    "Corrigir dados",
                    "Anonimização total",
                    "Revogação de consentimento"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded bg-muted/20 border border-border/30 text-sm">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                        0{idx + 1}
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              {/* COMPARTILHAMENTO */}
              <section className="space-y-4">
                <h2 className="text-title font-display text-foreground mb-4">COMPARTILHAMENTO</h2>
                <p>
                  Esclarecemos que não iremos repassar os dados coletados para terceiros estranhos às atividades da <strong>Plena Saúde</strong>, tampouco iremos compartilhar os seus dados sem uma justa finalidade e base legal.
                </p>
                <p className="font-semibold text-foreground">
                  Informamos que não iremos, em hipótese alguma, alugar ou vender seus dados.
                </p>
              </section>

              {/* PRAZOS DE RETENÇÃO */}
              <section className="space-y-4">
                <h2 className="text-title font-display text-foreground mb-4">PRAZOS DE RETENÇÃO</h2>
                <p>
                  Os dados coletados pela <strong>Plena Saúde</strong> serão mantidos até que você solicite outro tratamento, assim, com a sua exclusão, ou quando não forem mais necessários para a finalidade proposta, salvo se houver outro motivo para a sua manutenção, como o cumprimento de uma obrigação legal.
                </p>
              </section>

              {/* PROTOCOLO DE SEGURANÇA */}
              <section className="space-y-4">
                <h2 className="text-title font-display text-foreground mb-4">PROTOCOLO DE SEGURANÇA</h2>
                <p>
                  A <strong>Plena Saúde</strong> dispõe de medidas de segurança em âmbitos físicos, eletrônicos e administrativos, que protegem os dados pessoais e suas informações. Essas medidas de proteção nos auxiliam na prevenção de fraudes e acessos não autorizados às informações, bem como na manutenção da integridade dos dados.
                </p>
              </section>

              {/* DIREITOS & RESTRIÇÕES */}
              <section className="space-y-4">
                <h2 className="text-title font-display text-foreground mb-4">DIREITOS & RESTRIÇÕES</h2>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    Solicite informações sobre dados armazenados ou peça a correção imediata.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    Peça a exclusão total quando os dados não forem mais necessários.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    Saiba com quem, como e por que compartilhamos seus dados pessoais.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    Torne impossível determinar quem é o titular dos dados armazenados.
                  </li>
                </ul>
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-sm mt-4">
                  <p className="font-semibold text-red-500 mb-1">Atenção:</p>
                  <p className="text-muted-foreground">
                    Se você tiver menos de 12 anos de idade, não deverá fornecer os seus dados em nossa plataforma sem a supervisão e o consentimento específico de um responsável legal. Caso identificado o fornecimento de dados em desacordo, os mesmos serão imediatamente eliminados.
                  </p>
                </div>

                <div className="mt-8 p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
                    Data Protection Officer (DPO)
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-display font-semibold text-xl">Encarregado de Dados</p>
                    </div>
                    <a
                      href="mailto:contato@plenasaude.com.br"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                    >
                      Contatar Canal Oficial
                    </a>
                  </div>
                </div>
              </section>

              {/* RESUMO */}
              <section className="pt-8 border-t border-border">
                <h2 className="text-lg font-mono uppercase tracking-widest text-muted-foreground mb-4">RESUMO</h2>
                <blockquote className="text-xl font-display italic text-foreground/90 border-l-4 border-primary pl-4 py-2 my-6">
                  "Em resumo, respeitamos a sua privacidade. As informações armazenadas nos ajudam a compreender melhor seus interesses e entregar o melhor serviço técnico possível. Nosso esforço em atendê-los nunca cessa."
                </blockquote>
                <p className="text-center text-xs text-muted-foreground font-mono mt-8">
                  © 2026 PLENA SAÚDE | PROTOCOLO LGPD ATIVO
                </p>
              </section>

            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
