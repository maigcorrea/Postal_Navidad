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
    mensajeContainer.style.display="none";
    mensajeSlogan.style.display="none";
})



//CURSOR
document.body.style.cursor = "url('./img/christmas_tree_PNG12.png'), auto";