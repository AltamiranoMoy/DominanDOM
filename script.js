const porcentajeIva = 0.16

function sumarDosNumeros (numero1,numero2){
  return numero1 + numero2;
}

const sumarDosNumerosV2 = (numero1, numero2) => numero1 + numero2


function calcularIva (precio) {
  return precio * porcentajeIva
}

const calcularIvaV2 = precio => precio * porcentajeIva 

function calcularTotal(precio) {
  return sumarDosNumeros(precio, calcularIva(precio))
}

const calcularTotalV2 = precio => sumarDosNumerosV2(precio, calcularIvaV2(precio))

function imprimirTotal(precio) {
  console.log("Buen día, su total de hoy es " + calcularTotal(precio))
}

function rayarLaMadre() {
  console.log("Chinga tu madre")
}

const rayarLaMadreV2 = () => console.warn("Chinga tu madre")

//Evento
//Emisor ---->(evento) ----> suscriptor llama al callback

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
buttonElem.onclick = rayarLaMadreV2;

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
 * Al dar clik en el boton funciona aparece una alerta con el mismo texto
 *************************************************/

// Al hacer clic en el botón con id "btnUnico"
// se muestra una alerta
document.querySelector("#btnUnico").onclick = () => alert("Funciona"); 
/*************************************************
 * EJERCICIO 5
 * Función separada para evento
 * Al dar click  en el boton WORLD se muestra el texto HELLO en el input
 *************************************************/
function completarTexto() {
document.querySelector("#input5").value ="HELLO";
}
document.querySelector("#btn5").onclick = completarTexto;
/*************************************************
 * EJERCICIOS 6 y 7
 * Mouse enter y mouse leave
 * Al mover el mouse al ciculo se pinta en naranja 
 * Al retirar el mouse del circulo se pinta en negro
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
 * Al mover el mouse el recuadro se mueve a la derecha
 *************************************************/
// 👉 Selecciona el contenedor
// Agrega un evento cuando el mouse se mueve dentro del contenedor
document.querySelector("#wrapMove").addEventListener("mousemove", () => {

// 👉 Selecciona el rectángulo
const box = document.querySelector("#boxMove");
// 👉 Cada movimiento del mouse:
// 👉 mueve el rectángulo 1px a la derecha
// ❓ Pista: offsetLeft + "px"
box.style.left = box.offsetLeft  + 1  + "px"; 
});
/*************************************************
 * EJERCICIO 9
 * Drag & Drop
 * Al dar click al al cuadro azulse puede arrastrar al cuadro rojo 
 * al soltar el cuadro azul se queda dentro del rojo
 *************************************************/

// 👉 Selecciona el cuadrado rojo
const red = document.querySelector("#red");

// 👉 Selecciona el cuadrado azul
const blue = document.querySelector("#blue");

/* 👉 Permite arrastrar el rojo ondragstart
*= e =>  Es una arrow function.  e significa event (evento).
Es el objeto que contiene información sobre lo que está pasando.
*/
red.ondragstart = e =>
 
  // Guarda un dato en el objeto drag
  /*e.dataTransfer
  dataTransfer es un objeto especial del sistema de Drag & Drop.
Sirve para:Guardar información Pasarla al lugar donde se suelta el elemento
setData("id", "red") Aquí estamos guardando un dato dentro del evento
"id" → tipo de dato (puede ser cualquier etiqueta)
"red" → valor que estamos guardando
  */
  e.dataTransfer.setData("id", "red");
  
// 👉 Permite soltarlo en el azul
/*ondragover Se activa cuando estás arrastrando algo sobre el azul
e.preventDefault()Cancela el comportamiento por defecto del navegador
*/
blue.ondragover = e => e.preventDefault();
/*ondrop Se ejecuta cuando sueltas el elemento sobre el azul. */
blue.ondrop = e =>
  /*blue.appendChild(red);Mueve el elemento rojo dentro del azul */
blue.appendChild(red);  



/*************************************************
 * EJERCICIO 10
 * Eliminar elemento del DOM
 * Al dar click al boton eleminar rojo se desaparece el circulo rojo
 *************************************************/

// 👉 Selecciona el botón
document.querySelector("#deleteRed").onclick  = () =>

document.querySelector("#redCircle").remove();

// 👉 Al hacer click:
// 👉 elimina el círculo rojo COMPLETAMENTE
// ❓ Usa remove()
/*************************************************
 * EJERCICIO 11
 * Cambiar ID del elemento HTML
 *************************************************/
document.querySelector("#btn11").onclick  = () =>
document.querySelector("#input11").id = "entradaEl";  
/*************************************************
 * EJERCICIO 12
 * Crear y envolver elementos
 *************************************************/
// Selecciona el botón
const btn12 = document.querySelector("#btn12");

