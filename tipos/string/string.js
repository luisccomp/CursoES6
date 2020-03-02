// Retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

// Retorna um array quebrando a string em um delimitador
const splittedText = 'Texto'.split('x');
console.log('Array com as posições separadas pelo delimitador:', splittedText);

// Busca um valor e substitui por outro
const replacedText = 'Texto em português'.replace('português', 'inglês');
console.log(`Substituição de valor: ${replacedText}`);

// Retorna a fatia de um valor
const lastChar = 'Texto'.slice(-1);
console.log(`Última letra de uma string: ${lastChar}`);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log(`Valor da string da primeira letra menos a última: ${allWithoutLastChar}`);

const secontToEnd = 'Texto'.slice(1);
console.log(`Valor da string da segunda letra até a última: ${secontToEnd}`);

// Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log(`As duas primeiras letras são: ${twoCharsBeforeFirstPos}`);
