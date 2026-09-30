/* 

String = textos, sempre entre aspas
Numbers = números, sem aspas
Booleans = verdadeiro ou falso

>, <, >=, <=

==  comparar o valor
=== comparar o valor e o tipo

if (se) else(senão)

&& = e
|| = ou

*/

// const CompanyRequire = 2;
// const Candidate = 1;

// if (Candidate >= CompanyRequire) {
//   console.log("candidato tem a experiência necessária");
// } else {
//   console.log("candidato não tem a experiência necessária");
// }

const openJob = true;
const isLogged = false;

// if (openJob || isLogged) {
//   console.log("está apto");
// } else {
//   console.log("inapto");
// }

openJob && isLogged ? console.log("está apto") : console.log("inapto");

if (openJob) {
  console.log("está apto");
}

if (isLogged) {
  console.log("está apto");
}

/*
instrução geral: Cada aluno deve criar um arquivo aula02.js e implementar um sistema de validação simples com if/else. enviar o commit e abrir/atualizar o PR (Pull Request).


iniciante: Criar duas variáveis (notaCandidato e NotaCorte). Fazer um if/else simples: se a nota do candidato for maior ou igual a nota de corte. Imprimir "Aprovado para entrevista". Se não, "Reprovado".

Intermediário: Criar variáveis para validar um formulário de cadastro de empresa: nomeDaEmpresa, cnpj e email. Usar o operador lógico && ou || para verificar se pelo menos um dos campos está vazio (dica: string vazia ""). Se estiver vazio, mostrar o erro. Se tudo estiver preenchido, mostrar sucesso.

Avançado: Implementar o desafio intermediário, mas usar a estrutura de Early Return (Retorno Antecipado) ou Operador Ternário para tornar o código mais limpo e "Clean Code", como se já fosse uma função real.
*/

const exemplo = 1;
