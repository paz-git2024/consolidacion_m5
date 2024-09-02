// assets/js/script.js

const personajes = [
    { nombre: "Luke Skywalker", estatura: "172cm", peso: "77kg" },
    { nombre: "C-3PO", estatura: "167cm", peso: "75kg" },
    { nombre: "R2-D2", estatura: "96cm", peso: "32kg" },
    { nombre: "Darth Vader", estatura: "202cm", peso: "136kg" },
    { nombre: "Leia Organa", estatura: "150cm", peso: "49kg" }
    // Agrega más personajes si lo deseas
];
const personajes2 = [
    { nombre: "Owen Lars", estatura: "178cm", peso: "120kg" },
    { nombre: "Beru Whitesun lars", estatura: "165cm", peso: "75kg" },
    { nombre: "R5-D4", estatura: "97cm", peso: "32kg" },
    { nombre: "Biggs Darklighter", estatura: "183cm", peso: "84kg" },
    { nombre: "Obi-Wan Kenobi", estatura: "182cm", peso: "77kg" }
    // Agrega más personajes si lo deseas
];
const personajes3=[
  { nombre: "Wilhuff Tarkin", estatura: "180cm", peso: "desconocido" },
    { nombre: "Chewbacca", estatura: "228cm", peso: "112kg" },
    { nombre: "Han Solo", estatura: "180cm", peso: "80kg" },
    { nombre: "Greedo", estatura: "173cm", peso: "74kg" },
    { nombre: "Jabba Desilijic Tiure", estatura: "175cm", peso: "1,358kg" }
]
let conta=0;
let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
// Asignar eventos a cada trigger
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("timeline-trigger").addEventListener("click", () => mostrarPersonajes(0, 5, "personajes-1-5","fa7f6c",contador1,"timeline-trigger"));
    document.getElementById("timeline-trigger2").addEventListener("click", () => mostrarPersonajes(5, 10, "personajes-6-10","90ee8f",contador2,"timeline-trigger2"));
    document.getElementById("timeline-trigger3").addEventListener("click", () => mostrarPersonajes(10, 15, "personajes-11-15","8bcdf2",contador3,"timeline-trigger2"));
});

let personajesMostrados; 
function mostrarPersonajes(inicio, fin, contenedorId, color,contador,triggerId) {
    const contenedor = document.getElementById(contenedorId);

    // Asegúrate de que el contador no supere el límite
    if (contador1>=5){
      return
    }
    if (contador1=0){
      personajesMostrados = 0;
    }else{
      personajesMostrados = contador1;
    }
    contador1= contador1+personajesMostrados;

    
    //for (let i = inicio; i < fin && i < personajes.length; i++) {
        conta=conta+1
        const personaje = personajes[(conta)-1];
        if (triggerId=="timeline-trigger"){
          const personaje = personajes[(conta)-1];
        }
        
       if (triggerId=="timeline-trigger2"){
       
          const personaje = personajes2[(conta)-1];
        }

        if (triggerId=="timeline-trigger3"){
          const personaje = personajes3[(conta)-1];
        }
        // Crear un nuevo div con la información del personaje
        const personajeDiv = document.createElement("div");
        personajeDiv.className = "col-12 col-md-6 col-lg-4";
        personajeDiv.innerHTML = `
            <div class="single-timeline-content d-flex wow fadeInLeft" style="visibility: visible;">
                <div class="timeline-icon" style="background-color: #${color};"></div>
                <div class="timeline-text">
                    <h6>${personaje.nombre}</h6>
                    <p>Estatura: ${personaje.estatura} Peso: ${personaje.peso}</p>
                </div>
            </div>
        `;

        // Añadir el nuevo div al contenedor
        contenedor.appendChild(personajeDiv);
     contador += 1;
        personajesMostrados += 1;
      contador1=personajesMostrados;
    }

    
//}