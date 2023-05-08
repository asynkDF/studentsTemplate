//3. importar la funcion metodo HTTP -get
import {
    getCampers
} from "../apiConnection/API.js";
//1. Funcion IIFE (funciones ejecutadas inmediatamente)
(function () {
    document.addEventListener('DOMContentLoaded', showAllStudents);
    async function showAllStudents() {
        // console.log('DESDE IIFE');
        const campers = await getCampers();
        console.log(campers);
        const contenedor = document.querySelector('tbody');
        campers.forEach(camper => {
            const {
                idUsuario,
                nombre,
                carrera,
                sexo,
                jornada
            } = camper
            const rows = document.createElement('tr');
            rows.innerHTML = `
        <th>${idUsuario}</th>
        <td>${nombre}</td>
        <td>${carrera}</td>
        <td>${sexo}</td>
        <td>${jornada}</td>
        <td><button type="button" class="btn btn-warning"</button>Details</td>
        `;
            contenedor.appendChild(rows);
        });
    }
})();