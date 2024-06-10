let loaded = ( eventLoaded ) => {
  
    window.alert("landing page loaded");
    console.log( eventLoaded );

  
  }
  window.addEventListener('load', loaded);

const loaded1 = (eventLoaded) => {
    let myform = document.getElementById('contactForm');
    window.alert("DOM completamente cargado y parseado");
    console.log(eventLoaded);
    console.log(myform);  // Log el formulario para inspección
    debugger;
};
window.addEventListener('DOMContentLoaded', loaded1);

const loaded2 = (eventLoaded) => {
    let myform = document.getElementById('contactForm');
    window.alert("DOM completamente");
    console.log(eventLoaded);

    myform.addEventListener('submit', (eventSubmit) => {
        console.log(eventSubmit);
        debugger;
    });
};

window.addEventListener('DOMContentLoaded', loaded2);

const formulario = document.getElementById('contactForm');
formulario.addEventListener('submit', (event) => {
event.preventDefault();
const nombre = document.getElementById('nombre').value;
const email = document.getElementById('email').value;

const datos = {
nombre: nombre,
email: email,

};
fetch('https://landing-e09fc-default-rtdb.firebaseio.com/collection.json', {
method: 'POST',
body: JSON.stringify(datos),
headers: {
'Content-Type': 'application/json'
}
})
.then(respuesta => respuesta.json())
.then(datos => {
console.log(datos); // Imprimir la respuesta del servidor
})
.catch(error => console.error(error));
});
