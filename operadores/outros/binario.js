// in
something in collection;

// Arrays
var arvores = new Array('pau-brasil', 'loureiro', 'cedro', 'carvalho', 'sicômoro');
0 in arvores;            // retorna true
1 in arvores;            // retorna true
6 in arvores;            // retorna false
'cedro' in arvores;      // retorna false (você deve especificar o número do indice
                         // não o valor daquela posição).
'length' in arvores;     // retorna true (length) é uma propriedade do array

// Objetos predefinidos
"PI" in Math;            // retorna true
var minhaString = new String("coral");
"length" in minhaString; // retorna true

// Objetos personalizados
var meuCarro = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meuCarro;     // retorna true
"modelo" in meuCarro;    // retorna true

// instanceof
objeto instanceof tipoObjecto;

var dia = new Date(2018, 12, 17);

if (dia instanceof Date) {
    // code here
}
