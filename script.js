var inputName = document.querySelector("#input-name");
var inputbutton1 = document.querySelector("#input-button1");

//Funcion para ingresar un input sin números ademas del uso de replace para eliminar espacios 
//vacios en el value, sin esto la funciona no llegaba nunca al comportamiento deseado
var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var noNumberOnName = function noNumber(strInput, arrayComplete) {
    strInput = strInput.replace(/ /g, "")
    for (var i = 0; i < strInput.length; i++) {
        for (var ii = 0; ii < arrayComplete.length; ii++) {
            //console.log(strParcial[i])
            if (strInput[i] == arrayComplete[ii]) {
                return true
            }
        }
    }
}
//Funcion para validar un input empezando por el requerimiento de un input con valor, es decir "no vacío" y 
//ademas de que al ser un input NOMBRE no tenga números como valores, de tener numeros retorna false y se
//activa la clase "is-invalid", en caso de devolver todo true activa la clase "is-valid" y se activa el button
inputName.addEventListener("blur", function validarInput(event) {
    if (inputName.value && !(noNumberOnName(inputName.value, numeros)) && inputName.value.length >= 4) {
        inputName.classList.add("is-valid")
        //inputbutton1.disabled = false
        if (inputName.classList.contains("is-invalid")) {
            inputName.classList.replace("is-invalid", "is-valid")
        }
    } else {
        inputName.classList.add("is-invalid")
        //inputbutton1.disabled = true
        if (inputDni.classList.contains("is-valid")) {
            inputDni.classList.replace("is-valid", "is-invalid")
        }
    }
})
var inputDni = document.querySelector("#input-dni");
inputDni.addEventListener("blur", function validarDni() {
    if (inputDni.value.length >= 7 && inputDni.value.length <= 8) {
        inputDni.classList.add("is-valid")
        //inputbutton1.disabled = false
        if (inputDni.classList.contains("is-invalid")) {
            inputDni.classList.replace("is-invalid", "is-valid")
        }
    } else {
        inputDni.classList.add("is-invalid")
        //inputbutton1.disabled = true
        if (inputDni.classList.contains("is-valid")) {
            inputDni.classList.replace("is-valid", "is-invalid")
        }
    }
})
document.querySelectorAll("input")[0].addEventListener("blur", function activarButton() {
    if ((inputName.classList.contains("is-valid")) && (inputDni.classList.contains("is-valid"))) {
        inputbutton1.disabled = false
    } else {
        inputbutton1.disabled = true
    }
})
document.querySelectorAll("input")[1].addEventListener("blur", function activarButton() {
    if ((inputName.classList.contains("is-valid")) && (inputDni.classList.contains("is-valid"))) {
        inputbutton1.disabled = false
    } else {
        inputbutton1.disabled = true
    }
})
