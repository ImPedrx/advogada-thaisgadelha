// Fontes: Instagram @gomesdecarvalhoadv (posts e linkme.bio), Facebook e Escavador da Dra. Thaís, Google Maps
export const FIRM = 'Gomes de Carvalho';
export const FIRM_FULL = 'Gomes de Carvalho · Sociedade de Advogadas';
// Confirmar com as sócias: registro da sociedade e OAB de cada uma são obrigatórios na publicidade (Provimento OAB 205/2021)
export const FIRM_OAB = 'Registro OAB/CE nº 0.000';
export const wa = (phone: string, text: string) => `https://wa.me/${phone}?text=` + encodeURIComponent(text);
export const INSTAGRAM = 'https://www.instagram.com/gomesdecarvalhoadv/';
export const ADDRESS = 'Av. Des. Moreira, 1.300 · 10º andar, Torre Sul · Aldeota · Fortaleza-CE';
export const HOURS = 'Segunda a sexta, das 9h às 17h';
export const MAPS = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Av. Desembargador Moreira, 1300 - Aldeota, Fortaleza - CE, 60170-002');
export const OAB_CHECK = 'https://cna.oab.org.br/';

export const lawyers = [
  {
    id: 'sefora', short: 'Dra. Séfora', name: 'Dra. Séfora Aylla Gomes', oab: 'OAB/CE nº 00.000',
    focus: 'Direito Público, Trabalhista e Cível', photo: '/img/sefora.jpg', pos: '68% 22%',
    phone: '5585997848055', phoneLabel: '(85) 99784-8055',
    bio: 'Sócia do escritório, pós-graduada em Direito e Processo do Trabalho, com atuação voltada ao Direito Público, Trabalhista e Cível.',
  },
  {
    id: 'thais', short: 'Dra. Thaís', name: 'Dra. Thaís Carvalho', oab: 'OAB/CE nº 00.000',
    focus: 'Direito Público e Cível', photo: '/img/thais-hero.jpg', pos: '50% 24%',
    phone: '5585999682068', phoneLabel: '(85) 99968-2068',
    bio: 'Sócia do escritório, especialista em Direito e Processo Civil e membro da Comissão de Estudos Constitucionais da OAB/CE. Advoga desde 2019.',
  },
] as const;
export type LawyerId = (typeof lawyers)[number]['id'];
export const lawyer = (id: LawyerId) => lawyers.find(l => l.id === id)!;
export const waTo = (id: LawyerId, text?: string) => {
  const l = lawyer(id);
  return wa(l.phone, text ?? `Olá! Gostaria de agendar uma consultoria com a ${l.name}.`);
};

// Áreas do post "Nossas áreas de atuação"; previdenciário e trabalhista não têm detalhe lá (itens tirados dos reels, confirmar)
export const areas = [
  { title: 'Direito Civil', points: ['Usucapião e regularização de imóveis', 'Testamento e inventário', 'Contratos', 'Danos morais e materiais'] },
  { title: 'Direito Administrativo', points: ['Concursos e cargos públicos', 'Defesa em execução fiscal', 'Procedimentos perante a Fazenda Pública', 'Recursos administrativos', 'Improbidade administrativa'] },
  { title: 'Direito Constitucional', points: ['Mandado de segurança: concurso, saúde, medicamentos e educação', 'Outras ações constitucionais', 'Constitucionalidade de leis e atos normativos'] },
  { title: 'Direito Trabalhista', points: ['Verbas rescisórias', 'Demissão discriminatória', 'Estabilidade da gestante', 'Estágio e vínculo de emprego'] },
  { title: 'Direito Previdenciário', points: ['Aposentadorias', 'Benefícios do INSS', 'Revisão de benefícios'] },
];

export const topics = ['inventário', 'usucapião', 'concurso público', 'mandado de segurança', 'direitos trabalhistas', 'previdenciário', 'contratos'];

