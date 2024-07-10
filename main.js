async function obtenerDatos() {
    const url = "https://landing-e09fc-default-rtdb.firebaseio.com/collection.json";
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            console.error("Error", respuesta.status);
            return;
        }
        const datosJSON = await respuesta.json();
        const mapaJuegosFav = new Map();
        for (const key in datosJSON) {
            const { juego } = datosJSON[key];
            if (mapaJuegosFav.has(juego)) {
                mapaJuegosFav.get(juego).votos++;
            } else {
                mapaJuegosFav.set(juego, { votos: 1 });
            }
        }

        // Obtener referencia al cuerpo de la tabla
        const tableBody = document.getElementById('tablebody');

        // Limpiar cualquier fila existente
        tableBody.innerHTML = '';

        // Llenar la tabla con datos
        mapaJuegosFav.forEach((value, key) => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${key}</td>
                <td>${value.votos}</td>
            `;
            tableBody.appendChild(newRow);
        });

    } catch (error) {
        console.error("Error al obtener los datos", error);
    }
}

let loaded = (eventLoaded) => {
    const formulario = document.getElementById('contactForm');

    formulario.addEventListener('submit', async (eventSubmit) => {
        eventSubmit.preventDefault();

        var nombre = document.getElementById("nombre").value.trim();
        var email = document.getElementById("email").value.trim();
        var juego = document.getElementById("juego").value.trim();

        if (nombre.length == 0) {
            window.alert("Nombre requerido");
            document.getElementById("nombre").focus();
            return;
        }
        if (email.length == 0) {
            window.alert("Email requerido");
            document.getElementById("email").focus();
            return;
        }
        if (juego.length == 0) {
            window.alert("Juego requerido");
            document.getElementById("juego").focus();
            return;
        }
        const datos = {
            nombre: nombre,
            email: email,
            juego: juego,
        };

        try {
            const respuesta = await fetch("https://landing-e09fc-default-rtdb.firebaseio.com/collection.json", {
                method: 'POST',
                body: JSON.stringify(datos),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!respuesta.ok) {
                console.error("Error al enviar los datos", respuesta.status);
                return;
            }

            const datosRespuesta = await respuesta.json();
            console.log(datosRespuesta);

            // Llamar a obtenerDatos para actualizar la tabla
            await obtenerDatos();

        } catch (error) {
            console.error("Error al enviar los datos", error);
        }
    });

    obtenerDatos();
}

window.addEventListener("DOMContentLoaded", loaded);


