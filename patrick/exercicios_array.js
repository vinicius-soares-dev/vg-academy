// Instrução Geral: Crie uma branch nova ou use a de ontem. Em um arquivo `.js`, escolha e realize a dinâmica do seu nível abaixo. Depois, faça o commit e atualize seu Pull Request (PR). 
// Iniciante: Crie um Array simples contendo 5 nomes de linguagens de programação (ex: ["JavaScript", "Python"...]). Faça um loop básico (como o for...of) para imprimir o nome de cada linguagem no console. 
// Intermediário: Crie um Array contendo 3 Objetos representando Candidatos. Cada objeto deve ter as propriedades: nome e anosExperiencia. Use um loop para percorrer essa lista de candidatos e imprimir um aviso de "Aprovado" apenas para aqueles que tiverem mais de 2 anos de experiência. 
// Avançado: Faça a mesma lógica do desafio Intermediário, mas não utilize o for ou for...of tradicional. Pesquise e utilize os métodos modernos de Array do JavaScript: use o .filter() para filtrar os candidatos aprovados, e em seguida encadeie um .forEach() ou .map() para imprimi-los.


// Iniciante: Crie um Array simples contendo 5 nomes de linguagens de programação (ex: ["JavaScript", "Python"...]). Faça um loop básico (como o for...of) para imprimir o nome de cada linguagem no console. 

const ProgrammingLanguage = ["Python","Java","C#","Go","Javascript"];

for(item of ProgrammingLanguage){
    console.log(item);
}

// Intermediário: Crie um Array contendo 3 Objetos representando Candidatos. Cada objeto deve ter as propriedades: nome e anosExperiencia. Use um loop para percorrer essa lista de candidatos e imprimir um aviso de "Aprovado" apenas para aqueles que tiverem mais de 2 anos de experiência. 

/*
const infoJobs = [{
    name: "Patrick",
    experience: 4
},
{
    name: "Nataly",
    experience: 2
},
{
    name: "Natan",
    experience: 0
}
];

for(const item of infoJobs){
    if(item.experience >= 2){
        console.log(`As pessoas que possuem mais de dois anos de experiencia são: ${item.name}, estão aprovados`)
    }
}
*/

// Avançado: Faça a mesma lógica do desafio Intermediário, mas não utilize o for ou for...of tradicional. Pesquise e utilize os métodos modernos de Array do JavaScript: use o .filter() para filtrar os candidatos aprovados, e em seguida encadeie um .forEach() ou .map() para imprimi-los.

const infoJobs = [{
    name: "Patrick",
    experience: 4
},
{
    name: "Nataly",
    experience: 2
},
{
    name: "Natan",
    experience: 0
}
];

const aproved = infoJobs
.filter(user => user.experience >= 2)
.map(user => user.name);

console.log(`As pessoas que possuem dois anos ou mais são ${aproved.join(", ")}`)

