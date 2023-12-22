let userPick = -1;
let color ;
let rep = (userPick < 100 && userPick > 0) ? userPick : 32;
let inter = -1; 

let display = document.querySelector('.display-grid'); 
let buttonCreate = document.querySelector('#grid-create');
let buttonClear = document.querySelector('#clear');
let buttonUserPick = document.querySelector('#user-pick');
let buttonRainbow = document.querySelector('#rainbow-mode');
let buttonStop = document.querySelector('#stop');
let pickColor = document.querySelector('#color-picker');

function createGrid(rep=32){
    cant = (100 / rep);
    if(display.innerHTML == ""){
        for(let i = 0; i < rep; i++){    
            for (let j = 0; j < rep; j++) {       
               let divSquare = document.createElement('div'); 
                divSquare.classList.add("square");
                divSquare.style.height =  cant  + "%";
                divSquare.style.width = cant + "%";                
                display.appendChild(divSquare);                                 
            };   
        };
    }
}//create grid 
function drawing(e, color="black") {     
    e.target.style.backgroundColor = color;
}

function draw(color){
    let divSquares = document.querySelectorAll('.square'); 
    let isDrawing = false;
    
    divSquares.forEach(div =>  {
        div.addEventListener("mousedown", (e)=>{
            isDrawing = true;  
            if(isDrawing == true){
                drawing(e, color);
            }         
        });
        div.addEventListener("mouseover", (e)=>{                 
            if(isDrawing == true){
                drawing(e, color);
            }
        });
        div.addEventListener("mouseup", (e)=>{
            isDrawing = false;                   
        });
    });
}//draw
    function randomColor(){
        let simbolos, color;
        simbolos = "0123456789ABCDEF";
        color = "#";

        for(var i = 0; i < 6; i++){
            color = color + simbolos[Math.floor(Math.random() * 16)];
        }
        return color;
    }

//clear 
buttonClear.addEventListener("click", ()=>{
    display.innerHTML = "";
    createGrid();
    draw();
}); 

buttonUserPick.addEventListener("click",()=>{
    display.innerHTML = "";
    userPick = prompt("Select a number for your board!", 0);
    createGrid(userPick);
    draw();
}); 

buttonRainbow.addEventListener("click", ()=>{ 
    
    if(inter){
        let color = ""; 
        inter = setInterval(()=>{
            color = randomColor();
            draw(color);
        }, 100);
    }
    
    buttonStop.addEventListener("click", ()=>{
        clearInterval(inter);
        draw(color);
    });
    
});

pickColor.addEventListener("change", ()=>{
  
    
    color = document.querySelector('#color-picker').value;
    console.log(color);
    draw(color);
});

createGrid(rep);
draw();
/*https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event */