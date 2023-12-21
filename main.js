let display = document.querySelector('.display-grid'); 
let buttonCreate = document.querySelector('#grid-create');
let buttonClear = document.querySelector('#clear');
let buttonUserPick = document.querySelector('#user-pick');


let userPick = -1;
buttonUserPick.addEventListener("click",()=>{
    display.innerHTML = "";
    userPick = prompt("give me a number for youre etch!", 0);
});






buttonCreate.addEventListener('click', ()=>{
    let rep = (userPick < 100 && userPick > 0) ? userPick: 32;
    console.log("click");
    if(display.innerHTML == ""){
        for(let i = 0; i < rep; i++){    
            for (let j = 0; j < rep; j++) {       
               let divSquare = document.createElement('div'); 
                divSquare.classList.add("square");
                cant = (100 / rep); 
                divSquare.style.height =  cant  + "%";
                divSquare.style.width = cant + "%";                
                display.appendChild(divSquare);                                 
            }    
        }
    }
        let divSquares = document.querySelectorAll('.square'); 
        let isDrawing = false;
        divSquares.forEach(div =>  {
                function draw(e) {
                    let colorPick = document.querySelector('#color-picker').value;
                    
                    e.target.style.backgroundColor = colorPick;
                }

                div.addEventListener("mousedown", (e)=>{
                    isDrawing = true;
                    
                });
                div.addEventListener("mouseover", (e)=>{
                    
                    if(isDrawing == true){
                       draw(e);
                    }
                });
                div.addEventListener("mouseup", (e)=>{
                    isDrawing = false;
                    
                });

 
        });

}); 


//clear 
buttonClear.addEventListener("click", ()=>{
    display.innerHTML = "";
}); 




/*https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event */