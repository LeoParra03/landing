let loaded = ( eventLoaded ) => {
  
    window.alert("landing page loaded");
    console.log( eventLoaded );

  
  }
  window.addEventListener('load', loaded);
  
const formulario = document.getElementById('contactForm');
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    const datos = {
        nombre: nombre,
        email: email,
    };

    fetch("https://landing-e09fc-default-rtdb.firebaseio.com/collection.json", {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos);
        })
        .catch(error => console.error(error));
});
