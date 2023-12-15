let display = document.querySelector('.display-grid'); 
let buttonCreate = document.querySelector('#grid-create');
buttonCreate.addEventListener('click', ()=>{
    for(let i = 0; i < 36; i++){
        console.log(i);
        let divSquare = document.createElement('div'); 
        divSquare.classList.add("square");

        display.appendChild(divSquare);
    }


});