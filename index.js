// PRIMERA seccion
const id_Candidato_Chikito = document.getElementById("id_Candidato_Chikito");
const Nombre_tu_Candidato = document.getElementById("Nombre_tu_Candidato");
const boton_Registrar = document.getElementById("boton_Registrar");
// SEGUNDA seccion
const id_Candidato_votaciones = document.getElementById("id_Candidato_votaciones");
const boton_votar = document.getElementById("boton_votar");
// TERCERA seccion
const boton_verCandidatos = document.getElementById("boton_verCandidatos");
const boton_verVotaciones = document.getElementById("boton_verVotaciones");


const registroCandidatos = (e,event) =>{
    const info_Candidato = {
        id: id_Candidato_Chikito.value, 
        nombre: Nombre_tu_Candidato
    }


}

boton_Registrar.addEventListener("click",registroCandidatos);