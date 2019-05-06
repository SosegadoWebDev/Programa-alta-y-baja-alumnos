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
            nameValue = nameValue.toLowerCase()
            lastNameValue = lastNameValue.toLowerCase()
            function primeraLetraMayus(string) {
                return string.charAt(0).toUpperCase() + string.slice(1)
            }
            function noSpaceLetter(string) {
                var noSpaceLetter = string.indexOf(" ")
                return string.charAt(0).toUpperCase() + string.slice(1, noSpaceLetter) + " " + string.charAt(noSpaceLetter + 1).toUpperCase() + string.slice(noSpaceLetter + 2)
            }
            nameValue = (nameValue.indexOf(" ") == -1) ? primeraLetraMayus(nameValue) : noSpaceLetter(nameValue);
            lastNameValue = (lastNameValue.indexOf(" ") == -1) ? primeraLetraMayus(lastNameValue) : noSpaceLetter(lastNameValue)
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
        noStudentList = document.querySelector("#no-student-list")
        noStudentList.innerText = ""
        var objectLength = JSON.parse(localStorage.getItem("studentInfo")).length - 1
        var studentlist = document.querySelector("#student-list");
        var studentDatos = document.createElement("li");
        studentDatos.className = "list-group-item"
        studentDatos.id = student[objectLength].dni
        var nombreApellido = document.createElement("h2");
        nombreApellido.innerText = "Estudiante: " + student[objectLength].nombre + " " + ((student[objectLength].apellido == "") ? "" : student[objectLength].apellido)
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
//Validación del input nombre para buscar alumno
inputBuscar.addEventListener("input", function validarInputBuscar() {
    if (inputBuscar.value && !(noNumberOnName(inputBuscar.value, numeros))) {
        inputBuscar.classList.add("is-valid")
        inputButton2.disabled = false
        if (inputBuscar.classList.contains("is-invalid")) {
            inputBuscar.classList.replace("is-invalid", "is-valid")
        }
    } else {
        inputBuscar.classList.add("is-invalid")
        inputButton2.disabled = true
        if (inputBuscar.classList.contains("is-valid")) {
            inputBuscar.classList.replace("is-valid", "is-invalid")
        }
    }
})
inputBuscar.addEventListener("blur", function(){
    if (inputBuscar.classList.contains("is-valid")) {
        inputBuscar.classList.remove("is-valid")
    } else if (inputBuscar.classList.contains("is-invalid")) {
        inputBuscar.classList.remove("is-invalid")
    }
})
//Funciones para cambiar primeras letras a mayúsculas en string sin " " y con " " (espacios vacíos)
function primeraLetraMayus(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
function noSpaceLetter(string) {
    var noSpaceLetter = string.indexOf(" ")
    return string.charAt(0).toUpperCase() + string.slice(1, noSpaceLetter) + " " + string.charAt(noSpaceLetter + 1).toUpperCase() + string.slice(noSpaceLetter + 2)
}
//Función para buscar alumno por nombre parcial o completo
inputButton2.addEventListener("click", function () {
    inputBuscar = inputBuscar.value.toLowerCase();
    inputBuscar = (inputBuscar.indexOf(" ") == -1) ? primeraLetraMayus(inputBuscar) : noSpaceLetter(inputBuscar);
    var objectStudents = JSON.parse(localStorage.getItem("studentInfo"));
    function buscarAlumno() {
        if (objectStudents) {
            function includesText(strParcial, strComplete) {
                for (var ii = 0; ii < strComplete.length; ii++) {
                    for (var i = 0; i < strParcial.length; i++) {
                        if (strParcial[i] === strComplete[ii].nombre[i]) {
                            if (strParcial[i] == strComplete[ii].nombre[strParcial.length - 1]) {
                                function mostrarStudent(student) {
                                    var studentlist = document.querySelector("#student-list");
                                    studentlist.innerText = ""
                                    var studentFinder = document.querySelector("#student-finded")
                                    var studentDatos = document.createElement("li");
                                    studentDatos.className = "list-group-item"
                                    studentDatos.id = student[ii].dni
                                    var nombreApellido = document.createElement("h2");
                                    nombreApellido.innerText = "Estudiante: " + student[ii].nombre + " " + ((student[ii].apellido == "") ? "" : student[ii].apellido)
                                    studentDatos.appendChild(nombreApellido)
                                    var dni = document.createElement("h3");
                                    dni.innerText = "DNI: " + student[ii].dni
                                    studentDatos.appendChild(dni)
                                    var email = document.createElement("h4");
                                    email.innerText = "Correo electrónico: " + student[ii].email
                                    studentDatos.appendChild(email)
                                    studentFinder.appendChild(studentDatos)
                                    inputButton2.disabled = true
                                }
                                var studentNode = mostrarStudent(objectStudents)
                                console.log(studentNode)
                            }
                        } else {
                            break
                        }
                    }
                }
                var divStudentsNumber = document.querySelector("#div-numberStudents")
                var studentEncontrado = document.querySelector("#students-number")
                studentEncontrado.className = "text-content-center show"
                studentEncontrado.innerText = "Alumnos encontrados: " + document.querySelectorAll("li").length
                divStudentsNumber.appendChild(studentEncontrado)
            }
            console.log(includesText(inputBuscar, objectStudents))
        } else {
            noStudentList = document.querySelector("#no-student-list")
            var studentDatos = document.createElement("li");
            studentDatos.className = "list-group-item"
            var alumnoNoFinded = document.createElement("h2");
            alumnoNoFinded.innerText = "No hay alumnos que mostrar!"
            studentDatos.appendChild(alumnoNoFinded)
            noStudentList.appendChild(studentDatos)
        }
    }
    console.log(buscarAlumno())
})
//Función para validar la eliminación del alumno por dni
var deleteStudent = document.querySelector("#input-delete-dni")
var inputButton3 = document.querySelector("#input-delete-student")
function dniExistente() {
    for (var i = 0; i <= document.querySelectorAll("li").length - 1; i++) {
        if (deleteStudent.value == document.querySelectorAll("li")[i].id) {
            return true
        }
    }
    return false
}
deleteStudent.addEventListener("input", function(){
    if (dniExistente()) {
        deleteStudent.classList.add("is-valid")
        inputButton3.disabled = false
        if (deleteStudent.classList.contains("is-invalid")) {
            deleteStudent.classList.replace("is-invalid", "is-valid")
        }
    } else {
        deleteStudent.classList.add("is-invalid")
        inputButton3.disabled = true
        if (deleteStudent.classList.contains("is-valid")) {
            deleteStudent.classList.replace("is-valid", "is-invalid")
        }
    }
})
deleteStudent.addEventListener("blur", function(){
    if (deleteStudent.classList.contains("is-valid")) {
        deleteStudent.classList.remove("is-valid")
    } else if (deleteStudent.classList.contains("is-invalid")) {
        deleteStudent.classList.remove("is-invalid")
    }
})
//Función para eliminar alumno por DNI
inputButton3.addEventListener("click", function(){
    var objectStudents = JSON.parse(localStorage.getItem("studentInfo"));
    for (var i = 0; i < objectStudents.length; i++) {
        if (deleteStudent.value == objectStudents[i].dni) {
            objectStudents.splice(i)
            var newStorage = JSON.stringify(objectStudents)
            localStorage.setItem("studentInfo", newStorage)
        }
    }
})
//Función que refresca la página
var buttonRefresh = document.querySelector("#button-refresh")
buttonRefresh.addEventListener("click", function (){
    location.reload()
})
//Función para remover todo del localStorage
var buttonRemoveStorage = document.querySelector("#button-remove-storage")
buttonRemoveStorage.addEventListener("click", function(){
    localStorage.removeItem("studentInfo")
})
