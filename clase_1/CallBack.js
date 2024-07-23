// ?? ¿Qué es un callback?
// ** Es una función que se ejecuta dentro de otra función. **
// ** Callback es una función que se pasa como argumento a otra función. **

const names = ["Pepito", "Pepa", "Pepa", "Pepa"];
// Ejemplo de Callback
function modify(array, callback) {
  // Hacemos algo...
  console.log("Arreglo original:", array);
  array.push("Juan");
  // Llamamos a la función callback y le pasamos como parametro el array de la función padre.
  callback(array);
}

// !! ----------- 👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻 Esto es un callback.
modify(names, function (arr) {
  console.log("---------- Callback ejecutada ----------");
  console.log("Arreglo modificado:", arr);
  console.log(`Hemos modificado el array y ahora es de tamaño ${arr.length}`);
});

// !! Output !!
// Arreglo original: [ 'Pepito', 'Pepa', 'Pepa', 'Pepa' ]
// ---------- Callback ejecutada ----------
// Arreglo modificado: [ 'Pepito', 'Pepa', 'Pepa', 'Pepa', 'Juan' ]
// Hemos modificado el array y ahora es de tamaño 5
