const nome = "Fernando Thomazi";
let nome2= "";
let pessoaDefault ={
    nome: "Fernando Thomazi",
    idade: "16",
    trabalho:"Programador"
}

let nomes = ["Fernando Thomazi", "Bruno Michaelsen", "Vitor Paim"]; 

let pessoaslistaVazia = []

let pessoas = [{
    nome: "Fernando Thomazi",
    idade: "16",
    trabalho: "Progamador"
},
{
    nome: "Bruno Michaelsen",
    idade: "17",
    trabalho:"UX/UI Designer"
}
];

function alternarNome() {
    nome2= "Maria Silva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recbealteranome(novoNome) {
    nome2 =novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
console.log("Nome");
console.log(pessoa.Nome);

console.log("idade");
console.log(pessoa.idade);

console.log("trabalho");
console.log(pessoa.trabalho);
}



function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("--------IMPRIMIR PESSOAS")
    pessoas.forEach((item)=> {
        console.log("Nome:");
        console.log(item.nome);

        console.log("idade");
        console.log(item.idade);

        console.log("trabalho");
        console.log(item.trabalho);
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Vitor Paim",
    Idade: "18",
    trabalho: "Advogado"
});

imprimirPessoas();

