const buttons=document.querySelectorAll("button");
const feliz=document.querySelector(".feliz");
const mensajeContainer=document.querySelector(".mensaje");
const mensajeSlogan=document.querySelector(".slogan");
const contenedorBotones=document.querySelector(".container")
console.log(buttons);

buttons[0].addEventListener("click",()=>{
    feliz.textContent="MERRY CHRISTMAS!";
})

buttons[1].addEventListener("click",()=>{
    contenedorBotones.classList.add("show");  // Añade la clase para activar la transición
    // mensajeContainer.style.display="none";
    mensajeContainer.textContent="";
    mensajeSlogan.style.display="none";
    mensajeContainer.classList.add("arbol");
    mensajeContainer.innerHTML=`
        <div id="christmas-tree" class="christmas-tree">
        <div class="tree">
          <div class="tree-details"></div>
        </div>
        <div class="lights">
          <div class="row-one"></div>
          <div class="row-two"></div>
        </div>
        <div class="balls"></div>
        <div class="star"></div>
        <div class="shadow"></div>
      </div>
    `;
})



//CURSOR
document.body.style.cursor = "url('./img/christmas_tree_PNG12.png'), auto";


