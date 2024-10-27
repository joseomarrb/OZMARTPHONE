//Variables
const telefonosContainer = document.querySelector("#telefonos");
const modelos = document.querySelector("#modelos");

//Eventos
document.addEventListener("DOMContentLoaded", () => {
    mostrarTelefonos();
    crearModelos()
})

//Funciones
function mostrarTelefonos() {
    telefonos.forEach( telefono => {
        const {marca, modelo, precio, ram, almacenamiento, procesador} = telefono;
        const dispositivo = document.createElement("DIV");
        dispositivo.classList.add("card");
        dispositivo.innerHTML = `
            <div class="marca">
                ${marca} 
            </div>
            <div class="card-image-container">
                <img src="images/smartphones.jpg">
            </div>
            <div class="card-content">
                <h3 class="modelo">${modelo}</h3>
                <p> 
                    <span>Almacenamiento:</span> ${almacenamiento} 
                </p>
                <p>
                    <span>RAM:</span> ${ram} 
                </p>
                <p>
                    <span>Procesador:</span> ${procesador}
                </p>
                <p class="card-p">
                    <span>Precio:</span>$${precio}
                </p>
            </div>
        `;
        telefonosContainer.appendChild(dispositivo);
    });
}

function crearModelos() {
    telefonos.forEach( telefono => {
        const { modelo, marca } = telefono;
        const opcion = document.createElement("OPTION");
        opcion.textContent = modelo;
        opcion.value = modelo;
        modelos.appendChild(opcion);
    })
}