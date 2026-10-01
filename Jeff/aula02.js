/*
String = textos, sempre entre aspas
Numbers = números, sem aspas
Booleans = verdadeiro ou falso

>, <, >=, <=

== comparar o valor
=== comparar o valor e o tipo

//se a condição for verdadeira, 
// execute tal coisa, se não, execute tal
if ()

*/

//const compare = 1;
//const newCompare = "1";

// const CompanyRequire = 2; //requer 2 anos de experiencia
// const Candidate = 1;

// if(Candidate === CompanyRequire)
//     {
//         console.log(`o candidato tem a experiência necessária de ${CompanyRequire} anos, usuário obtém ${
//         Candidate}`)
//     } 
//     else
//     {
//         console.log(`Candidato possui ${Candidate} anos de experiência, empresa exige ${CompanyRequire}`);
//     }

const openJob = true;
const isLogged = false;

if (openJob && isLogged) {
    return console.log(`A vaga está ${openJob ? "Aberta" : "Fechada"}, e o usuário ${isLogged ? "Logado" : "Não está logado"}`);
}
else {
    console.log(`A vaga está ${openJob ? "Aberta" : "Fechada"}, e o usuário ${isLogged ? "Logado" : "Não está logado"}`);
}

// if(openJob || isLogged) 
//     {
// console.log("");
//     }

//operador ternário
openJob || isLogged ? console.log("Está apto") : console.log("inápto");

console.log()
//console.log(compare === newCompare);


/*iniciante : criar duas variáveis (notaCandidato e NotaCorte). Fazer um if/else simples: se a nota do candidato for maior ou igual a nota de corte. 
Imprimir "Aprovado para entrevista". Se não, "Reprovado".

intermediário : criar variáveis para validar um formulário de cadastro de empresa: nomeDaEmpresa, cnpj, e email. 
usar o operador lógico && ou || para verificar se pelo menos um dos campos está vazio.
(dica: string vazia ""). Se estiver vazio, mostrar o erro.
se tudo estiver preenchido, mostrar sucesso.

avançado: Implementar o desafio intermediário */


// const = não poder ser reatribuídas.
// let = podem ser reatribuidas.

const notaCorte = 10;
let notaCandidato = 18;

if (notaCandidato >= notaCorte) { console.log(`Aprovado para entrevista, nota ${notaCandidato}`); }
else { console.log(`Reprovado, nota ${notaCandidato} é insuficiente`); }



const companyName = "VG Academy";
let cnpj = "57.706.554/0001-71"
let email = "jadriao3@gmail.com"

if (companyName === "" || cnpj === "" || email === "") {
    console.log("Erro, preencha todos os campos.");
} else {
    console.log("Cadastro efetuado com sucesso!");
}

/*Avançado: Implementar o desafio intermediário, mas usar a estrutura de Early Return (Retorno Antecipado) ou Operador Ternário para tornar o código mais limpo e "Clean Code", como se já fosse uma função real.
*/
companyName === "" || companyName === "" || email === "" ? console.log("Erro, verifique os campos") : console.log("Cadastro Efetuado");
