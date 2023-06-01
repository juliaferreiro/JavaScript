function Sumar(){
    var Num1 =  parseInt (document.getElementById("num1").value)
    var Num2 =  parseInt (document.getElementById("num2").value)

    var ResultadoSuma =  Num1 + Num2;

    document.getElementById("resultado").innerHTML = "El resultado es:" + ResultadoSuma;
}

function Restar(){
    var Num1 =  parseInt (document.getElementById("num1").value)
    var Num2 =  parseInt (document.getElementById("num2").value)

    var ResultadoResta =  Num1 - Num2;

    document.getElementById("resultado").innerHTML = "El resultado es:" + ResultadoResta;
}

function Multiplicacion(){
    var Num1 =  parseInt (document.getElementById("num1").value)
    var Num2 =  parseInt (document.getElementById("num2").value)

    var ResultadoMul =  Num1 * Num2;

    document.getElementById("resultado").innerHTML = "El resultado es:" + ResultadoMul;
}

function Division(){
    var Num1 =  parseInt (document.getElementById("num1").value)
    var Num2 =  parseInt (document.getElementById("num2").value)

    var ResultadoDiv =  Num1/Num2;

    document.getElementById("resultado").innerHTML = "El resultado es:" + ResultadoDiv;
}