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
