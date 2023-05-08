const url = "http://localhost:4003/campers"

//2 obtener todos los campers de la API -(GET)

export  const getCampers = async ()=>{
    try {
        const result= await fetch(url);
        const campers = await result.json();
        return campers;
    } catch (error) {
        console.log(error);
    }
}

//Registrar un nuevo camper en la REST API- metodo POST

export const newCamper = async camper=>{
    console.log(camper);
    try {
        await fetch(url, {
            method:'POST',
            body: JSON.stringify(camper),
            headers:{
                'Content-Type':'application/json'
            }
        });
        window.location.href='index.html'
    } catch (error) {
        console.log(error);
    }
}