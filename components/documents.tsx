"use client";

import { motion } from "framer-motion";
import {
  FileCheck,
  Landmark,
  Receipt,
  Percent,
  HelpCircle,
  UserCheck,
  CheckCircle2,
  FileText,
} from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tabs = [
  { value: "alvara", label: "Alvará", icon: Landmark },
  { value: "iptu", label: "IPTU", icon: Receipt },
  { value: "cnd", label: "CND", icon: Percent },
  { value: "inscricao", label: "Inscrição Municipal", icon: HelpCircle },
  { value: "permissionario", label: "Permissionário", icon: UserCheck },
  { value: "nota-fiscal", label: "NFS-e", icon: FileText },
];

function Item({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

export function Documents() {
  return (
    <section id="documentos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary mb-4">
            <FileCheck className="w-7 h-7 text-secondary-foreground" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Documentos
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Orientações oficiais do <strong>Setor de Tributos</strong> para
            regularização cadastral, emissão de documentos e cumprimento das
            obrigações municipais.
          </p>
        </motion.div>

        <Tabs defaultValue="alvara">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-10">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-2 text-sm"
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value="alvara">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">
                  Alvará de Funcionamento
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-8 text-sm text-muted-foreground">
                <div className="space-y-2">
                  <p>
                    Documento obrigatório que autoriza o exercício regular de
                    atividades comerciais, industriais ou de prestação de
                    serviços no município.
                  </p>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">
                    Documentos necessários
                  </h3>

                  <ul className="space-y-3">
                    <Item>
                      <strong>CNPJ – Cadastro Nacional da Pessoa Jurídica:</strong>{" "}
                      cadastro ativo junto à Receita Federal.
                    </Item>

                    <Item>
                      <strong>Medição da área do estabelecimento (m²):</strong>{" "}
                      metragem total utilizada para a atividade.
                    </Item>

                    <Item>
                      <strong>Dias e horário de funcionamento:</strong>{" "}
                      definição dos dias da semana e horários de abertura.
                    </Item>

                    <Item>
                      <strong>
                        AVCB – Auto de Vistoria do Corpo de Bombeiros:
                      </strong>{" "}
                      exigido conforme o tipo de atividade.
                    </Item>

                    <Item>
                      <strong>Licença de Operação – Meio Ambiente:</strong>{" "}
                      para atividades com potencial impacto ambiental.
                    </Item>

                    <Item>
                      <strong>Licença Sanitária:</strong> obrigatória para
                      atividades sujeitas à vigilância sanitária.
                    </Item>
                  </ul>
                </div>

                <Separator />

                <Accordion type="single" collapsible>
                  <AccordionItem value="alvara-observacoes">
                    <AccordionTrigger>
                      Observações importantes
                    </AccordionTrigger>
                    <AccordionContent className="space-y-2">
                      <p>
                        • A exigência de licenças adicionais depende da atividade
                        exercida.
                      </p>
                      <p>
                        • Caso alguma licença não seja exigida, poderá ser
                        solicitada certidão ou declaração de isenção.
                      </p>
                      <p>
                        • O funcionamento sem alvará válido está sujeito à
                        fiscalização e penalidades previstas na legislação
                        municipal.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="iptu">
            <Card>
              <CardHeader>
                <CardTitle>Imposto Predial e Territorial Urbano (IPTU)</CardTitle>
              </CardHeader>

              <CardContent className="space-y-6 text-sm text-muted-foreground">
                <p>
                  O IPTU é o Imposto Predial e Territorial Urbano, incidente sobre imóveis
                  localizados em zona urbana. Os serviços abaixo permitem a atualização
                  cadastral, regularização de débitos, solicitação de isenções e outros
                  procedimentos relacionados ao imóvel.
                </p>

                <Separator />

                <div className="space-y-2">
                  <h3 className="font-medium text-foreground">
                    Dados do Cadastro Imobiliário
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Inclusão do imóvel no Cadastro Imobiliário</li>
                    <li>Alteração de titularidade</li>
                    <li>Alteração do endereço de correspondência</li>
                    <li>Alteração do endereço do imóvel</li>
                    <li>Revisão de dados cadastrais</li>
                    <li>Desmembramento ou remembramento de IPTU</li>
                    <li>Inclusão de condomínio</li>
                  </ul>
                </div>

                <Separator />

                <Accordion type="single" collapsible>
                  <AccordionItem value="serviços-iptu">
                    <AccordionTrigger>
                      Outros serviços
                    </AccordionTrigger>
                    <AccordionContent className="space-y-2">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Pagamento de IPTU (2ª via)</li>
                        <li>Matrícula do IPTU</li>
                        <li>Parcelamento do IPTU</li>
                        <li>Consulta de dados cadastrais do imóvel (BCI)</li>
                        <li>Desvinculação de IPTU do Cadastro Mercantil</li>
                        <li>Declaração de inexistência de cadastro para CPF</li>
                        <li>Restituição de IPTU</li>
                        <li>Regularização de tributos recolhidos – IPTU</li>
                        <li>Cancelamento de débitos do IPTU</li>
                        <li>Certidão narrativa</li>
                        <li>Prescrição de IPTU</li>
                        <li>Compensação de débitos</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Separator />

                <Accordion type="single" collapsible>
                  <AccordionItem value="isenção-iptu">
                    <AccordionTrigger>
                      Isenção de IPTU
                    </AccordionTrigger>
                    <AccordionContent className="space-y-2">
                      <div className="space-y-3">

                        <p>
                          <strong>O que é?</strong><br />
                          Pedido de isenção do pagamento do IPTU, concedido nos casos previstos
                          em lei municipal ou por decisão judicial.
                        </p>

                        <h4 className="font-medium text-foreground">
                          Documentação necessária
                        </h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Acesso restrito pela Plataforma de Serviços (atendimento virtual)</li>
                          <li>RG e CPF (pessoa física)</li>
                          <li>
                            Procuração reconhecida em cartório, RG e CPF (se procurador)
                          </li>
                          <li>
                            RG, CPF e Certidão de Casamento ou União Estável (se cônjuge)
                          </li>
                          <li>
                            RG, CPF e documento que comprove representação legal (quando aplicável)
                          </li>
                          <li>
                            Comprovante de residência do imóvel ou do endereço de correspondência
                            (água, energia, telefone fixo ou TV por assinatura)
                          </li>
                          <li>Documentos que comprovem a condição para isenção</li>
                          <li>
                            Taxa de expediente: <strong>10% da UFM</strong> (atendimento presencial)
                          </li>
                        </ul>

                        <p className="text-xs">
                          <strong>Obs.:</strong> Documentos complementares poderão ser solicitados,
                          conforme análise do setor responsável.
                        </p>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <h3 className="font-medium text-foreground">Como solicitar</h3>

                        <p>
                          <strong>Atendimento presencial:</strong><br />
                          Realizado por meio do serviço de protocolo da Prefeitura.
                        </p>

                        <p>
                          <strong>Atendimento virtual:</strong>
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Acessar a Plataforma de Serviços – Acesso Restrito</li>
                          <li>No primeiro acesso, realizar o cadastro de login e senha</li>
                          <li>
                            Em caso de pendência, o sistema enviará orientações por e-mail
                          </li>
                          <li>
                            O DAM será disponibilizado na plataforma para emissão, quando houver
                          </li>
                        </ul>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <h3 className="font-medium text-foreground">
                          Acompanhamento do andamento e prazo
                        </h3>
                        <p>
                          O andamento do processo pode ser acompanhado diretamente pelo
                          Acesso Restrito na Plataforma de Serviços.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium text-foreground">
                          Unidade responsável
                        </h3>
                        <p>SEMPLAF</p>
                      </div>

                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>


          <TabsContent value="cnd">
            <Card>
              <CardHeader>
                <CardTitle>Certidões – CND</CardTitle>
              </CardHeader>

              <CardContent className="space-y-6 text-sm text-muted-foreground">
                {/* DESCRIÇÃO */}
                <p>
                  As certidões têm como finalidade comprovar a regularidade fiscal do
                  contribuinte junto ao Município. Elas podem ser exigidas para
                  licitações, contratos, financiamentos, transferências e outros atos
                  administrativos.
                </p>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium text-foreground">
                    Certidão Negativa de Débitos (CND)
                  </h3>

                  <p>
                    Documento que comprova a inexistência de débitos tributários municipais
                    em nome do contribuinte.
                  </p>

                  <p>
                    <strong>Emissão:</strong><br />
                    A CND pode ser emitida diretamente pelo portal de serviços do município.
                  </p>

                  <a
                    href="http://servicosweb.pmpf.am.gov.br/servicosweb/home.jsf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-primary font-medium underline"
                  >
                    Emitir Certidão Negativa de Débitos (CND)
                  </a>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="font-medium text-foreground">
                    Certidão Positiva com Efeito de Negativa
                  </h3>
                  <p>
                    Emitida quando existem débitos, mas estes se encontram parcelados,
                    suspensos ou com exigibilidade suspensa, produzindo os mesmos efeitos
                    legais da Certidão Negativa.
                  </p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium text-foreground">
                    Outras certidões disponíveis
                  </h3>

                  <ul className="list-disc pl-5 space-y-1">
                    <li>Certidão de pagamento de Alvará (2ª via)</li>
                    <li>Certidão de pagamento de IPTU (2ª via)</li>
                    <li>Certidão de pagamento de Tributos (2ª via)</li>
                    <li>Certidão de pagamento de ISS (2ª via)</li>
                  </ul>
                </div>

                <Separator />

                {/* RESTRIÇÕES */}
                <div className="space-y-3">
                  <h3 className="font-medium text-foreground">
                    Restrições relacionadas à CND
                  </h3>

                  <ul className="list-disc pl-5 space-y-1">
                    <li>Relatório de restrição para emissão de CND</li>
                    <li>Restrição de CND – Simples Nacional</li>
                  </ul>

                  <p className="text-xs">
                    <strong>Importante:</strong> A existência de débitos ou pendências pode
                    impedir a emissão da Certidão Negativa. Regularize sua situação junto
                    ao setor de tributos para liberação do documento.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inscricao">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  Inscrição Municipal
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                  Cadastro do contribuinte junto ao Setor de Tributos para fins
                  fiscais e controle municipal.
                </p>

                <Separator />

                <p>
                  A atualização cadastral é obrigatória sempre que houver
                  alteração de endereço, atividade ou responsável legal.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="permissionario">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Permissionário</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                  Pessoa autorizada pelo município a exercer atividade em espaço
                  público mediante permissão administrativa.
                </p>

                <h4 className="font-semibold text-foreground">
                  Obrigações principais
                </h4>

                <ul className="list-disc pl-5 space-y-1">
                  <li>Manter cadastro atualizado</li>
                  <li>Quitar taxas e tributos municipais</li>
                  <li>Cumprir as normas e prazos estabelecidos</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="nota-fiscal">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Nota Fiscal Eletrônica de Serviços (NFS-e)
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6 text-sm text-muted-foreground">
                {/* AVISO IMPORTANTE */}
                <div className="border border-destructive/40 bg-destructive/10 rounded-lg p-4">
                  <h3 className="font-semibold text-destructive mb-2">
                    ⚠️ AVISO MUITO IMPORTANTE
                  </h3>
                  <p className="text-foreground">
                    <strong>NÃO EMITIMOS MAIS NFS-e.</strong>
                  </p>
                  <p>
                    A emissão da Nota Fiscal de Serviços Eletrônica deve ser realizada
                    exclusivamente pelo <strong>Emissor Nacional</strong>, no site oficial:
                  </p>
                  <a
                    href="https://www.nfse.gov.br/EmissorNacional/Login?ReturnUrl=%2fEmissorNacional"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 font-medium text-primary underline"
                  >
                    👉 https://www.nfse.gov.br/EmissorNacional
                  </a>
                </div>

                <Separator />

                {/* CONCEITO */}
                <div className="space-y-2">
                  <h3 className="font-medium text-foreground">
                    Conceito da Nota Fiscal Eletrônica de Serviço
                  </h3>
                  <p>
                    A NFS-e é um documento de existência exclusivamente digital, utilizado
                    para registrar as operações de prestação de serviços sujeitas ao
                    Imposto Sobre Serviços de Qualquer Natureza (ISSQN).
                  </p>
                  <p>
                    Ela é gerada e armazenada eletronicamente por meio de sistema
                    disponibilizado pelo poder público, sendo de inteira responsabilidade
                    do prestador do serviço a correta emissão do documento.
                  </p>
                </div>

                {/* OBJETIVO */}
                <div className="space-y-2">
                  <h3 className="font-medium text-foreground">
                    Objetivo da NFS-e
                  </h3>
                  <p>
                    A Nota Fiscal de Serviços Eletrônica foi criada para substituir a
                    emissão de documentos fiscais em papel, promovendo a padronização e a
                    modernização das obrigações tributárias em âmbito nacional.
                  </p>
                </div>

                {/* BENEFÍCIOS */}
                <div className="space-y-4">
                  <h3 className="font-medium text-foreground">Benefícios</h3>

                  <div>
                    <h4 className="font-medium text-foreground">Para a sociedade</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Redução do uso de papel</li>
                      <li>Preservação do meio ambiente</li>
                      <li>Facilidade na consulta de documentos fiscais</li>
                      <li>Incentivo ao comércio eletrônico</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground">Para as empresas</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Redução de custos com impressão e armazenamento</li>
                      <li>Dispensa de AIDF e simplificação de obrigações acessórias</li>
                      <li>Compatibilidade com o SPED</li>
                      <li>Maior competitividade e estímulo ao e-business</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground">
                      Para a administração tributária
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Combate a fraudes fiscais</li>
                      <li>Maior controle e eficiência na fiscalização</li>
                      <li>Integração com o Sistema Público de Escrituração Digital</li>
                      <li>Melhoria na qualidade das informações tributárias</li>
                    </ul>
                  </div>
                </div>

                <Separator />

                {/* PÚBLICO ALVO */}
                <div className="space-y-2">
                  <h3 className="font-medium text-foreground">Público-alvo</h3>
                  <p>
                    A NFS-e destina-se aos prestadores e tomadores de serviços sujeitos ao
                    ISSQN, permitindo:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Emissão de notas fiscais de serviços</li>
                    <li>Consulta e impressão de documentos fiscais</li>
                    <li>Geração de guias de recolhimento do ISS</li>
                  </ul>
                </div>

                {/* COMO PARTICIPAR */}
                <div className="space-y-2">
                  <h3 className="font-medium text-foreground">Como participar</h3>

                  <p>
                    <strong>Prestadores de serviços convencionais:</strong> devem realizar
                    o credenciamento junto ao sistema, informando corretamente seus dados
                    e documentos para análise e liberação.
                  </p>

                  <p>
                    <strong>Prestadores de serviços avulsos:</strong> devem efetuar o
                    credenciamento específico para nota fiscal avulsa, sujeito à análise
                    do órgão responsável.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
