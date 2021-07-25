'use strict'


window.addEventListener('load',function(){

    // Input variables and aggregated numbers

    var input = document.querySelector("#input-calculadora");
    var numbers_on_screen = document.querySelector("#past-numbers");

    // Variables que seran reemplazadas por los valores ingresados

    var numero1 = 0;
    var numero2 = 0;
    var operacion = "";
    var numero_completo = "";

    // Button variables with numbers

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

    // Button variables with operations

    var sumar = document.querySelector("#sumar");
    var restar = document.querySelector("#restar");
    var dividir = document.querySelector("#dividir");
    var multiplicar = document.querySelector("#multiplicar");
    var ce = document.querySelector("#ce");


    // Number events

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

    // Eventos de los botones de operaciones

    sumar.addEventListener("click",function(){ Operacion("+") });
    restar.addEventListener("click",function(){ Operacion("-") });
    dividir.addEventListener("click",function(){ Operacion("/") });
    multiplicar.addEventListener("click",function(){ Operacion("x") });
    ce.addEventListener("click", EliminarTodo);

    // Operation Button Events

    operate.addEventListener("click", function(){ OperarNumeros()});

    // Function that collects the selected number and shows it on the screen in the input

    function MostrarNumero(number){
        let number_to_show = number.innerHTML;
        numero_completo = numero_completo +""+ number_to_show;
        input.value = numero_completo;
    }

    // Function that eliminates assigned values ​​and what is displayed on the screen

    function EliminarTodo(){
        numero1 = 0;
        numero2 = 0;
        operacion = "";
        numbers_on_screen.innerHTML = "";
        numero_completo = '';
        input.value = '';
    }

    // Function to hide number that appears on screen. It is used when the Operation () function is applied

    function OcultarNumero(){
        numero_completo = '';
        input.value = '';
    }

    // Operation Function. In charge of verifying if there is a number in the input and if this number should be stored 
    // in the variable number1 or in number2. Additionally, it has the necessary logic to know if once the mathematical 
    // operation has been carried out and has been as a result 0, do not have problems with the assignment

    function Operacion(simbolo){
        if(numero_completo != ''){
            if(numero1 == 0){

                if(numero1 == 0 && numero_completo == "0"){
                    numero1 = 0;
                    numbers_on_screen.innerHTML = numero1 + ' ' + simbolo;
                    operacion = simbolo;
                    OcultarNumero();
                }else{
                    numero1 = parseFloat(numero_completo);
                    numbers_on_screen.innerHTML = numero1 + ' ' + simbolo;
                    operacion = simbolo;
                    OcultarNumero();
                }
            }else{
                OcultarNumero();
                numbers_on_screen.innerHTML = numero1 + ' ' + simbolo;
                operacion = simbolo;
            }
        }
    }

    // Main function that operates the numbers stored in the variables number1, number2 and their symbol.

    function OperarNumeros(){
        numbers_on_screen.innerHTML = '';
        if(numero1 != 0 && input.value.length != 0){
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
                case "x":
                    input.value = numero1 * numero2;
                    break;
            }

            numero1 = parseFloat(input.value);
            numero_completo = numero1.toString();
            numero2 = 0;
            operacion = "";

        }
    }

});