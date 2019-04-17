const carLeft = document.querySelector('.car.left');
const carActive = document.querySelector('.car.active');
const carRight = document.querySelector('.car.right');
const arrowLeft = document.querySelector('.arrow.left');
const arrowRight = document.querySelector('.arrow.right');
const cars = ['car0', 'car1', 'car2'];
let indexLeft = 0;
let indexActive = 1;
let indexRight = 2;

const changeCarLeftDirection = () => {
    // carActive.animate([{
    //         // filter: 'brightness(0)',
    //         transform: 'scale(0.9) translate(-50%, -50%)',
    //     },
    //     {
    //         // filter: 'brightness(1)',
    //         transform: 'scale(1) translate(-50%, -50%)',
    //     }
    // ], {
    //     duration: 500,
    //     fill: "both",
    // });

    indexLeft++;
    indexActive++;
    indexRight++;

    console.log(indexLeft, indexActive, indexRight)

    indexLeft < cars.length ? carLeft.style.backgroundImage = `url(img/${cars[indexLeft]}.png)` : carLeft.style.backgroundImage = `url(img/${cars[indexLeft = 0]}.png)`;

    indexActive < cars.length ? carActive.style.backgroundImage = `url(img/${cars[indexActive]}.png)` : carActive.style.backgroundImage = `url(img/${cars[indexActive = 0]}.png)`;

    indexRight < cars.length ? carRight.style.backgroundImage = `url(img/${cars[indexRight]}.png)` : carRight.style.backgroundImage = `url(img/${cars[indexRight = 0]}.png)`;


}

const changeCarRightDirection = () => {
    // carActive.animate([{
    //         // filter: 'brightness(0)',
    //         transform: 'scale(0.9) translate(-50%, -50%)',
    //     },
    //     {
    //         // filter: 'brightness(1)',
    //         transform: 'scale(1) translate(-50%, -50%)',
    //     }
    // ], {
    //     duration: 500,
    //     fill: "both",
    // });

    indexLeft--;
    indexActive--;
    indexRight--;

    console.log(indexLeft, indexActive, indexRight)

    indexLeft >= 0 ? carLeft.style.backgroundImage = `url(img/${cars[indexLeft]}.png)` : carLeft.style.backgroundImage = `url(img/${cars[indexLeft = cars.length - 1]}.png)`;

    indexActive >= 0 ? carActive.style.backgroundImage = `url(img/${cars[indexActive]}.png)` : carActive.style.backgroundImage = `url(img/${cars[indexActive = cars.length - 1]}.png)`;

    indexRight >= 0 ? carRight.style.backgroundImage = `url(img/${cars[indexRight]}.png)` : carRight.style.backgroundImage = `url(img/${cars[indexRight = cars.length - 1]}.png)`;
}

arrowLeft.addEventListener('click', changeCarLeftDirection);
arrowRight.addEventListener('click', changeCarRightDirection);
carLeft.addEventListener('click', changeCarLeftDirection);
carRight.addEventListener('click', changeCarRightDirection);

// ---- TODO:
// create carActive.animate
// add cars.json
// make this page responsive