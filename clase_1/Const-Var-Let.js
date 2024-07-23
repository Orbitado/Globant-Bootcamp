// ?? var
// ** Ámbito: La declaración de variables con var tiene un ámbito de función o ámbito global si se declara fuera de una función.
// ** Hoisting: Las variables declaradas con var se elevan al principio de su ámbito (función o global), lo que significa que se pueden usar antes de ser declaradas (aunque su valor será undefined hasta la declaración).
// ** Reasignación: Se pueden reasignar valores a las variables declaradas con var.
// Ejemplo con var
function exampleVar() {
  console.log(a); // undefined
  var a = 10;
  console.log(a); // 10
}
exampleVar();
// ?? let
// ** Ámbito: La declaración de variables con let tiene un ámbito de bloque, lo que significa que solo están disponibles dentro del bloque en el que se declararon (por ejemplo, dentro de un if, for, etc.).
// ** Hoisting: Las variables declaradas con let también se elevan, pero no se pueden usar antes de la declaración en el código (temporal dead zone).
// ** Reasignación: Se pueden reasignar valores a las variables declaradas con let.
// Ejemplo con let
function exampleLet() {
  // console.log(b); // ReferenceError: Cannot access 'b' before initialization
  let b = 20;
  console.log(b); // 20
}
exampleLet();
// ?? const
// ** Ámbito: La declaración de variables con const también tiene un ámbito de bloque.
// ** Hoisting: Similar a let, las variables declaradas con const se elevan pero no se pueden usar antes de la declaración.
// ** Reasignación: No se pueden reasignar valores a las variables declaradas con const. Deben ser inicializadas al momento de su declaración y no se puede cambiar su referencia una vez asignada. Sin embargo, los objetos y arreglos declarados con const pueden mutar sus propiedades y elementos.
// Ejemplo con const
function exampleConst() {
  // console.log(c); // ReferenceError: Cannot access 'c' before initialization
  const c = 30;
  console.log(c); // 30

  // c = 40; // TypeError: Assignment to constant variable.

  const obj = { prop: 1 };
  obj.prop = 2; // Esto es permitido
  console.log(obj); // { prop: 2 }
}
exampleConst();
