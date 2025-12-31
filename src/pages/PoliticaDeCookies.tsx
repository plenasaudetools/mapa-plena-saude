import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Cookie, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PoliticaDeCookies() {

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
                        <div className="flex flex-wrap gap-4 mb-8">
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <ArrowLeft size={16} />
                                Voltar ao início
                            </Link>
                            <Link
                                to="/politica-de-privacidade"
                                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors ml-auto"
                            >
                                Ver Política de Privacidade
                            </Link>
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-primary/15 border border-primary/30">
                                <Cookie className="w-6 h-6 text-primary" />
                            </div>
                            <h1 className="text-display font-display text-foreground">Política de Cookies</h1>
                        </div>

                        <p className="text-sm text-muted-foreground mb-8">
                            Versão de: {new Date().toLocaleDateString('pt-BR')}
                        </p>

                        <div className="prose prose-lg max-w-none space-y-12 text-foreground/80">

                            <section className="space-y-4">
                                <h2 className="text-title font-display text-foreground mb-4">UTILIZAÇÃO DE COOKIES E TECNOLOGIA DE MONITORAMENTO</h2>
                                <p>
                                    Podemos utilizar certas tecnologias de monitoramento para coletar as informações das atividades realizadas em nosso site de forma automatizada.
                                </p>
                                <p>
                                    As informações coletadas por meio de tais tecnologias são utilizadas para realizar métricas de performance do site, identificar problemas no uso, captar o comportamento dos Usuários de forma geral e coletar dados de impressão de conteúdo.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-title font-display text-foreground mb-4">TECNOLOGIAS UTILIZADAS</h2>

                                <div className="space-y-6">
                                    <div className="p-6 rounded-lg bg-muted/30 border border-border/50">
                                        <h3 className="text-lg font-semibold text-foreground mb-2">Cookies</h3>
                                        <p>
                                            Cookie é um pequeno arquivo adicionado ao dispositivo do Usuário para fornecer uma experiência personalizada de acesso à plataforma. Os cookies ajudam a analisar o tráfego de internet e nos permite saber quando o Usuário visitou um site específico. Um cookie não dá acesso a um computador ou revela informações além dos dados que o usuário escolhe compartilhar conosco.
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-lg bg-muted/30 border border-border/50">
                                        <h3 className="text-lg font-semibold text-foreground mb-2">Pixels</h3>
                                        <p>
                                            Pixels são partes do código JavaScript instalados adicionados em nosso website ou no corpo de um e-mail, com a finalidade de rastrear coletar informações sobre as atividades dos usuários, permitindo a identificação dos seus padrões de acesso, navegação, interesse e compras de produtos, e otimizando utilizados para otimizar o direcionamento de conteúdo.
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-lg bg-muted/30 border border-border/50">
                                        <h3 className="text-lg font-semibold text-foreground mb-2">Analytics</h3>
                                        <p>
                                            Essas ferramentas podem coletar informações sobre a forma como os Usuários visitam nosso site, quais páginas eles visitam e quando visitam tais páginas, outros sites que foram visitados antes, entre outras.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-title font-display text-foreground mb-4">COMO REJEITAR COOKIES</h2>
                                <p>
                                    É possível que você gerencie preferências de Cookies e outras tecnologias semelhantes a partir da configuração de seu navegador, recusando ou excluindo alguns deles. No entanto, essa opção poderá comprometer os Serviços da <strong>Plena Saúde</strong> ou impedir o funcionamento de determinadas funcionalidades.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-title font-display text-foreground mb-4">Instruções por Navegador</h2>
                                <p className="mb-4">
                                    Clique em 'Ajuda', nas configurações do seu navegador, para saber como geri-los. Abaixo você encontra detalhes específicos para desativar cookies nos navegadores mais populares:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <a
                                        href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&oco=1&hl=pt-BR"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
                                    >
                                        <span className="font-medium group-hover:text-primary transition-colors">Google Chrome</span>
                                    </a>
                                    <a
                                        href="https://support.mozilla.org/pt-BR/kb/gerencie-configuracoes-de-armazenamento-local-de-s"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
                                    >
                                        <span className="font-medium group-hover:text-primary transition-colors">Mozilla Firefox</span>
                                    </a>
                                    <a
                                        href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
                                    >
                                        <span className="font-medium group-hover:text-primary transition-colors">Safari</span>
                                    </a>
                                    <a
                                        href="https://support.microsoft.com/pt-br/windows/excluir-e-gerenciar-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
                                    >
                                        <span className="font-medium group-hover:text-primary transition-colors">Internet Explorer</span>
                                    </a>
                                    <a
                                        href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
                                    >
                                        <span className="font-medium group-hover:text-primary transition-colors">Microsoft Edge</span>
                                    </a>
                                    <a
                                        href="https://help.opera.com/en/latest/web-preferences/#cookies"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
                                    >
                                        <span className="font-medium group-hover:text-primary transition-colors">Opera</span>
                                    </a>
                                </div>
                            </section>

                            <section className="pt-8 border-t border-border">
                                <div className="bg-muted/20 p-6 rounded-lg text-center">
                                    <p className="text-muted-foreground mb-2">Qualquer desconformidade, informe-nos:</p>
                                    <a href="mailto:contato@plenasaude.com.br" className="text-primary font-medium hover:underline">
                                        contato@plenasaude.com.br
                                    </a>
                                </div>
                                <p className="text-center text-xs text-muted-foreground font-mono mt-8">
                                    © 2026 PLENA SAÚDE | PROTOCOLO DE COOKIES ATIVO
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
