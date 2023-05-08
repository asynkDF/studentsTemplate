import { newCamper } from "../apiConnection/API.js";
const formulario = document.querySelector('#formulario');
formulario.addEventListener("submit", validarCamper);

function validarCamper(e) {
    e.preventDefault();
    const idUsuario = document.querySelector('#idUsuario').value;
    const nombre = document.querySelector('#nombre').value;
    const carrera = document.querySelector('#carrera').value;
    const sexo = document.querySelector('#sexo').value;
    const jornada = document.querySelector('#jornada').value;
    

    //literal Objects Enhacement
    const camper = {
        idUsuario,
        nombre,
        carrera,
        sexo,
        jornada
        
    }
    if (validate(camper)){
        alert('Todos los campos son obligatorios');
        return
    }
    
    newCamper(camper);
}

function validate(objeto) {
    return !Object.values(objeto).every(element => element !== '')
}