// Crea un nuevo div
const wrap = document.createElement("div");

// Asigna un id al div
wrap.id = "envolver";

// Inserta el div antes del botón
btn12.parentNode.insertBefore(wrap, btn12);

// Mueve el botón dentro del div
wrap.appendChild(btn12);

// Al hacer clic, cambia el texto del botón
btn12.onclick = () => btn12.textContent = "Envuelto OK";


/*************************************************
 * EJERCICIO 13
 * Crear elementos dinámicamente
 *************************************************/

// Al hacer clic en el botón de agregar
document.querySelector("#addTodo").onclick = () => {

  // Crea un nuevo <li>
  const li = document.createElement("li");

  // Asigna el texto del input al <li>
  li.textContent = todoInput.value;

  // Agrega el <li> a la lista
  todoList.appendChild(li);
};


/*************************************************
 * EJERCICIO 14
 * Manipular checkbox
 * al dar click al boton se marca el checkbox
 *************************************************/

// Al hacer clic en el botón
document.querySelector("#checkBtn").onclick = () =>

  // Marca el checkbox
  document.querySelector("#check").checked = true;
/*****************
 * EJERCICIO 15
 * Concatenar valores de inputs
 * al llenal los 2 primeros inputs y dar click al boton unir
 * se fucionan los 2 primeros inputs y los muestra en el 3ro
 *****************/
const nameInput = document.querySelector("#name");
const lastInput = document.querySelector("#last");
const fullInput = document.querySelector("#full");
const button  = document.querySelector("#btn15");

button.addEventListener("click", function () {
    fullInput.value = nameInput.value + " " + lastInput.value;
});

/*
document.querySelector("#btn15").onclick = () =>
  ull.value = `${name.value} ${last.value}`;

  */
/*****************
 * EJERCICIO 16
 * Contador usando el evento
al dar click al boton va incrementando el contador
*********************** */
// Al hacer clic en el elemento contador
document.querySelector("#counter").onclick = e =>
// Incrementa el texto del elemento clicado
e.target.textContent++;


/*************************************************
 * EJERCICIO 17
 * Filtro de lista 
 *************************************************/

filter.oninput = function() {

  // Convierte los hijos del elemento filterList en un arreglo real
  // filterList.children devuelve un HTMLCollection (no es array)
  // Array.from() lo convierte en un Array para poder usar forEach
  var childrenArray = Array.from(filterList.children);

   // Recorre cada elemento <li> dentro del arreglo
  childrenArray.forEach(function(li) {

    // Obtiene el texto que está dentro del <li>
    // y lo convierte a minúsculas para evitar problemas con mayúsculas
    var texto = li.textContent.toLowerCase();

    // Obtiene lo que el usuario escribió en el input
    // y lo convierte a minúsculas para comparar correctamente
    var filtro = filter.value.toLowerCase();

    // Verifica si el texto del <li> incluye lo que escribió el usuario
    if (texto.includes(filtro)) {
      
      // Si coincide, deja el display vacío
      // "" significa que usa el valor por defecto (normalmente "list-item")
      // Esto hace que el elemento se muestre
      li.style.display = "";
    } else {
      // Si NO coincide, cambia el display a "none"
      // Esto oculta completamente el elemento
      li.style.display = "none";
    }

  });

};     
// Cuando el usuario escribe en el input filtro
/*

  // Convierte los hijos de la lista en un arreglo
  [...filterList.children].forEach(li =>

    // Muestra u oculta el <li> según el texto
    li.style.display = li.textContent
      .toLowerCase()
      .includes(filter.value.toLowerCase())
        ? ""
        : "none"
  );
};*/

/*************************************************
 * EJERCICIO 18
 * Ocultar elementos al pasar el mouse
 *************************************************/

// Selecciona todos los elementos con clase "balloon"

document.querySelectorAll(".balloon").forEach(e =>
// Selecciona todos los elementos con clase "balloon"
  // Al pasar el mouse, los oculta
  e.onmouseover = () => e.style.visibility = "hidden"
);




/*************************************************
 * EJERCICIO 19
 * Animación con requestAnimationFrame
 *************************************************/

// Variable para controlar si se mueve o no
let moving = true;

// Selecciona el botón que se moverá
const btn = document.querySelector("#movingBtn");

// Función que mueve el botón
function mover() {
// Si no está activo, detiene la función
  if (!moving) return;

  // Mueve el botón 1px a la derecha
  btn.style.left = btn.offsetLeft + 1 + "px";

  // Llama nuevamente a la función
  requestAnimationFrame(mover);
}
// Inicia el movimiento automáticamente
mover();

// Evento click del botón
btn.addEventListener("click", () => {

  // Cambia entre true y false
  moving = !moving;

  // Si vuelve a estar en true, reinicia el movimiento
  if (moving) {
    mover();
  }
});