const personajes = [
    { nombre: "Luke Skywalker", estatura: "172cm", peso: "77kg" },
    { nombre: "C-3PO", estatura: "167cm", peso: "75kg" },
    { nombre: "R2-D2", estatura: "96cm", peso: "32kg" },
    { nombre: "Darth Vader", estatura: "202cm", peso: "136kg" },
    { nombre: "Leia Organa", estatura: "150cm", peso: "49kg" },
    { nombre: "Owen Lars", estatura: "178cm", peso: "120kg" },
    { nombre: "Beru Whitesun lars", estatura: "165cm", peso: "75kg" },
    { nombre: "R5-D4", estatura: "97cm", peso: "32kg" },
    { nombre: "Biggs Darklighter", estatura: "183cm", peso: "84kg" },
    { nombre: "Obi-Wan Kenobi", estatura: "182cm", peso: "77kg" },
    // Agrega más personajes si lo deseas
];




document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
    const timelineTrigger = document.getElementById("timeline-trigger");
    
    timelineTrigger.addEventListener("click", () => {
        mostrarSiguientePersonaje();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const timelineTrigger = document.getElementById("timeline-trigger2");
    
    timelineTrigger.addEventListener("click", () => {
        mostrarSiguientePersonaje2();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const timelineTrigger = document.getElementById("timeline-trigger3");
    
    timelineTrigger.addEventListener("click", () => {
        mostrarSiguientePersonaje3();
    });
});

function mostrarSiguientePersonaje() {
    const timelineArea = document.querySelector(".single-timeline-area .row");
    
    if (currentIndex < 5) {
        const personaje = personajes[currentIndex];
        
        // Crear un nuevo div con la información del personaje
        const personajeDiv = document.createElement("div");
        personajeDiv.className = "col-12 col-md-6 col-lg-4";
        personajeDiv.innerHTML = `
            <div class="single-timeline-content d-flex wow fadeInLeft" style="visibility: visible;">
                <div class="timeline-icon" style="background-color: #fa7f6c;"></div>
                <div class="timeline-text">
                    <h6>${personaje.nombre}</h6>
                    <p>Estatura: ${personaje.estatura} Peso: ${personaje.peso}</p>
                </div>
            </div>
        `;

        // Añadir el nuevo div al timeline
        timelineArea.appendChild(personajeDiv);

        // Incrementar el índice para mostrar el siguiente personaje
        currentIndex++;
    } else {
        alert("No hay más personajes para mostrar.");
    }
}

function mostrarSiguientePersonaje2() {
    const timelineArea = document.querySelector(".single-timeline-area .row");
    
    if (currentIndex < 5) {
        const personaje = personajes[currentIndex];
        
        // Crear un nuevo div con la información del personaje
        const personajeDiv = document.createElement("div");
        personajeDiv.className = "col-12 col-md-6 col-lg-4";
        personajeDiv.innerHTML = `
            <div class="single-timeline-content d-flex wow fadeInLeft" style="visibility: visible;">
                <div class="timeline-icon" style="background-color: #fa7f6c;"></div>
                <div class="timeline-text">
                    <h6>${personaje.nombre}</h6>
                    <p>Estatura: ${personaje.estatura} Peso: ${personaje.peso}</p>
                </div>
            </div>
        `;

        // Añadir el nuevo div al timeline
        timelineArea.appendChild(personajeDiv);

        // Incrementar el índice para mostrar el siguiente personaje
        currentIndex++;
    } else {
        alert("No hay más personajes para mostrar.");
    }
}