document.addEventListener("DOMContentLoaded",()=>{
    //1. Fetch API para consumir un JSON con un objeto "student.json"
    //getStudent();
    //2. Fetch API para consumir un JSON con un array de objetos
    //getStudents();
    //3. Fetch API para consumir un JSON desde una web API
    getStudentsFromPublicApi();
})


function getStudent(){
    fetch('../API/student.json')
        .then(response=>{
            return response.json();
            /* console.log(response); */
        })
        .then(data=>{
            /* console.log(data); */
            showStudent(data)
        })
}
//destructuramos directamente
function showStudent({idUsuario, nombre, carrera ,sexo, jornada}){
    const contenedor= document.querySelector('tbody');
    const row= document.createElement('tr');
    row.innerHTML=`
    <td>${idUsuario}</td>
    <td>${nombre}</td>
    <td>${carrera}</td>
    <td>${sexo}</td>
    <td>${jornada}</td>
    `;
    contenedor.appendChild(row)//hacemos hijo row al padre conteneddor
}

function getStudents(){
    const url="../API/students.json"
    fetch(url)
        .then(response=>{
            return response.json();
            /* console.log(response); */
        })
        .then(data=>{
            showAllStudents(data)
        })
}
function showAllStudents(students){
    const contenedor = document.querySelector('tbody');
    students.forEach((student)=>{
        const{idUsuario, nombre, carrera, sexo, jornada}=student
        const rows = document.createElement('tr');
        rows.innerHTML=`
        <td>${idUsuario}</td>
        <td>${nombre}</td>
        <td>${carrera}</td>
        <td>${sexo}</td>
        <td>${jornada}</td>
        `;
        contenedor.appendChild(rows)
    })
}
const url='https://vermenmasterchief.tk/estudiantes.php'
async function getStudentsFromPublicApi(){
    try {
    const response= await fetch(url);
    const data = await response.json();
    showAllStudents(data.datos)
    } catch (error) {
        console.log(error);
    }
}
function showAllStudents(students){
    const contenedor = document.querySelector('tbody');
    students.forEach((student)=>{
        const{id_usuario, nombre, programa, sexo, jornada}=student
        const rows = document.createElement('tr');
        rows.innerHTML=`
        <td>${id_usuario}</td>
        <td>${nombre}</td>
        <td>${programa}</td>
        <td>${sexo}</td>
        <td>${jornada}</td>
        `;
        contenedor.appendChild(rows)
    })
}

