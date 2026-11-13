const words = document.querySelectorAll(".grid.container > div");

function  randomize () {
    words.forEach((word) => {
         const rotation = Math.floor(Math.random() * 61) - 30;
         const x = Math.floor(Math.random() * 41) - 20;
         const y = Math.floor(Math.random() * 21) - 10;
       
         word.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;

    });
}   

randomize();
document.addEventListener("click",randomize);
    







