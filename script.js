

const estudiantes = [] //Arreglo, almacena alumno ingresado (nombre, apellido,nota)

const tablaBody = document.querySelector("#studentsTable tbody");
// Inicialmente tbody = empty
// Cuando se agrega un estudiante, JS crea una fila y la inserta dentro del tbody, usando appendChild.

const promedioDiv = document.getElementById("average") //Selecicona el div donde se mostrara el prom. grl

//Formulario
document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault(); //(no recarga la página al apretar el boton).

    const name = document.getElementById("name").value.trim(); //obtiene el nombre del estudiante (sin espacios a los lados).
    const lastName = document.getElementById("lastName").value.trim();
    const grade = parseFloat(document.getElementById("grade").value); //nota se convierte en numero decimal

    //validacion de datos




    //guarda el estudiante
    const estudiante = { name, lastName, grade };
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
    <td>
        <button class="delete-btn">Eliminar</button>    
    </td>
        `;

        row.querySelector(".delete-btn").addEventListener("click", function()
        {borrarEstudiante(estudiante,row);

        })

    tablaBody.appendChild(row); //Añade esa fila al cuerpo de la tabla studentsTable.
}

function borrarEstudiante(estudiante,row){
    const index = estudiantes.indexOf(estudiante);
        if (index > -1) {
            estudiantes.splice(index,1);
            row.remove();
            calcularPromedio();
    }
}

function calcularPromedio() {
    if (estudiantes.length === 0) {
        promedioDiv.textContent = "Promedio General del Curso : N/A"; //Si no hay estudiantes, muestra n/a.
        return;
    }
    const total = estudiantes.reduce((sum, estudiante) => sum + estudiante.grade, 0); //sumar todas las nota
    const prom = total / estudiantes.length;
    promedioDiv.textContent = "Promedio General del Curso : " + prom.toFixed(2);
    //Muestra el resultado con 2 decimales usando .toFixed(2).
}
