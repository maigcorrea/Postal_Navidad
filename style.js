const buttons=document.querySelectorAll("button");
const feliz=document.querySelector(".feliz");
const mensajeContainer=document.querySelector(".mensaje");
const mensajeSlogan=document.querySelector(".slogan");
const contenedorBotones=document.querySelector(".container")
console.log(buttons);
const boton=document.createElement("button");

buttons[0].addEventListener("click",()=>{
    // feliz.textContent="MERRY CHRISTMAS!";
    contenedorBotones.classList.add("show");  // Añade la clase para activar la transición
    
    
    boton.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"/>
        </svg>
    `;

    boton.classList.add("botonSi");
    boton.classList.remove("boton");
    
    boton.addEventListener("click",()=>{
        contenedorBotones.classList.remove("show");
        mensajeContainer.classList.remove("arbol");
        // boton.style.display="none";
        boton.classList.remove("botonSi");
        boton.classList.add("boton");

        mensajeContainer.textContent="";
        mensajeSlogan.style.display="block";
        mensajeContainer.innerHTML=`
            <p class="feliz">FELIZ NAVIDAD!</p>
        `;
    })



    contenedorBotones.append(boton);
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
    
    
    boton.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"/>
        </svg>
    `;
    // boton.style.display="block";
    boton.classList.add("botonSi");
    boton.classList.remove("boton");
    
    boton.addEventListener("click",()=>{
        contenedorBotones.classList.remove("show");
        mensajeContainer.classList.remove("arbol");
        // boton.style.display="none";
        boton.classList.remove("botonSi");
        boton.classList.add("boton");

        mensajeContainer.textContent="";
        mensajeSlogan.style.display="block";
        mensajeContainer.innerHTML=`
            <p class="feliz">FELIZ NAVIDAD!</p>
        `;
    })
    contenedorBotones.append(boton);



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

    boton.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"/>
        </svg>
    `;
    boton.classList.add("botonSi");
    boton.classList.remove("boton");
    
    boton.addEventListener("click",()=>{
        contenedorBotones.classList.remove("show");
        mensajeContainer.classList.remove("arbol");
        // boton.style.display="none";
        boton.classList.remove("botonSi");
        boton.classList.add("boton");

        mensajeContainer.textContent="";
        mensajeSlogan.style.display="block";
        mensajeContainer.innerHTML=`
            <p class="feliz">FELIZ NAVIDAD!</p>
        `;
    })
    contenedorBotones.append(boton);


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


