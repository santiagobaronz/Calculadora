'use strict'


window.addEventListener('load',function(){

    // Variables

    var input = document.querySelector("#input-calculadora");
    var numbers_on_screen = document.querySelector("#past-numbers");

    var number0 = document.querySelector("#numero0");
    var number1 = document.querySelector("#numero1");
    var number2 = document.querySelector("#numero2");
    var number3 = document.querySelector("#numero3");
    var number4 = document.querySelector("#numero4");
    var number5 = document.querySelector("#numero5");
    var number6 = document.querySelector("#numero6");
    var number7 = document.querySelector("#numero7");
    var number8 = document.querySelector("#numero8");
    var number9 = document.querySelector("#numero9");
    var operate = document.querySelector("#operate");

    var sumar = document.querySelector("#sumar");
    var restar = document.querySelector("#restar");
    var dividir = document.querySelector("#dividir");
    var multiplicar = document.querySelector("#multiplicar");
    var ce = document.querySelector("#ce");


    // Eventos de numeros

    number0.addEventListener("click", function(){ MostrarNumero(this)});
    number1.addEventListener("click", function(){ MostrarNumero(this)});
    number2.addEventListener("click", function(){ MostrarNumero(this)});
    number3.addEventListener("click", function(){ MostrarNumero(this)});
    number4.addEventListener("click", function(){ MostrarNumero(this)});
    number5.addEventListener("click", function(){ MostrarNumero(this)});
    number6.addEventListener("click", function(){ MostrarNumero(this)});
    number7.addEventListener("click", function(){ MostrarNumero(this)});
    number8.addEventListener("click", function(){ MostrarNumero(this)});
    number9.addEventListener("click", function(){ MostrarNumero(this)});

    sumar.addEventListener("click",function(){ Operacion("+") });
    restar.addEventListener("click",function(){ Operacion("-") });
    dividir.addEventListener("click",function(){ Operacion("/") });
    multiplicar.addEventListener("click",function(){ Operacion("*") });
    ce.addEventListener("click", EliminarTodo);



    operate.addEventListener("click", function(){ OperarNumeros()});


    // Logica de la calculadora

    var numero1 = 0;
    var numero2 = 0;
    var operacion = "";

    var numero_completo = "";


    // Funcion que recoje el numero seleccionado y lo muestra por pantalla en el input

    function MostrarNumero(number){
        let number_to_show = number.innerHTML;
        numero_completo = numero_completo +""+ number_to_show;
        input.value = numero_completo;
    }

    function EliminarTodo(){
        numero1 = 0;
        numero2 = 0;
        operacion = "";
        numbers_on_screen.innerHTML = "";
        numero_completo = '';
        input.value = '';
    }

    function OcultarNumero(){
        numero_completo = '';
        input.value = '';
    }

    function Operacion(simbolo){
        if(numero_completo != ''){
            if(numero1 == 0){
                numero1 = parseFloat(numero_completo);
                numbers_on_screen.innerHTML = numero1;
                operacion = simbolo;
                OcultarNumero();
            }else{
                OcultarNumero();
                numbers_on_screen.innerHTML = numero1;
                operacion = simbolo;
            }
        }
    }

    function OperarNumeros(){
        numbers_on_screen.innerHTML = '';
        if(numero1 > 0 && input.value.length > 0){
            numero2 = parseFloat(input.value);

            switch(operacion){
                case "+":
                    input.value = numero1 + numero2;
                    break;
                case "-":
                    input.value = numero1 - numero2;
                    break;
                case "/":
                    input.value = numero1 / numero2;
                    break;
                case "*":
                    input.value = numero1 * numero2;
                    break;
            }

            numero1 = parseInt(input.value);
            numero2 = 0;
            operacion = "";

        }
    }

    

});