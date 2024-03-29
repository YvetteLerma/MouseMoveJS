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

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7)
        ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
        `; //you can see the values change in the console when hovering over the text - in the h1
}

hero.addEventListener('mousemove', shadow);