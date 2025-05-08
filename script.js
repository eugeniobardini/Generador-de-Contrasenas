// Generar contraseña
function generarContrasena() {
    const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minus = "abcdefghijklmnopqrstuvwxyz";
    const nums = "0123456789";
    const sims = "!@#$%^&*()_+-={}[]:;\"'<>,.?/\\";

    let caracteres = "";

    if (document.getElementById("ABC").checked) caracteres += mayus;
    if (document.getElementById("abc").checked) caracteres += minus;
    if (document.getElementById("123").checked) caracteres += nums;
    if (document.getElementById("#$&").checked) caracteres += sims;

    const length = parseInt(document.getElementById("length").value);

    let resultado = "";

    if (caracteres.length === 0) {
        resultado = "Por favor seleccione un tipo de caracter";
    } else {
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * caracteres.length);
            resultado += caracteres[randomIndex];
        }
    }

    document.getElementById("resultado").value = resultado;
}


// Funcionamiento del input range
const rangeInput = document.getElementById("length");
const longitudValor = document.getElementById("longitud-valor");
const btnMenos = document.querySelector(".btn-menos");
const btnMas = document.querySelector(".btn-mas");

rangeInput.addEventListener("input", () => {
    longitudValor.textContent = rangeInput.value;
    generarContrasena();
});
document.addEventListener("DOMContentLoaded", generarContrasena);


// Funcionamiento de botones de mas y menos
btnMenos.addEventListener("click", () => {
    let valor = parseInt(rangeInput.value);
    if (valor > parseInt(rangeInput.min)) {
        rangeInput.value = valor - 1;
        longitudValor.textContent = rangeInput.value;
        generarContrasena();
    }
});

btnMas.addEventListener("click", () => {
    let valor = parseInt(rangeInput.value);
    if (valor < parseInt(rangeInput.max)) {
        rangeInput.value = valor + 1;
        longitudValor.textContent = rangeInput.value;
        generarContrasena();
    }
});


//Boton de copiar
const btnCopiar = document.getElementById("btn-copiar");
const inputResultado = document.getElementById("resultado");

btnCopiar.addEventListener("click", () => {
const contraseña = inputResultado.value;

if (!contraseña) {
    alert("No hay ninguna contraseña para copiar.");
    return;
}

navigator.clipboard.writeText(contraseña)
    .then(() => {
    btnCopiar.textContent = "¡Copiado!";
    setTimeout(() => {
        btnCopiar.textContent = "Copiar";
    }, 1500);
    })
    .catch(() => {
    alert("No se pudo copiar la contraseña.");
    });
});


// Funcionamiento del boton de refrescar
const btnRefresh = document.getElementById("btn-refresh");
let rotation = 0;

btnRefresh.addEventListener("click", () => {
    generarContrasena();  // Llama a la función de generación de contraseña
    rotation += 360;  // Aumenta el ángulo de rotación
    btnRefresh.style.transform = `rotate(${rotation}deg)`;  // Aplica el giro acumulado
});