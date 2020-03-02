
// Uma das formas de se definir um Array em javascript é através da função 
// Array.of definida no módulo Array. A partir de um número indefinido de
// parâmetros.
let numeros = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
let nomes = Array.of('Luis', 'Raiden', 'Ashe', 'Malena', 'Diego', 'Marcos');

// Lembrando: podemos iterar os elementos do array de duas formas:
console.log('Iterando com foreach:');
numeros.forEach((numero, index) => {
    console.log(`numero na posição ${index} = ${numero}`);
});

// ou podemos usar laços para fazer isso.
console.log('Iterando com laço for:');
for (let i = 0; i < nomes.length; i ++) {
    console.log(`nome na posição ${i} = ${nomes[i]}`);
}

console.log('Iterando com laço while:');
let i = 0;

while (i < nomes.length) {
    console.log(`nome na posição ${i} = ${nomes[i]}`);
    i ++;
}


let floats = Array.from([3.141592, 2.4132, 1.0, 45.9, 2.4445]);

floats.forEach((float, index) => {
    console.log(`float na posição ${index} = ${float}`);
});


// Inserindo elementos em um array: basta usar o método push do objeto Array
// que novos objetos serão inseridos no final do array.
let frutas = [];
frutas.push('Maçã');
frutas.push('Pêra');
frutas.push('Melancia');
frutas.push('Abacate');

console.log('Frutas que foram inseridas no array:');
frutas.forEach(fruta => console.log(fruta));

// Para remover os elementos inseridos, basta user o método pop
console.log(`Removido: ${frutas.pop()}`);
console.log(`Removido: ${frutas.pop()}`);
console.log(frutas);

// Para inserir no inicio
frutas.unshift('Abacaxi');
console.log(frutas);

// Concatenando dois arrays
console.log('Concatenando dois arrays');

let salgados = ['Coxinha', 'Quibe', 'Esfiha'];
let comidas = frutas.concat(salgados);

console.log(comidas);

// Podemos também remover elementos do array sem alterar o original
let nomes = ['Raiden', 'Lee', 'Grey', 'Drago', 'Sasha'];

console.log(nomes.slice(0, 2));
console.log(nomes.slice(2));
console.log(nomes.slice(-1));
console.log(nomes.slice(-3));

// Formas de se iterar em um array
let iterator = nomes.values();

console.log('Iterando com iterador:');

for (let val = iterator.next(); !val.done; val = iterator.next()) {
    console.log(val.value);
}


// Outras formas de se buscar elementos dentro de um array
let alunos = [{nome: 'Maria', nota: 7}, {nome: 'Carla', nota: 8}, {nome: 'Marcos', nota: 6}];

// Retornar somente os alunos que satisfazem uma dada condição
console.log('Aprovados:', alunos.filter(aluno => aluno.nota >= 7));

// Transformar o conteúdo de um array
console.log('Nomes dos alunos:', alunos.map(aluno => aluno.nome));

// Soma das notas
console.log('Soma das notas:', alunos.reduce((soma, aluno) => {return soma + aluno.nota}, 0));

// Verificar se algum elemento do array satisfaz uma determinada condição
console.log(`Existe algum aluno que foi aprovado? => ${alunos.some(aluno => aluno.nota >= 7)}`);
console.log(`Todos os alunos foram aprovados? => ${alunos.every(aluno => aluno.nota >= 7)}`);
console.log('O nome do primeiro aluno que foi reprovado:', alunos.find(aluno => aluno.nota < 7));

// Ordenando o array por uma condição
alunos.sort((curr, next) => curr.nota - next.nota);
console.log(alunos);

// Inverter o sentido do array
alunos.reverse();
console.log(alunos);
