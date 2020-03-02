const myNumber = 12.4032;

// Transformar um número para string
const numberAsString = myNumber.toString();
console.log('Número transformado em uma string:', typeof numberAsString);

// Retorna o número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('Número com duas casas decimais:', fixedTwoDecimals);

// Transforma uma string em float
console.log('String transformada em float:', typeof parseFloat('3.141592'));

// Transformando uma string em int
console.log('String transformada em int:', typeof parseInt('2048'));
