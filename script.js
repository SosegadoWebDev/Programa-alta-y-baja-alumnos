var inputName = document.querySelector("#input-name");
var inputbutton1 = document.querySelector("#input-button1");
var inputLastName = document.querySelector("#input-lastname");
//Función para mostrar los alumnos que ya existan en LocalStorage
function mostrarStudent(student) {
    if (JSON.parse(localStorage.getItem("studentInfo"))) {
        for (var i = 0; i < JSON.parse(localStorage.getItem("studentInfo")).length; i++) {
            var studentlist = document.querySelector("#student-list");
            var studentDatos = document.createElement("li");
            studentDatos.className = "list-group-item";
            studentDatos.id = student[i].dni
            var nombreApellido = document.createElement("h2");
            nombreApellido.innerText = "Estudiante: " + student[i].nombre + " " + student[i].apellido
            studentDatos.appendChild(nombreApellido)
            var dni = document.createElement("h3");
            dni.innerText = "DNI: " + student[i].dni
            studentDatos.appendChild(dni)
            var email = document.createElement("h4");
            email.innerText = "Correo electrónico: " + student[i].email
            studentDatos.appendChild(email)
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
inputName.addEventListener("input", function validarName(event) {
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
//validar input LastName
inputLastName.addEventListener("input", function validarLastName(event) {
    if (inputLastName.value && !(noNumberOnName(inputLastName.value, numeros)) && inputLastName.value.length >= 4) {
        inputLastName.classList.add("is-valid")
        if (inputLastName.classList.contains("is-invalid")) {
            inputLastName.classList.replace("is-invalid", "is-valid")
        }
    } else {
        inputLastName.classList.add("is-invalid")
        if (inputLastName.classList.contains("is-valid")) {
            inputLastName.classList.replace("is-valid", "is-invalid")
        }
    }
})
//Funcion para validar dni duplicados
var inputDni = document.querySelector("#input-dni");
function dniDuplicado() {
    for (var i = 0; i <= document.querySelectorAll("li").length - 1; i++) {
        if (inputDni.value == document.querySelectorAll("li")[i].id) {
            return false
        }
    }
    return true
}
//validación de el input DNI
inputDni.addEventListener("input", function validarDni() {
    if (inputDni.value > 0 && inputDni.value.length >= 7 && inputDni.value.length <= 8 && dniDuplicado()) {
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
//Validación del input e-mail
var inputPassword = document.querySelector("#input-password");
inputPassword.addEventListener("input", function () {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputPassword.value)) {
        inputPassword.classList.add("is-valid")
        if (inputPassword.classList.contains("is-invalid")) {
            inputPassword.classList.replace("is-invalid", "is-valid")
        }
    } else {
        inputPassword.classList.add("is-invalid")
        if (inputPassword.classList.contains("is-valid")) {
            inputPassword.classList.replace("is-valid", "is-invalid")
        }
    }
})
//Eventos que activan el boton en caso de que los inputs esten validados correctamente
document.querySelectorAll("input")[0].addEventListener("input", function activarButton() {
    if ((inputName.classList.contains("is-valid")) && (inputDni.classList.contains("is-valid")) && (inputPassword.classList.contains("is-valid"))) {
        inputbutton1.disabled = false
    } else {
        inputbutton1.disabled = true
    }
})
document.querySelectorAll("input")[1].addEventListener("input", function activarButton() {
    if ((inputName.classList.contains("is-valid")) && (inputDni.classList.contains("is-valid")) && (inputPassword.classList.contains("is-valid"))) {
        inputbutton1.disabled = false
    } else {
        inputbutton1.disabled = true
    }
})
document.querySelectorAll("input")[3].addEventListener("input", function activarButton() {
    if ((inputName.classList.contains("is-valid")) && (inputDni.classList.contains("is-valid")) && (inputPassword.classList.contains("is-valid"))) {
        inputbutton1.disabled = false
    } else {
        inputbutton1.disabled = true
    }
})
//Evento de click en el boton
inputbutton1.addEventListener("click", function () {
    var nameValue = document.querySelector("#input-name").value
    var dniValue = document.querySelector("#input-dni").value
    var lastNameValue = document.querySelector("#input-lastname").value
    var passwordValue = document.querySelector("#input-password").value
    studentObject = !(JSON.parse(localStorage.getItem("studentInfo"))) ? studentObject = [] : studentObject = JSON.parse(localStorage.getItem("studentInfo"))
    //Guardar el array en LocalStorage
    function guardarEnLocalStorage(key, array) {
        if (Array.isArray(array)) {
            array.push({ nombre: nameValue, dni: dniValue, apellido: lastNameValue, email: passwordValue })
            var listaStorage = JSON.stringify(array)
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
        var objectLength = JSON.parse(localStorage.getItem("studentInfo")).length - 1
        var studentlist = document.querySelector("#student-list");
        var studentDatos = document.createElement("li");
        studentDatos.className = "list-group-item"
        studentDatos.id = student[objectLength].dni
        var nombreApellido = document.createElement("h2");
        nombreApellido.innerText = "Nombre: " + student[objectLength].nombre + " " + ((student[objectLength].apellido == "") ? "" : student[objectLength].apellido)
        studentDatos.appendChild(nombreApellido)
        var dni = document.createElement("h3");
        dni.innerText = "DNI: " + student[objectLength].dni
        studentDatos.appendChild(dni)
        var email = document.createElement("h4");
        email.innerText = "Correo electrónico: " + student[objectLength].email
        studentDatos.appendChild(email)
        studentlist.appendChild(studentDatos)
    }
    var studentNode = mostrarStudent(mostrarLocal)
    console.log(studentNode)
    //Funcion para eliminar el contenido de los inputs al agregar un alumno
    function refresh() {
        var resetNombre = document.querySelectorAll("input")[0]
        var resetDni = document.querySelectorAll("input")[1]
        var resetApellido = document.querySelectorAll("input")[2]
        var resetEmail = document.querySelectorAll("input")[3]
        resetNombre.value = ""
        resetDni.value = ""
        resetApellido.value = ""
        resetEmail.value = ""
        resetNombre.classList.remove("is-valid")
        resetDni.classList.remove("is-valid")
        resetApellido.classList.remove("is-valid")
        resetEmail.classList.remove("is-valid")
        inputbutton1.disabled = true
    }
    var buttonRefresh = refresh()
    console.log(buttonRefresh)
})
var inputBuscar = document.querySelector("#input-buscar")
var inputButton2 = document.querySelector("#input-name-finder")
var objectStudents = JSON.parse(localStorage.getItem("studentInfo"))
inputButton2.addEventListener("click", function () {
    function buscarAlumno(nameFinder, arrayStudent) {
        if (objectStudents) {
            for (var i = 0; i < arrayStudent.length; i++) {
                if (arrayStudent[i].nombre == nameFinder) {
                    var studentlist = document.querySelector("#student-list")
                    studentlist.parentNode.removeChild(studentlist)
                    function mostrarStudent(student) {
                        studentlist = document.createElement("ul")
                        studentlist.id = "student-list"
                        var studentDatos = document.createElement("li");
                        studentDatos.className = "list-group-item"
                        studentDatos.id = student[i].dni
                        var studentEncontrado = document.createElement("h2")
                        studentEncontrado.className = "text-content-center"
                        studentlist.appendChild(studentEncontrado)
                        var nombreApellido = document.createElement("h2");
                        nombreApellido.innerText = "Estudiante: " + student[i].nombre + " " + ((student[i].apellido == "") ? "" : student[i].apellido)
                        studentDatos.appendChild(nombreApellido)
                        var dni = document.createElement("h3");
                        dni.innerText = "DNI: " + student[i].dni
                        studentDatos.appendChild(dni)
                        var email = document.createElement("h4");
                        email.innerText = "Correo electrónico: " + student[i].email
                        studentDatos.appendChild(email)
                        studentlist.appendChild(studentDatos)
                        document.querySelector("#div-list").appendChild(studentlist)
                        studentEncontrado.innerText = "Alumnos encontrados: " + document.querySelectorAll("li").length
                    }
                    var studentNode = mostrarStudent(objectStudents)
                    console.log(studentNode)
                }
            }
        } else {
            studentlist = document.createElement("ul")
            studentlist.id = "student-list"
            var studentDatos = document.createElement("li");
            studentDatos.className = "list-group-item"
            var alumnoNoFinded = document.createElement("h2");
            alumnoNoFinded.innerText = "No hay alumnos que mostrar!"
            studentDatos.appendChild(alumnoNoFinded)
            studentlist.appendChild(studentDatos)
            document.querySelector("#div-list").appendChild(studentlist)
        }
    }
    buscarAlumno(inputBuscar.value, objectStudents)
})
