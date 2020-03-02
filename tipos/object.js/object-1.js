let user = {
    name: 'Snake'
}

// Alterando as propriedades de um objeto
user.name = 'Raiden';
user['name'] = 'Solid Snake';

const prop = 'name';
user[prop] = 'Ashe';

// Criando uma propriedade
user.lastName = 'Wolfy';

// Deletando uma propriedade
delete user.lastName;

console.log('Valor do objeto:', user);
