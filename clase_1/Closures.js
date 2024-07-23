// ?? ¿Qué es una Closure?
// ** Una Closure es una función que devuelve una función. **

const a = "Hey!";

function global() {
  const b = " ¿Qué";

  function local() {
    const c = " tal?";
    return a + b + c;
  }

  return local;
}

// la function global, devuelve una función local
// que devuelve la concatenación de a, b y c.
// la función global, es una closure. Es decir, es una función que devuelve una función.
// !! Para ejecutar esta closure, debemos llamar a la función global dos veces.
console.log(global()()); // ** Hey! ¿Qué tal?
// ?? También, podemos hacer:
const closure = global();
console.log(closure()); // ** Hey! ¿Qué tal?

// Otro ejemplo de closure
const miContador = (function () {
  let _contador = 0;

  function incrementar() {
    return _contador++;
  }
  function decrementar() {
    return _contador--;
  }

  function valor() {
    return _contador;
  }

  return {
    incrementar,
    decrementar,
    valor,
  };
})();

console.log(
  miContador.valor(), // 0 Valor inicial
  miContador.incrementar(), // * Le sumamos uno
  miContador.valor(), // 1 Valor despues de incr
  miContador.decrementar(), // * Le restamos uno
  miContador.valor() // 0 Valor despues de decr
);
