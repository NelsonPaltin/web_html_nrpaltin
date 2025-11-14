import { senderos } from "./senderos.js";


const contenedor = document.getElementById("senderos");



senderos.forEach(lista => {
  const card = document.createElement("div");
  card.classList.add("card");

  const imageUrl = new URL('../img/g4.jpeg?as=webp&width=250',import.meta.url);

  card.innerHTML = `
    <br>
    <hr>
    <h2>${lista.nombre}</h2>
    <hr>
    <br>
    <img src="${imageUrl}" alt="Fotografía, ${lista.nombre}">
    <p class = "info-distancia"><Strong>Distancia:</strong> ${lista.km} km</p>
    <p>${lista.parr1}..</p>
    <p class = "caja-ver-mas"><a href ="${lista.page}" class = "enlace-ver-mas">...ver más</a></p>
    
  `;

  contenedor.appendChild(card);

});