// variaveis
let cutlery = "talheres";

cutlery = "pratos";

console.log(cutlery);

// const = não poder ser reatribuídas.
// let = podem ser reatribuidas.

const CompanyName = "VG Tech";
let openJobs = 5;

console.log(CompanyName);
console.log(openJobs);

openJobs = 4;

console.log(openJobs);

console.log("A empresa " + CompanyName + " tem " + openJobs + " vagas abertas");

// template literals
console.log(`A empresa ${CompanyName} tem ${openJobs} vagas abertas!`);

// instrução geral:
/*

O aluno deve clonar o repositório da turma, criar uma branch com seu nome (ex: feat:joao), criar uma pasta com seu nome (mkdir exemplo), criar um arquivo .js, escrever as variáveis pedidas e abrir um pull request. 

iniciante: Criar o arquivo e declarar as variáveis de um perfil de candidatos: const para nome completo e data de nascimento e let para cargo atual e se está buscando emprego (true ou false);

intermediário: Fazer o passo acima, imprimir tudo com console.log, alterar o valor das variáveis que foram criadas com let (simulando que a pessou conseguiu um emprego) e imprimir novamente para ver a mudança. 

avançado: fazer os passos acima, mas tentar usar Template Literals (crases) no console.log para imprimir uma frase completa, bem formatada, além de garantir que o commit seja convencional

*/
