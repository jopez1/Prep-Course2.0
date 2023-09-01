/*   function random(num){

    let rana = Math.random(num) * 100
    return Math.round(rana)

  };

  console.log(random(100)); */

  function sonIguales(x, y) {
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:
  
    if(x === y){
      return true
    }
    return false
  };
 console.log(sonIguales(8, 9));

 function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
     
  if (str1.length === str2.length) {
    return true;
  }
  return false
  }
  console.log(tienenMismaLongitud("holla", "    "));

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
  console.log(numeroMasGrande([10, 10, 16, 12]));

  function multiplicarArgumentos(argumentos) {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:
    let arguments = argumentos.Math.pow(argumentos)
    
    if (!argumentos) {
      return 0
    }else if(argumentos){
      return argumentos
    }
  }
  console.log(multiplicarArgumentos(2 , 3));