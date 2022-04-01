let canvas = document.getElementById('duck');
let context = canvas.getContext('2d'); //context - Renderiza o desenho dentro do canvas(2D ou 3D)
let box = 32;
let score = 0;
let duck = [];
duck[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = 'right';
let drawnDuckling ={
    x: Math.floor(Math.random() * 14 + 1) * box,
    y: Math.floor(Math.random() * 14 + 1) * box
}

function creatBackground() {
    context.fillStyle ='Navy';
    context.fillRect(0, 0, 16*box, 16*box);
}

function creatDuck(){
    for(i = 0; i < duck.length; i++){
        context.fillStyle = 'Gold';
        context.fillRect(duck[i].x, duck[i].y, box, box);
    }
}

function duckling(){
    context.fillStyle = 'Yellow';
    context.fillRect(drawnDuckling.x, drawnDuckling.y, box, box);
}

document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down')  direction = 'up';
    if(event.keyCode == 39 && direction != 'left')  direction = 'right';
    if(event.keyCode == 40 && direction != 'up')    direction = 'down';
}

function startGame(){
    if(duck[0].x > 15 * box && direction == 'right') duck[0].x = 0;
    if(duck[0].x < 0 && direction == 'left') duck[0].x = 16 * box;
    if(duck[0].y > 15 * box && direction == 'down') duck[0].y = 0;
    if(duck[0].y < 0 && direction == 'up') duck[0].y = 16 * box;

    for(i = 1; i < duck.length; i++){
        if(duck[0].x == duck[i].x && duck[0].y == duck[i].y){
            clearInterval(game);
            alert('Fim de jogo! Recarregue a página para jogar novamente.');
        }
    }

    creatBackground();
    creatDuck();
    duckling();

    let duckX = duck[0].x;
    let duckY = duck[0].y;

    if(direction == 'right') duckX += box;
    if(direction == 'left') duckX -= box;
    if(direction == 'up') duckY -= box;
    if(direction == 'down') duckY += box;

    if(duckX != drawnDuckling.x || duckY != drawnDuckling.y){
        duck.pop();
    } else{
       drawnDuckling.x = Math.floor(Math.random() * 14 + 1) * box;
       drawnDuckling.y = Math.floor(Math.random() * 14 + 1) * box;
       score++
       let point = document.getElementById('mark');
       point.innerHTML = score
    }

    let newDuck ={
        x: duckX,
        y: duckY
    }

    duck.unshift(newDuck);
}


let game = setInterval(startGame, 170);


