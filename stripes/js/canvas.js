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
        radius: 3,
        color: colory[whichcolor],

    };

    tab.push(particle);

}
function allparticles(){

    for (let i = 0; i < 50; i += 1){
        createp();
    }
}
allparticles();

function draw(){

    for (let i = 0; i < tab.length; i += 1){
        const p = tab[i];
        //ctx.fillStyle = p.color;
        ctx.lineWidth = 1;
        ctx.beginPath();

        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = p.color;
        ctx.stroke();
        p.x += p.xvel;
        p.y -= p.yvel;
    }

    window.requestAnimationFrame(draw);


}
window.requestAnimationFrame(draw);




