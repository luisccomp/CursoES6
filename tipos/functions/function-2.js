this.name = 'Arrow function';

const getNameArrowFn = () => this.name;

function getName() {
    return this.name;
}

const user = {
    name: 'Nome do objeto na criação',
    getNameArrowFn,
    getName
}

console.log(user.getNameArrowFn());
console.log(user.getName());
