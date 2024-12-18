const buttons=document.querySelectorAll("button");
const feliz=document.querySelector(".feliz");
const mensajeContainer=document.querySelector(".mensaje");
const mensajeSlogan=document.querySelector(".slogan");
const contenedorBotones=document.querySelector(".container")
console.log(buttons);

buttons[0].addEventListener("click",()=>{
    // feliz.textContent="MERRY CHRISTMAS!";
    contenedorBotones.classList.add("show");  // Añade la clase para activar la transición
    mensajeContainer.textContent="";
    mensajeSlogan.style.display="none";
    mensajeContainer.classList.add("arbol");
    mensajeContainer.innerHTML=`
        <div class="birthday-gift">
            <div class="gift">
            <input id='click' type='checkbox'>
            <label class='click' for='click'></label>
            <div class="wishes">Merry Christmas!</div>
                <div class="sparkles">
                <div class="spark1"></div>
                <div class="spark2"></div>
                <div class="spark3"></div>
                <div class="spark4"></div>
                <div class="spark5"></div>
                <div class="spark6"></div>
                </div>
                </div>
        </div>
    `;
    
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

buttons[2].addEventListener("click",()=>{
    // feliz.textContent="MERRY CHRISTMAS!";
    contenedorBotones.classList.add("show");  // Añade la clase para activar la transición
    mensajeContainer.textContent="";
    mensajeSlogan.style.display="none";
    mensajeContainer.classList.add("arbol");
    mensajeContainer.innerHTML=`
        <div class="envelope-container">
  <input id="flap" type="checkbox">
  <label class="flap" for="flap"></label>
  <div class="envelope-back"></div>
  <div class="card">Merry Christmas!<br>EAG</div>
  <div class="card-front"></div> 
</div>
    `;
    
})


//CURSOR
document.body.style.cursor = "url('./img/christmas_tree_PNG12.png'), auto";


//JUEGO ÁRBOL


