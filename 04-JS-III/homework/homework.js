// No cambies los nombres de las funciones.

//         0    1      2 
//array = [1 ,"hola", true] 
function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
 return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}

// array = [1 +1, 2+1 , 4+1] -> array = [2, 3, 5]
function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  let cajita = [];
  
    for(let i = 0; i < array.length; i++){
       cajita.push(array[i]+ 1)
    }
    return cajita
}

//array = [2, "vaso", true]
//elemento "hola"
function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
};


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

//palabras = ['Henry', 'JavaScript', 'Class'] -> "Henry JavaScript Class'
function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ") 
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if(array.includes(elemento)){
    return true
  }
  return false;
  /* for (let i = 0; i < array.length; i++) {
    if(array[i] === elemento) return true
    
}
return false */
}

// numeros [10, 10, 16] 36
function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  /* let suma = 0
  for(let i = 0; i < numeros.length; i++){
    suma += numeros[i]
 }
 return suma */
return numeros.reduce((acc, act) => 
  acc + act
 )
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0
  for(let i = 0; i < resultadosTest.length; i++){
   suma += resultadosTest[i]
  }
return suma / resultadosTest.length
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
    let elMasGrande = 0
  for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] > elMasGrande){
      elMasGrande = numeros[i]
    }
    
  } 
  return elMasGrande;

 // return Math.max(...numeros)
  }


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  /* let arguments = a * b;
    if (!arguments){
        return 0;
    }
    
    return arguments; */

}

//arreglo = [1, 50 , 18, 6]
function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let cajita =[];
    for (let i = 0; i < arreglo.length; i++) {
    if(arreglo[i] > 18){
       cajita.push(arreglo[i])
    }
      
    }
    return cajita.length;
}
/* domingo lunes ma mi ju vi sa
*    1       2    3  4  5  6  7
*/

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

  if (numeroDeDia > 1 && numeroDeDia < 7) {
    return "Es dia Laboral"
  } else if(numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana"
}
       
} 

// n =" 980", 9000, 98, 9, 5, 800
function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  let conversion = n.toString()
  if(conversion[0] === "9"){
    return true
  }
 return false; 
}

//arreglo = [15,51,65,15] -> false - arreglo = [65,65,65] -> true
function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  
  for (let i = 0; i < arreglo.length; i++) {
    for (let j = 0; j < arreglo.length; j++) {
       if(arreglo[i] === arreglo[j]){
           return true
       }else{
           return false
       }
    }
    
   }
  
} 
   //   0       1           2        3         4        5           6        7       8
//["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"];
function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let cajita = [];
          for (let i = 0; i < array.length; i++) {
            if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
                 cajita.push(array[i]);
                 
            }else if(array[i] === "Enero" && array[i] === "Marzo" && array[i] === "Noviembre"){
                "No se encontraron los meses pedidos"
            
            }
            
            
    
          }
          return cajita;
}

//[0,3,200]
function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let cajita = [];
    for (let i = 0; i < array.length; i++) {
     if (array[i] > 100) {
      cajita.push(array[i])
     }
      
    }
    return cajita;

}

//escenario 1: numero = 3 + 2 + 2 .... = [23]
//escenario 2: numero = 0 + 2 + 2 + 2 + 2 + 2 [10] .... -> "Se interrumpió la ejecución"
function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let array = [];
    
    while (numero < 11) {
      numero = numero + 2;
      array.push(numero);
    }
    return array;

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:



}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
