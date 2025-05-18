

const estudiantes=[] //Arreglo, almacena alumno ingresado (nombre, apellido,nota)

const tablaBody = document.querySelector("studenTable tbody");
// Inicialmente tbody = empty
// Cuando se agrega un estudiante, JS crea una fila y la inserta dentro del tbody, usando appendChild.

const promedioDiv = document.getElementById("average") //Selecicona el div donde se mostrara el prom. grl

//Formulario
document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault(); //(no recarga la página al apretar el boton).

    const name=document.getElementById("name").value.trim(); //obtiene el nombre del estudiante (sin espacios a los lados).
    const lastName=document.getElementById("lastName").value.trim();
    const grade=parseFloat(document.getElementById("grade").value); //nota se convierte en numero decimal

    //validacion de datos
    if(!name){
        alert("Por favor, complete el campo 'Nombre'")
        return
    }
    if(!lastName){
        alert("Por favor, complete el campo 'Apellido'")
        return
    }
    if(isNaN(grade)){
        alert("Por favor, ingrese un numero valido")
        return
    }
    if(grade<1 || grade>7){
        alert("Debe estar en rango valido 1.0 y 7.0")
        return
    }


    //guarda el estudiante
    const estudiante={name,lastName,grade};
    //Lo agrega al arreglo estudiantes
    estudiantes.push(estudiante);
    addStudentToTable(estudiante) //anade visualmente a la tabla.
    calcularPromedio(); //Llama a la funcion que calcula y actualiza el promedio general.
    this.reset() //Limpia campos

});

//funcion
//Crea una fila a la tabla
function addStudentToTable(estudiante) {
    const row = document.createElement("tr");
    row.innerHTML = //innerHTML para insertar tres columnas: nombre, apellido, nota.
    `
        <td>${estudiante.name}</td>
        <td>${estudiante.lastName}</td>
        <td>${estudiante.grade}</td>
    `;
    tableBody.appendChild(row); //Añade esa fila al cuerpo de la tabla studentsTable.
}

function calcularPromedio() {
    if (estudiantes.length === 0) {
        averageDiv.textContent = "Promedio General del Curso : N/A"; //Si no hay estudiantes, muestra n/a.
        return;
    }
    const total = estudiantes.reduce((sum, estudiante) => sum + estudiante.grade, 0); //sumar todas las nota
    const prom = total / estudiantes.length;
    averageDiv.textContent = "Promedio General del Curso : " + prom.toFixed(2);
    //Muestra el resultado con 2 decimales usando .toFixed(2).
}
