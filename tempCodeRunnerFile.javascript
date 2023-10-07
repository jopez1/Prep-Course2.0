function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
    let cajita = [];
    for (let i = 0; i < array.length; i++) {
     if (array[i] > 100) {
      cajita.push(array[i])
     }
      return cajita;
    }
  
  }
  console.log(mayorACien(cajita));