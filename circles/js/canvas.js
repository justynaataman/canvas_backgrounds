widthw = window.innerWidth;
heighth = window.innerHeight;

const can = document.getElementById('canvas');

can.width = widthw;
can.height = heighth;

const ctx = can.getContext('2d');
const tab = [];
const colory = ['#210d23', '#400027', '#6b0027', '#b61130', '#e4292b'];

function halfnegative () {
    var random = Math.random();
    random *= Math.floor(Math.random()*2) === 1 ? 1 : -1;
    return random;
}


function createp() {
    var  whichcolor = [Math.floor(Math.random() * colory.length)];
    const particle = {
        x: Math.random() * (widthw - 1) + 1,
        y:  Math.random() * (heighth - 1) + 1,
        xvel: halfnegative(),
        yvel: halfnegative(),
        radius: 4,
        color: colory[whichcolor],

    };

    tab.push(particle);

}
function allparticles(){

    for (let i = 0; i < 600; i += 1){
        createp();
    }
}
allparticles();

function draw(){
    ctx.clearRect(0, 0, can.width, can.height);
    for (let i = 0; i < tab.length; i += 1){
        const p = tab[i];
        ctx.fillStyle = p.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = p.color;
        ctx.stroke();
        p.x += p.xvel;
        p.y -= p.yvel;
    }
    window.setTimeout(newparts, 100);
    window.requestAnimationFrame(draw);


}
function newparts(){

    tab.shift();
    createp();
}


window.requestAnimationFrame(draw);




