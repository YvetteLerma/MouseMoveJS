const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; //100px

function shadow(e) {
    //get width and height of thing hovering over -- here it is the hero section
    const { offsetWidth: width, offsetHeight: height} = hero;
    let{ offsetX: x, offsetY: y} = e;

    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = (x / width * walk) - (walk / 2);
    const yWalk = (y / width * walk) - (walk / 2); //this gives you pixel values

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;
}

hero.addEventListener('mousemove', shadow);