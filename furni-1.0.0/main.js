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