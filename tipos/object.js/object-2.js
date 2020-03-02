const user = {
    name: 'Raiden',
    lastName: 'Wolfy'
};

// Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('Valores das propriedades do objeto user:', Object.values(user));

// Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('Lista de propriedades e valores:', Object.entries(user));

// Concatenar propriedades de objetos
Object.assign(user, {fullName: 'Raiden Wolfy'});

console.log('Adiciona a propriedade fullName ao objeto user:', user);
console.log('Retorna um novo objeto concatenando dois ou mais objetos:', Object.assign({}, user, {age: 27}));

// Previne todas as alterações em um objeto
const newObj = {foo: 'bar'};

Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;

console.log('Variável newObj após as alterações:', newObj);

// Permite apenas a declaração de propriedades existentes em um objeto
const person = { name: 'Luís' };
Object.seal(person);

person.name = 'Luiís Carlos Silva Júnior';
delete person.name;
person.age = 27;

console.log('Variável após as alterações:', person);