//Variables
const telefonosContainer = document.querySelector("#telefonos");
const modelos = document.querySelector("#modelos");
const marcas = document.querySelector("#marca");
const almacenamiento = document.querySelector("#almacenamiento");
const ram = document.querySelector("#RAM");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");

const datosTelefono = {
    marca : "",
    modelo : "",
    almacenamiento : "",
    ram : "",
    minimo : "",
    maximo : "",
}

//Eventos
document.addEventListener("DOMContentLoaded", () => {
    mostrarTelefonos(telefonos);
    crearModelos();
})

modelos.addEventListener("change", e => {
    datosTelefono.modelo = e.target.value;
    filtrarTelefono();
});

marcas.addEventListener("change", e => {
    datosTelefono.marca = e.target.value;
    filtrarTelefono();
});

almacenamiento.addEventListener("change", e => {
    datosTelefono.almacenamiento = e.target.value;
    filtrarTelefono();
});

ram.addEventListener("change", e => {
    datosTelefono.ram = e.target.value;
    filtrarTelefono();
});

maximo.addEventListener("change", e => {
    datosTelefono.maximo = parseInt(e.target.value);
    filtrarTelefono();
});

minimo.addEventListener("change", e => {
    datosTelefono.minimo = parseInt(e.target.value);
    filtrarTelefono();
});


//Funciones
//Crear Cards con los datos de cada telefono
function mostrarTelefonos( telefonos ) {
    limpiarHTML();
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
};

//Crear opciones de los modelos de db.js
function crearModelos() {
    telefonos.forEach( telefono => {
        const { modelo } = telefono;
        const opcion = document.createElement("OPTION");
        opcion.textContent = modelo;
        opcion.value = modelo;
        modelos.appendChild(opcion);
    })
};

//Mostrar un error si no hay elementos
function mostrarError() {
    limpiarHTML();
    const error = document.createElement("DIV");
    error.classList.add("features-title")
    error.textContent = "NO HAY NINGUN ELEMENTO, INTENTE CON OTRAS OPCIONES.";
    telefonosContainer.appendChild(error);
};

//Filtrar telefono por sus opciones seleccionadas
function filtrarTelefono() {
    const filtrado = telefonos
    .filter(filtrarMarca)
    .filter(filtrarAlmacenamiento)
    .filter(filtrarModelo)
    .filter(filtrarRAM)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo);
    return filtrado.length ? mostrarTelefonos(filtrado) : mostrarError()
};

//Funciones para filtrar los telefonos:
function filtrarMarca(telefono) {
    const { marca } = datosTelefono
    return marca ? telefono.marca === marca : telefono;
};

function filtrarAlmacenamiento(telefono) {
    const { almacenamiento } = datosTelefono;
    return almacenamiento ? telefono.almacenamiento === almacenamiento : telefono;
};

function filtrarModelo(telefono) {
    const { modelo } = datosTelefono;
    return modelo ? telefono.modelo === modelo : telefono;
};

function filtrarRAM(telefono) {
    const { ram } = datosTelefono;
    return ram ? telefono.ram === ram : telefono;
};

function filtrarMinimo(telefono) {
    const { minimo } = datosTelefono;
    return minimo ? telefono.precio >= minimo : telefono;
};

function filtrarMaximo(telefono) {
    const { maximo } = datosTelefono;
    return maximo ? telefono.precio <= maximo : telefono;
};

function limpiarHTML() {
    while (telefonosContainer.firstChild) {
        telefonosContainer.removeChild(telefonosContainer.firstChild)
    }
};