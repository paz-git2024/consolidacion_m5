

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
    { nombre: "Wilhuff Tarkin", estatura: "180cm", peso: "desconocido" },
    { nombre: "Chewbacca", estatura: "228cm", peso: "112kg" },
    { nombre: "Han Solo", estatura: "180cm", peso: "80kg" },
    { nombre: "Greedo", estatura: "173cm", peso: "74kg" },
    { nombre: "Jabba Desilijic Tiure", estatura: "175cm", peso: "1,358kg" }

]
let conta=0;
let contador1 = 0;
let contador2 = 5;
let contador3 = 10;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("timeline-trigger").addEventListener("click", () => mostrarPersonajes(0, 5, "personajes-1-5","fa7f6c",contador1,"timeline-trigger"));
    document.getElementById("timeline-trigger2").addEventListener("click", () => mostrarPersonajes2(5, 10, "personajes-6-10","90ee8f",contador2,"timeline-trigger2"));
    document.getElementById("timeline-trigger3").addEventListener("click", () => mostrarPersonajes3(10, 15, "personajes-11-15","8bcdf2",contador3,"timeline-trigger2"));
});

let personajesMostrados; 
function mostrarPersonajes(inicio, fin, contenedorId, color,contador,triggerId) {
    const contenedor = document.getElementById(contenedorId);
   if (contador1>=5){
      return
    }   
    console.log (contador1)
    const personaje = personajes[contador1];
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

 
        contenedor.appendChild(personajeDiv);
     contador1++
    }

    let personajesMostrados2; 
function mostrarPersonajes2(inicio, fin, contenedorId, color,contador,triggerId) {
    const contenedor = document.getElementById(contenedorId);

    if (contador2>=10){
      return
    }   
   
        
        const personaje = personajes[contador2];
        console.log(personaje) 
      
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

        
        contenedor.appendChild(personajeDiv);
  
      contador2++
    }


function mostrarPersonajes3(inicio, fin, contenedorId, color,contador,triggerId) {
    const contenedor = document.getElementById(contenedorId);

    if (contador3>=15){
      return
    }
           
        const personaje = personajes [contador3];
      console.log(contador3)
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

        
        contenedor.appendChild(personajeDiv);
     contador3++
    }