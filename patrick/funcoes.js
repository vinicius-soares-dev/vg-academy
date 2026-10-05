/*
const openJobs = [{
    companyName: "VG Tech",
    job: "Desenvolvedor Front End",
    isActive: false
},
{
    companyName: "Tic Tech",
    job: "Desenvolvedor Back End",
    isActive: true
},
{
    companyName: "Alvo Dumblo",
    job: "Desenvolvedor FullStack",
    isActive: true
}]

const activeJobs = (openJobs) => {
    let jobs = [];
    for (const job of openJobs) {
        if (job.isActive) {
            jobs.push(job);
        }

    }

    const activeJobs = (list) => {
        const filtroVagasAbertas = list
        .filter(jobs => jobs.isActive)
        return filtroVagasAbertas;
    }


return jobs;

}



openJobs.push({
    companyName: "New Tech",
    job: "Desenvolvedor Java Jr.",
    isActive: false
},
    {
        companyName: "Down Tech",
        job: "Desenvolvedor C#",
        isActive: false
    })

console.log(activeJobs(openJobs));

Código acima de teste, apenas para praticar.
*/

/*
Iniciante 
Crie uma Arrow Function chamada calculateSalary que recebe dois parâmetros: as horas trabalhadas e o valor da hora. A função deve multiplicar esses valores e retornar o total. Fora da função, chame-a e imprima o resultado com console.log().
*/

const calculateSalary = (hours, valueHour) => {
    return hours * valueHour;
}

console.log(calculateSalary(18, 5.30));

/*
Intermediário 
Crie uma função chamada checkApplication(candidateAge, jobRequiredAge). Ela deve usar um if/else e retornar o boolean true se o candidato tiver idade igual ou superior à exigida pela vaga, e false caso contrário. Teste sua função chamando-a com valores diferentes.
*/

function checkApplication(candidateAge, jobRequiredAge) {
    if (candidateAge >= jobRequiredAge) {
        return true;
    } else {
        return false;
    }
}

console.log(checkApplication(25, 17));

/*
Avançado 
Crie uma função filterCandidates(candidates) que recebe um array de objetos (onde cada objeto é um candidato com a propriedade booleana hasResume). Em vez de usar um for tradicional com push(), pesquise e aplique o método moderno .filter() para retornar apenas os candidatos que possuem currículo. Garanta que o seu código esteja impecável seguindo as regras de Clean Code.
*/
const candidates = [{
    name: "Patrick",
    hasResume: true,
},
{
    name: "Nataly",
    hasResume: false
},
{
    name: "Natan",
    hasResume: true
}
]
function filterCandidates(candidates) {
    const filterCandidate = candidates
        .filter(candidates => candidates.hasResume === true);
    return filterCandidate;
}

/*
    const filterCandidates = (listCandidates) => {
        return listCandidates.filter(candidate => candidate.hasResume);
    }

    USANDO ARROW FUNCTION

*/

console.log(filterCandidates(candidates));