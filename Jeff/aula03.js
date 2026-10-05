//estruturas de array 

/*
[]= array é uma estrutura que permite armazenar qualquer tipo de dado de uma única variável
{} = objeto de um array
 for of = percorre indicies dentro de um array/objeto e realiza uma ação para cada indicie, igual foreach da unity

metodos de um array
método push = adiciona um valor como último indicie do array
método pop = remove um valor do último indicie do array
método shift = remove o primeiro indicie do array
método unshift adiciona um valor como primeiro indicie do array

*/

const jobTitle = "Desenvolvedor Frontend";
const jobDescription = "Requisitos"
const company = "VG Tech";
const isActive = true;

//lista de objetos
/*onst jobList = {
    title: "Desenvolvedor Frontend",
    description: "Requisitos",
    company: "VG Tech",
    isActive: true
}*/

//uma chave de um objeto
const jobsList = [{
    title: "Desenvolvedor Frontend",
    description: "Requisitos",
    company: "VG Tech",
    isActive: true
},
{
    title: "Desenvolvedor Backend",
    description: "Requisitos",
    company: "VG Tech",
    isActive: false
}
]

console.log(jobsList[0].isActive);

const arrayA = ["Desenvolvedor Frontend,", "EmpresaA", true]

//percorrer cada índice do array e ver qual está true e false
for (const item of jobsList) {
    if (item.isActive) {
        //return console.log(item.title);
        console.log(`Vaga aberta na empres ${item.company}, titulo da vaga: ${item.title}`);
    }
}

/*
    instrução geral: criar uma branch ou usar uma já existente, fazer a dinâmica abaixo

    iniciante criar um array simples contendo 5 nomes de linguagens de programação (String). fazer um loop básico para imprimir cada linguagem no console.

    intermediário: criar um array contendo 3 objetos representando candidatos (com propriedades: nome e anosExperiencia). usar um loop para percorrer
    os candidatos e imprimir um aviso de "aprovado" apenas para aqueles que tiverem mais de 2 anos de experiencia

    avançado: fazer o desafio intermediário mas em vez de usar o for tradicional ou for of. 
    pesquisar e utilizar métodos modernos de array ( filter, foreach() ou map())

*/

//INICIANTE
const linguagens = [
    "JavaScript",
    "Python",
    "C#",
    "Java",
    "PHP",
];

for (const linguagem of linguagens) {
    console.log(linguagem);
}

//INTERMEDIÁRIO

const candidatos1 = [
    {
        nome: "Jefferson",
        anosExperiencia: 3,
    },
    {
        nome: "João",
        anosExperiencia: 1,
    },
    {
        nome: "Carlos",
        anosExperiencia: 5,
    },
];

for (const candidato of candidatos1) {
    if (candidato.anosExperiencia > 2) {
        console.log(`${candidato.nome}: Aprovado`);
    }
}




//AVANÇADO
const candidatos = [
    {
        nome: "Jefferson",
        anosExperiencia: 3,
    },
    {
        nome: "João",
        anosExperiencia: 1,
    },
    {
        nome: "Carlos",
        anosExperiencia: 5,
    },
];

const candidatosAprovados = candidatos.filter(
    (candidato) => candidato.anosExperiencia > 2
);

candidatosAprovados.forEach((candidato) => {
    console.log(`${candidato.nome}: Aprovado`);
});