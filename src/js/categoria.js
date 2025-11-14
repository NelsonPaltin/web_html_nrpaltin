import { senderos } from "./senderos.js";


const contenedor = document.getElementById("senderos");


let img = document.createElement('img');
img.src = new URL('../img/g4.jpeg', import.meta.url);
document.body.appendChild(img);


import img_01 from "../img/g1.jpeg";
import img_02 from "../img/g2.jpeg";
import img_03 from "../img/g3.jpeg";
import img_04 from "../img/g4.jpeg";
import img_05 from "../img/g5.jpeg";
import img_06 from "../img/g6.jpeg";
import img_07 from "../img/g7.jpeg";
import img_08 from "../img/g8.jpeg";



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

     <img src="${img_01}" alt="Fotografía de prueba">
    
  `;

  contenedor.appendChild(card);

});