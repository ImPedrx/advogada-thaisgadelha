// Fontes: perfil do Google Maps (planilha de leads), página do Facebook (facebook.com/thaisgadellha) e currículo no Escavador
export const NAME = 'Thaís Gadelha';
export const FULL_NAME = 'Thais Gadelha Carvalho';
// Confirmar com a cliente: número da OAB é obrigatório na publicidade (Provimento OAB 205/2021)
export const OAB = 'OAB/CE nº 00.000';
export const PHONE = '(85) 99968-2068';
export const wa = (text: string) => 'https://wa.me/5585999682068?text=' + encodeURIComponent(text);
export const WHATSAPP = wa('Olá, Dra. Thaís! Vim pelo site e gostaria de agendar uma consultoria.');
export const FACEBOOK = 'https://www.facebook.com/thaisgadellha/';
export const ADDRESS = 'Av. Des. Moreira, 1300 · Aldeota · Fortaleza-CE';
export const HOURS = 'Segunda a sexta, das 9h às 17h';
export const MAPS = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Av. Des. Moreira, 1300 - Aldeota, Fortaleza - CE, 60170-002');
export const OAB_CHECK = 'https://cna.oab.org.br/';

// Áreas que ela divulga no Facebook ("Direito sucessório, regularização de imóveis e estratégias processuais judiciais"; "Direito Público e Cível")
export const areas = [
  { title: 'Sucessões e inventário', text: 'Orientação para dividir os bens de quem faleceu e planejar a herança em vida, de forma organizada.', points: ['Inventário judicial e em cartório', 'Partilha de bens', 'Testamento e planejamento sucessório'] },
  { title: 'Regularização de imóveis', text: 'Caminhos para colocar o imóvel em dia no cartório e garantir a sua segurança jurídica.', points: ['Imóvel sem escritura', 'Usucapião', 'Direito real de laje'] },
  { title: 'Estratégia processual', text: 'Análise de processos cíveis em andamento e definição do melhor caminho dentro da Justiça.', points: ['Ações cíveis', 'Contratos', 'Revisão de estratégia em processos'] },
  { title: 'Direito Público', text: 'Atuação em questões que envolvem o poder público, com base no Direito Constitucional.', points: ['Demandas contra o poder público', 'Direito Constitucional', 'Pareceres'] },
];

export const topics = ['inventário', 'herança', 'regularização de imóvel', 'usucapião', 'contratos', 'processos cíveis'];

// Fluxo da consultoria on-line, como ela descreve nos posts do Facebook
export const steps = [
  { n: '01', title: 'Agendamento', text: 'Você escolhe a data e o horário mais convenientes e confirma a consultoria.' },
  { n: '02', title: 'Orientações por e-mail', text: 'Após o agendamento, você recebe um e-mail com o que precisa para a reunião.' },
  { n: '03', title: 'Consultoria por vídeo', text: 'Reunião por videoconferência, de 30 minutos a 1 hora, para esclarecer suas dúvidas com base na lei e na jurisprudência.' },
  { n: '04', title: 'Relatório técnico', text: 'Ao final, você recebe por e-mail, em até 48h, um relatório assinado com as orientações e os encaminhamentos jurídicos.' },
];

export const faq = [
  { q: 'Como funciona a consultoria on-line?', a: 'É uma reunião por videoconferência, de 30 minutos a 1 hora. Depois você recebe por e-mail, em até 48h, um relatório técnico assinado com as orientações para o seu caso.' },
  { q: 'Alguém da família faleceu. Por onde começo o inventário?', a: 'Reúna a certidão de óbito, os documentos dos herdeiros e os documentos dos bens. Na consultoria avaliamos se o inventário pode ser feito em cartório ou precisa ser judicial.' },
  { q: 'Meu imóvel não tem escritura. Tem solução?', a: 'Depende da situação do imóvel e de como ele foi adquirido. Existem caminhos como a escritura, a usucapião e, em construções sobre outra casa, o direito real de laje.' },
  { q: 'Já tenho um processo em andamento. Posso pedir uma análise?', a: 'Sim. Analisamos o processo e as peças já apresentadas para orientar os próximos passos.' },
  { q: 'O atendimento é presencial ou on-line?', a: 'Os dois: no escritório na Aldeota, em Fortaleza, ou por videoconferência, de qualquer lugar.' },
  { q: 'Como são cobrados os honorários?', a: 'Os honorários são combinados por escrito antes do início do trabalho, observando a tabela da OAB-CE.' },
];

// "Qual é o seu caso?" — informa e leva ao WhatsApp com a mensagem já escrita, sem prometer resultado
export const situations = [
  { label: 'Perdi um familiar e há bens', title: 'Inventário e partilha', text: 'O inventário organiza a divisão dos bens entre os herdeiros. Quando todos concordam e não há menores, pode ser feito em cartório.', msg: 'Olá, Dra. Thaís! Preciso de orientação sobre inventário.' },
  { label: 'Meu imóvel não tem escritura', title: 'Regularização de imóvel', text: 'Contrato de gaveta, posse antiga ou documentação incompleta podem ser regularizados. O caminho depende da história do imóvel.', msg: 'Olá, Dra. Thaís! Tenho um imóvel sem escritura e quero regularizar.' },
  { label: 'Construí sobre outra casa', title: 'Direito real de laje', text: 'A construção feita sobre a laje de outro imóvel pode ter matrícula própria no cartório, com direitos e deveres definidos em lei.', msg: 'Olá, Dra. Thaís! Quero entender o direito de laje para a minha construção.' },
  { label: 'Quero organizar a herança', title: 'Planejamento sucessório', text: 'Testamento, doação e outras ferramentas ajudam a evitar conflitos e a definir como o patrimônio será transmitido.', msg: 'Olá, Dra. Thaís! Quero planejar a sucessão do meu patrimônio.' },
  { label: 'Tenho um processo parado', title: 'Estratégia processual', text: 'Uma análise do processo e das peças já apresentadas ajuda a entender o momento do caso e as opções disponíveis.', msg: 'Olá, Dra. Thaís! Tenho um processo e preciso de uma análise.' },
  { label: 'Problema com um contrato', title: 'Contratos', text: 'Revisão, elaboração ou descumprimento de contrato: começamos pela leitura do documento e das conversas entre as partes.', msg: 'Olá, Dra. Thaís! Preciso de ajuda com um contrato.' },
];
