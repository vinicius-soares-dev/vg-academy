/*
  [] = array é uma estrutura que permite armazenar qualquer tipo de dado em uma unica variável
  {} = guarda informações baseadas em chave e valor
  for of = percorre indices dentro de um array/objeto e realiza uma ação para cada indice.

  método push = adiciona um valor como o último indice do array
  método pop = remove um valor do ultimo indice do array
  método shift = remove o primeiro indice do array
  método unshift = adiciona um valor como o primeir indice do array
*/
//                  0         1          2

const jobTitle = "Desenvolvedor Frontend";
const jobDescription = "requisitos";
const company = "VG Tech";
const isActive = true;
const jobTitle2 = "Desenvolvedor Backend";
const jobDescription2 = "requisitos";
const company2 = "Empresa";
const isActive2 = true;

const jobsList = [
  {
    title: "Desenvolvedor Frontend",
    description: "requisitos",
    company: "VG Tech",
    isActive: true,
  },
  {
    title: "Desenvolvedor Backend",
    description: "requisitos",
    company: "VG Tech",
    isActive: true,
  },
  {
    title: "Desenvolvedor Full Stack",
    description: "requisitos",
    company: "VG Tech",
    isActive: false,
  },
];

for (const item of jobsList) {
  if (item.isActive) {
    console.log(`
      Vaga aberta na empresa: ${item.company}, Titulo da vaga: ${item.title}
    `);
  }
}

/*

instrução geral: criar uma branch ou usar uma já existente, fazer a dinâmica abaixo.

iniciante: criar um array simples contendo 5 nomes de linguagens de programação (String). Fazer um loop básico para imprimir cada linguagem no console. 

intermediário: criar um array contendo 3 objetos representando candidatos (com propriedades: nome e anosExperiencia). Usar um loop para percorrer os candidadtos e imprimir um aviso de "Aprovado" apenas para aqueles que tiverem mais de 2 anos de experiencia.

avançado: fazer o desafio intermediário mas em vez de usar o for tradicional ou for of. pesquisar e utilizar métodos modernos de array (filter, forEach() ou map()).
*/