// Passo a passo da consultoria on-line, como o escritório descreve no Instagram
export const steps = [
  { n: '01', title: 'Agendamento', text: 'Você escolhe a data e o horário mais convenientes e confirma a consultoria.' },
  { n: '02', title: 'Orientações por e-mail', text: 'Após o agendamento, você recebe um e-mail com o que precisa para a reunião.' },
  { n: '03', title: 'Consultoria por vídeo', text: 'Reunião por videoconferência, de 30 minutos a 1 hora, para esclarecer suas dúvidas com base na lei e na jurisprudência.' },
  { n: '04', title: 'Relatório técnico', text: 'Ao final, você recebe por e-mail, em até 48h, um relatório assinado com as orientações e os encaminhamentos jurídicos.' },
];

export const faq = [
  { q: 'Como funciona a consultoria on-line?', a: 'É uma reunião por videoconferência, de 30 minutos a 1 hora. Depois você recebe por e-mail, em até 48h, um relatório técnico assinado com as orientações para o seu caso.' },
  { q: 'Vocês atendem fora de Fortaleza?', a: 'Sim. O escritório fica em Fortaleza, mas a atuação é nacional, com consultorias por videoconferência.' },
  { q: 'Fui aprovado em concurso e não fui nomeado. O que fazer?', a: 'Depende da colocação, do edital e de como a administração agiu. Em alguns casos cabe mandado de segurança. Na consultoria analisamos o edital e os atos do concurso.' },
  { q: 'Alguém da família faleceu. Por onde começo o inventário?', a: 'Reúna a certidão de óbito, os documentos dos herdeiros e os documentos dos bens. Avaliamos se o inventário pode ser feito em cartório ou precisa ser judicial.' },
  { q: 'Fui demitido. Como saber se recebi tudo certo?', a: 'Traga o termo de rescisão, os contracheques e a carteira de trabalho. Conferimos as verbas e se houve alguma irregularidade na demissão.' },
  { q: 'Como são cobrados os honorários?', a: 'Os honorários são combinados por escrito antes do início do trabalho, observando a tabela da OAB-CE.' },
];

// "Qual é o seu caso?" — leva ao WhatsApp da sócia da área, com a mensagem já escrita, sem prometer resultado
export const situations: { label: string; title: string; text: string; to: LawyerId; msg: string }[] = [
  { label: 'Perdi um familiar e há bens', title: 'Inventário e partilha', text: 'O inventário organiza a divisão dos bens entre os herdeiros. Quando todos concordam e não há menores, pode ser feito em cartório.', to: 'thais', msg: 'Olá, Dra. Thaís! Preciso de orientação sobre inventário.' },
  { label: 'Meu imóvel não tem escritura', title: 'Usucapião e regularização', text: 'Contrato de gaveta, posse antiga ou documentação incompleta podem ser regularizados. O caminho depende da história do imóvel.', to: 'thais', msg: 'Olá, Dra. Thaís! Tenho um imóvel sem escritura e quero regularizar.' },
  { label: 'Problema no meu concurso', title: 'Concursos e cargos públicos', text: 'Nomeação, eliminação em etapa ou direitos no cargo: a análise começa pelo edital e pelos atos da administração.', to: 'sefora', msg: 'Olá, Dra. Séfora! Preciso de orientação sobre um concurso público.' },
  { label: 'Negaram meu remédio ou tratamento', title: 'Mandado de segurança na saúde', text: 'Quando o poder público nega medicamento ou tratamento, pode caber ação para garantir o direito à saúde. Laudos e a negativa por escrito são o ponto de partida.', to: 'thais', msg: 'Olá, Dra. Thaís! Tive um medicamento ou tratamento negado e preciso de orientação.' },
  { label: 'Fui demitido(a)', title: 'Direitos na demissão', text: 'Verbas rescisórias, estabilidade da gestante e demissão discriminatória são pontos a conferir. Traga o termo de rescisão e os contracheques.', to: 'sefora', msg: 'Olá, Dra. Séfora! Fui demitido(a) e quero conferir meus direitos.' },
  { label: 'Recebi uma execução fiscal', title: 'Defesa em execução fiscal', text: 'Cobranças de tributos e multas pelo poder público têm prazos curtos de defesa. Quanto antes a análise, mais opções.', to: 'sefora', msg: 'Olá, Dra. Séfora! Recebi uma execução fiscal e preciso de orientação.' },
];
