 //Crie um objeto que receba ao menos três propriedades sobre você.
 let sobreMim = {
    nome: "Luiz Felipe",
    idade: 26,
    cursaFaculdade: false
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.
sobreMim.time = "Vasco";
console.log(sobreMim);
// Remova uma propriedade desse objeto.
delete sobreMim.idade
//Mostre no console todas as propriedades desse objeto.
console.log(sobreMim)
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
// //Na propriedade amigos, adicione ao menos 4 itens.
const cadastro = [
 {
    nome: "Gabiel",
    idade: 28,
    telefone: 12345,
    amigos: ["Mari", "Cosme", "FelipeS", "FelipeC"]
}, 
 {
    nome: "Welder",
    idade: 15,
    telefone: 321313,
    amigos: ["Mari", "Cosme", "FelipeS", "FelipeC"]
 }, 
 {
    nome: "Mari",
    idade: 52,
    telefone: 2312313,
    amigos: ["Mari", "Cosme", "FelipeS", "FelipeC"]
 }, 
 {
    nome: "Mari/MamaeUrso",
    idade: 25,
    telefone: 58746,
    amigos: ["Mari", "Cosme", "FelipeS", "FelipeC"]
 }, 
 {
    nome: "Lucas Corea",
    idade: 15,
    telefone: 154548,
    amigos: ["Mari", "Cosme", "FelipeS", "FelipeC"]
 },
 {
    nome: "Thiago",
    idade: 90,
    telefone: 312312,
    amigos: ["Mari", "Cosme", "FelipeS", "FelipeC"]
 }
];
// Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[0]);
console.log(cadastro[1].amigos[0]);
console.log(cadastro[2].amigos[0]);
console.log(cadastro[3].amigos[0]);
console.log(cadastro[4].amigos[0]);
console.log(cadastro[5].amigos[0]);