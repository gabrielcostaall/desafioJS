let pessoas = [
    {nome: "Marcus", idade: 21},
    {nome: "Renato", idade: 22},
    {nome: "Antonio", idade: 22},
    {nome: "Yuri", idade: 20},
    {nome: "Yvolanda", idade: 500},
    {nome: "Bianca", idade: 19},
    {nome: "Bernardo", idade: 10},
    {nome: "Matheus", idade: 26},
    {nome: "João", idade: 19},
    {nome: "Jonas", idade: 13},
    {nome: "Gabriel", idade: 20},
    {nome: "Gabriela", idade: 24},
    {nome: "Isabele", idade: 19},
    {nome: "Isaac", idade: 22}
]
let pessoasG = pessoas.filter(pessoas => pessoas.nome.startsWith("G"));
let media = pessoasG.reduce((prevVal, elem) => prevVal + elem.idade, 0) / pessoasG.length;
console.log(pessoasG);
console.log(media);