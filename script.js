/*************************************************
 * EJERCICIO 1
 * Selección de elementos descendientes
 * imprime un mensaje en input al dar click al boton
 *************************************************/
/* Selecciona el elemento HTML con id="wrapper"
//const Declara una constante. Significa que la variable no se puede reasignar después.
//wrapperNombre de la variable. Guardará un elemento del DOM (HTML).
//= Asignación: lo que está a la derecha se guarda en wrapper.
//document Representa todo el documento HTML. Es el punto de entrada al DOM.
//querySelector("#wrapper")Busca el primer elemento que coincida con el selector CSS. #wrapper → selector de id.*/
const wrapper = document.querySelector("#wrapper");
// <div id="wrapper">

/* Desde el elemento wrapper, selecciona el primer input que encuentre dentro
//const inputElem Variable constante que almacenará un <input>.
//wrapper.querySelector("input") NO busca en todo el documento.Busca solo dentro de wrapper."input" es un selector de etiqueta.*/
const inputElem = wrapper.querySelector("input");
//<div id="wrapper"><input type="text"></div>

// Desde el elemento wrapper, selecciona el primer botón que encuentre dentro
//const buttonElem Guarda el elemento botón.
//wrapper.querySelector("button")Busca un <button> dentro de wrapper.Solo el primero que encuentre.
const buttonElem = wrapper.querySelector("button");
//<div id="wrapper"> <button>Click</button></div>
// Asigna un evento click al botón
// buttonElem.onclick onclick es una propiedad de evento. Se ejecuta cuando el usuario hace clic en el botón.
// = Asignas una función a ese evento.

// Al hacer clicK, escribe "DISTE CLICK " dentro del input
// Funcion flecha = simplifica una funcion  en este caso
//function Texto() {
//  inputElem.value = "DISTE CLICK";
//}
buttonElem.onclick = () => inputElem.value = "DISTE CLICK";

/*************************************************
 * EJERCICIO 2
 * Eventos sobre múltiples elementos
 * Cambia el estatus de OFF a ON deslizando el mouse con un efecto hover
 *************************************************/

// Selecciona todos los <li> que estén dentro de un elemento con clase "hover-list"
//querySelectorAll Busca TODOS los elementos que coincidan. Devuelve un NodeList.
  //".hover-list li"
//.hover-list → clase
//li → etiqueta
// “li dentro de hover-list”
const listItems = document.querySelectorAll(".hover-list li");
// <ul class="hover-list"><li>OFF</li><li>OFF</li><li>OFF</li> </ul>

listItems.forEach(li =>
  //forEach Método para recorrer listas. Ejecuta la función una vez por elemento.
  //li Variable temporal.Representa un <li> distinto en cada vuelta.


  li.addEventListener("mouseover", () => li.textContent = "ON")
  //addEventListener Método para escuchar eventos. Permite múltiples eventos sin sobrescribirse.
  //"mouseover"Evento del mouse. Se dispara cuando el cursor entra al elemento.
  //textContent Propiedad del DOM. Cambia todo el texto interno del elemento.
);

/*************************************************
 * EJERCICIO 3
 * Selección con pseudo-clases CSS
 * Da click al boton y cambia el contenido del id con excepcion del no permitido
 *************************************************/

document.querySelector("#btn3").onclick = () =>{
  //#btn3 Selector por id.
//.onclick Evento click.


//querySelectorAll selecciona todos los elementos de la lista id lista elementos li y el id deshablilitado
/*:not()Pseudo-clase CSS.Excluye el elemento indicado.
 Selecciona:Todos los <li>Excepto el que tenga id="deshabilitado"
.forEach(li =>
  li.textContent = "Cambio de id"
);
Recorre cada li válido.
Cambia su texto.*/
  document.querySelectorAll("#lista li:not(#deshabilitado)")
.forEach(li =>li.textContent = "Cambio de id");
};

/*************************************************
 * EJERCICIO 4
 * Evento simple
 *************************************************/

// Al hacer clic en el botón con id "btnUnico"
// se muestra una alerta
document.querySelector("#btnUnico").onclick = () => alert("Funciona"); 
/*************************************************
 * EJERCICIO 5
 * Función separada para evento
 *************************************************/
function completarTexto() {
document.querySelector("#input5").value ="HELLO";
}
document.querySelector("#btn5").onclick = completarTexto;
/*************************************************
 * EJERCICIOS 6 y 7
 * Mouse enter y mouse leave
 *************************************************/
// Selecciona el elemento con id "circle"
const circle = document.querySelector("#circle");

// Cuando el mouse entra al círculo, cambia el color de fondo
circle.addEventListener("mouseenter", () =>
  circle.style.background = "orange"
);
// Cuando el mouse sale del círculo, vuelve a negro
circle.addEventListener("mouseleave", () =>
  circle.style.background = "black"
);
/*************************************************
 * EJERCICIO 8
 * Movimiento con el mouse
 *************************************************/
// 👉 Selecciona el contenedor
// Agrega un evento cuando el mouse se mueve dentro del contenedor
 document.querySelector("wrapMove").addEventListener("mosemove", () =>{

// 👉 Selecciona el rectángulo
document.querySelector("boxMove");

// 👉 Cada movimiento del mouse:
// 👉 mueve el rectángulo 1px a la derecha
// ❓ Pista: offsetLeft + "px"
box.style.left = offsetLeft  + 1  + px; 

});


