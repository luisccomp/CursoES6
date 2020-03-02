// AND logico (&&)
exp1 && exp2

var a1 = false && false;  // f && f retorna false
var a2 = false && true;   // f && t retorna false
var a3 = true && false;   // f && t retorna false
var a4 = true && true ;   // t && t retorna true
var a5 = 'Gato' && 'Cão'; // t && t retorna cão
var a6 = false && 'Gato'; // f && t retorna false
var a7 = 'Gato' && false; // t && f retorna false

// OU logico (||)
exp1 || exp2

var o1 = false || false;    // f || f retorna false
var o2 = false || true;     // f || t retorna true
var o3 = true || false;     // t || f retorna true
var o4 = true || true;      // t || t retorna true
var o5 = false || (3 == 4); // f || f retorna false
var o6 = 'Gato' || 'Cão';   // t || t retorna Gato
var o7 = false || 'Gato';   // f || t retorna Gato
var o8 = 'Gato' || false;   // t || f retorna Gato

// NOT logico
!exp

var n1 = !true;   // retorna false
var n2 = !false;  // retorna true
var n3 = !'Gato'; // retorna false
