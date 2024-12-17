const buttons=document.querySelectorAll("button");
const feliz=document.querySelector(".feliz");
console.log(buttons);

buttons[0].addEventListener("click",()=>{
    feliz.textContent="MERRY CHRISTMAS!";
    // feliz.style.color="green";
})