var inputName = document.querySelector("#input-name");
var inputbutton1 = document.querySelector("#input-button1");
//Función para mostrar los alumnos que ya existan en LocalStorage
function mostrarStudent(student) {
    if (JSON.parse(localStorage.getItem("studentInfo"))) {
        for (var i = 0; i < JSON.parse(localStorage.getItem("studentInfo")).length; i++) {
            var studentlist = document.querySelector("#student-list");
            var studentDatos = document.createElement("li");
            studentDatos.className = "list-group-item";
            studentDatos.id = student[i].dni
            var nombreApellido = document.createElement("h1");
            nombreApellido.innerText = "Nombre: " + student[i].nombre //+ student.lastName
            studentDatos.appendChild(nombreApellido)
            var dni = document.createElement("h3");
            dni.innerText = "DNI: " + student[i].dni
            studentDatos.appendChild(dni)
            //var email = document.createElement("p");
            //email.innerText = "Correo electrónico: " + student.email
            //studentDatos.appendChild(email)
            studentlist.appendChild(studentDatos)
        }
    }
}
var studentNode = mostrarStudent(JSON.parse(localStorage.getItem("studentInfo")))
console.log(studentNode)
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
inputName.addEventListener("input", function validarInput(event) {
    if (inputName.value && !(noNumberOnName(inputName.value, numeros)) && inputName.value.length >= 4) {
        inputName.classList.add("is-valid")
        if (inputName.classList.contains("is-invalid")) {
            inputName.classList.replace("is-invalid", "is-valid")
        }
    } else {
        inputName.classList.add("is-invalid")
        if (inputDni.classList.contains("is-valid")) {
            inputDni.classList.replace("is-valid", "is-invalid")
        }
    }
})
var inputDni = document.querySelector("#input-dni");
inputDni.addEventListener("input", function validarDni() {
    if (inputDni.value > 0 && inputDni.value.length >= 7 && inputDni.value.length <= 8) {
        inputDni.classList.add("is-valid")
        if (inputDni.classList.contains("is-invalid")) {
            inputDni.classList.replace("is-invalid", "is-valid")
        }
    } else {
        inputDni.classList.add("is-invalid")
        if (inputDni.classList.contains("is-valid")) {
            inputDni.classList.replace("is-valid", "is-invalid")
        }
    }
})
document.querySelectorAll("input")[0].addEventListener("input", function activarButton() {
    if ((inputName.classList.contains("is-valid")) && (inputDni.classList.contains("is-valid"))) {
        inputbutton1.disabled = false
    } else {
        inputbutton1.disabled = true
    }
})
document.querySelectorAll("input")[1].addEventListener("input", function activarButton() {
    if ((inputName.classList.contains("is-valid")) && (inputDni.classList.contains("is-valid"))) {
        inputbutton1.disabled = false
    } else {
        inputbutton1.disabled = true
    }
})
//Evento de click en el boton
inputbutton1.addEventListener("click", function () {
    var nameValue = document.querySelector("#input-name").value
    var dniValue = document.querySelector("#input-dni").value
    studentObject = typeof JSON.parse(localStorage.getItem("studentInfo")) === typeof [] ? studentObject = JSON.parse(localStorage.getItem("studentInfo")) : studentObject = []
    //gender = gender === "MASCULINO" ? gender = "Señor" : gender = "Señora";
    //Guardar el array en LocalStorage
    function guardarEnLocalStorage(key, array) {
        if (Array.isArray(array)) {
            array.push({nombre: nameValue, dni: dniValue})
            //console.log(array)
            var listaStorage = JSON.stringify(array)
            //console.log("Lista en formato JSON :"+ listaStorage)
            localStorage.setItem(key, listaStorage)
        } else {
            return "No es un " + typeof [] + " array"
        }
    }
    var guardarEnLocal = guardarEnLocalStorage("studentInfo", studentObject)
    console.log(guardarEnLocal)
    //Capturar el array desde LocalStorage
    function levantarStorage(key) {
        if (localStorage.getItem(key)) {
            var listaObtenida = JSON.parse(localStorage.getItem(key))
            //console.log("Lista en formato JavaScript: ")
            return listaObtenida
        } else {
            console.log("El array " + key + " no existe!")
            return []
        }
    }
    var mostrarLocal = levantarStorage("studentInfo");
    console.log(mostrarLocal)
    //Mostrar en el DOM los datos capturados desde LocalStorage
    function mostrarStudent(student) {
        var studentlist = document.querySelector("#student-list");
        var studentDatos = document.createElement("li");
        studentDatos.className = "list-group-item"
        //var idRandom = Math.floor(Math.random() * 500);
        //studentDatos.id = "student-number-" + idRandom
        studentDatos.id = student.DNI
        var nombreApellido = document.createElement("h1");
        nombreApellido.innerText = "Nombre: " + student[0].nombre //+ student.lastName
        studentDatos.appendChild(nombreApellido)
        var dni = document.createElement("h3");
        dni.innerText = "DNI: " + student[0].dni
        studentDatos.appendChild(dni)
        //var email = document.createElement("p");
        //email.innerText = "Correo electrónico: " + student.email
        //studentDatos.appendChild(email)
        studentlist.appendChild(studentDatos)
    }
    var studentNode = mostrarStudent(mostrarLocal)
    console.log(studentNode)
})
