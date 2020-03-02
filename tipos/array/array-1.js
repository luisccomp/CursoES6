const users = ['Luis', 'Raiden', 'Ashe'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const people = [
    {
        name: 'Luis',
        age: 27,
        gender: gender.MAN
    },
    {
        name: 'Raiden',
        age: 24,
        gender: gender.MAN
    },
    {
        name: 'Ashe',
        age: 28,
        gender: gender.WOMAN
    }
];

// Retornar a quantidade de itens em um array
console.log('Itens:', people.length);

// Verificar se é array
console.log('A variável people é um array:', Array.isArray(people));

// Iterar os items do array
people.forEach(person => {
    console.log(`Nome: ${person.name}`);
})

// Filtrar array
const men = people.filter(person => person.gender === gender.MAN);
console.log('Nova lista com apenas homens:', men);

// Retornar um novo
const peopleWithCourse = people.map(person => {
    person.course = 'Curso javascript';
    return person;
});
console.log('Pessoas com a adição do course:', peopleWithCourse);

const totalAge = people.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('Soma total de todas as pessoas:', totalAge);

//Juntando operações
const totalEvenAges = people.filter(person => person.age % 2 === 0)
                            .reduce((age, person) => {
                                age += person.age;
                                return age;
                            }, 0);


const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.map(numero => 2 * numero);
console.log('Números pares:', pares);

const impares = numeros.map(numero => 2 * numero + 1);
console.log('Números ímpares', impares);
