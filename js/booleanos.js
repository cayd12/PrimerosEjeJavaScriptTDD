/* función que recibe un boolano, numérico o cadena y muestra su valor de verdad*/
function valorVerdad(valor) {
    "use strict";
    var valorVerdadero, valorNumber, base = 10;
    
    if (typeof (valor) === "number") {
        valorVerdadero = valor;
    }
    
    if (typeof (valor) === "string") {
         // compruebo si es un booleano
        if (valor.trim() === "true") {
            valorVerdadero = true;
        } else if (valor.trim() === "false") {
            valorVerdadero = false;  // comprueno si es un number
        } else { valorNumber = parseInt(valor, base);
            if (isNaN(valorNumber)) {
                valorVerdadero = valor;
            } else {
                valorVerdadero = valorNumber;
            }
                
            }
        
    }
    if (typeof (valor) === "boolean") {
        valorVerdadero = valor;
    }
   
    
    return valorVerdadero;
}