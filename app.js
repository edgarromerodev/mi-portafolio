var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link")
    }

    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu")
function abrirmenu() {
    sidemenu.style.right = "0";
}

function cerrarmenu() {
    sidemenu.style.right = "-200px";
}

function enviarWhatsApp(event) {
    event.preventDefault();

    // Obtener los valores de los campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    // Verificar que ninguno de los campos esté vacío
    if (name.trim() === '' || mensaje.trim() === '') {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    // Enlace de WhatsApp con el número y mensaje
    const url = `https://api.whatsapp.com/send?phone=50245984577&text=Hola,%20mi%20nombre%20es%20${name}.%20Correo:%20${email}.%20Mensaje:%20${mensaje}`;

    // Abre una nueva pestaña o ventana con el enlace de WhatsApp
    window.open(url, '_blank');
}


document.getElementById("currentYear").innerHTML = new Date().getFullYear();