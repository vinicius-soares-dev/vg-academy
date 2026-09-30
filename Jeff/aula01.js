//variáveis

//variável const (muda valor)
//variável let (muda valores)

const cutlery = "talheres"; 
//variável que não muda
//console.log(cutlery);

//cutlery = "pratos";

console.log(cutlery);

//não pode atribuir valores a variável const

//const = não podem ser reatribuídas.
//let = podem ser reatribuidas.


//template literals 
console.log(`A empresa ${cutlery} possui 4 vagas`);

// variaveis

// const = não poder ser reatribuídas.
// let = podem ser reatribuidas.


const fullName = "Jefferson Albuquerque";
const dateOfBirth = "21/09/2004";

let currentPosition = "Desenvolvedor Front-end";
let searchJob = true;

console.log(`Perfil do candidato:
    Nome: ${fullName}
    Data de Nascimento: ${dateOfBirth}
    Cargo Atual: ${currentPosition}
    Buscando emprego: ${searchJob}
`);

currentPosition = "Desenvolvedor Full Stack";
searchJob = false;

console.log(`Perfil do candidato atualizado:
    Nome: ${fullName}
    Data de Nascimento: ${dateOfBirth}
    Cargo Atual: ${currentPosition}
    Buscando emprego: ${searchJob}"}
`);

// instrução geral:
/*

O aluno deve clonar o repositório da turma, criar uma branch com seu nome (ex: feat:joao), criar uma pasta com seu nome (mkdir exemplo), criar um arquivo .js, escrever as variáveis pedidas e abrir um pull request. 

iniciante: Criar o arquivo e declarar as variáveis de um perfil de candidatos: const para nome completo e data de nascimento e let para cargo atual e se está buscando emprego (true ou false);

intermediário: Fazer o passo acima, imprimir tudo com console.log, alterar o valor das variáveis que foram criadas com let (simulando que a pessou conseguiu um emprego) e imprimir novamente para ver a mudança. 

avançado: fazer os passos acima, mas tentar usar Template Literals (crases) no console.log para imprimir uma frase completa, bem formatada, além de garantir que o commit seja convencional

*/
