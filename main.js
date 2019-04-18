let carsObj = {}
const arrayCars = [];

const sliderSection = document.querySelector('section.slider');
const requestURL = 'cars.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function () {
    const carsText = request.response;
    carsObj = JSON.parse(carsText);
    createArray(carsObj);
    // changeCarLeftDirection(carsObj);
}

// fetch('http://example.com/movies.json')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (myJson) {
//         console.log(JSON.stringify(myJson));
//     });


const carsPath = ['car0', 'car1', 'car2'];
let indexLeft = 0;
let indexActive = 1;
let indexRight = 2;


const createArray = (jsonObj) => {
    const numCars = Object.keys(jsonObj).length;

    // --- SLIDER - create elements in html ---

    for (let i = 0; i < numCars; i++) {

        const divCar = document.createElement('div');
        divCar.classList.add('car');
        divCar.style.backgroundImage = `url(img/${jsonObj[`car${i}`].path})`;

        const h1Car = document.createElement('h1');
        h1Car.textContent = `${jsonObj[`car${i}`].name}`;

        const pCar = document.createElement('p');
        pCar.textContent = `${jsonObj[`car${i}`].desc}`;

        // --- SLIDER - start position ---
        if (i === indexLeft) {
            divCar.classList.add('left');
        }
        if (i === indexActive) {
            divCar.classList.add('active');
            h1Car.classList.add('active');
            pCar.classList.add('active');
        }
        if (i === indexRight) {
            divCar.classList.add('right');
        }

        sliderSection.appendChild(divCar);
        sliderSection.appendChild(h1Car);
        sliderSection.appendChild(pCar);
    }
}

const changeSlide = () => {

    console.log(document.querySelector('.active'));

}

changeSlide()

// console.log(arrayCars)

const carLeft = document.querySelector('.car.left');
const carActive = document.querySelector('.car.active');
const carRight = document.querySelector('.car.right');
const arrowLeft = document.querySelector('.arrow.left');
const arrowRight = document.querySelector('.arrow.right');


const setAnimate = () => {

    carActive.animate([{
            filter: 'opacity(0.4)',
            transform: 'scale(1.1) translate(-50%, -50%)',
            transformOrigin: 'left',
        },
        {
            filter: 'opacity(1)',
            transform: 'scale(1) translate(-50%, -50%)',
            transformOrigin: 'left'
        }
    ], {
        duration: 700,
        fill: "both",
    });
}



// const changeCarLeftDirection = (jsonObj) => {
//     const numCars = Object.keys(jsonObj).length;


//     console.log(numCars)

//     setAnimate();

//     console.log(indexLeft, indexActive, indexRight)

//     indexRight < numCars ? carRight.style.backgroundImage = `url(img/${jsonObj[`car${indexRight}`].path})` : carRight.style.backgroundImage = `url(img/${jsonObj[`car${indexRight = 0}`].path})`;

//     console.log(`url(img/${jsonObj[`car${indexLeft}`].path})`)

//     indexActive < numCars ? carActive.style.backgroundImage = `url(img/${jsonObj[`car${indexActive}`].path})` : carActive.style.backgroundImage = `url(img/${jsonObj[`car${indexActive = 0}`].path})`;

//     console.log(`url(img/${jsonObj[`car${indexActive}`].path})`)

//     indexRight < numCars ? carRight.style.backgroundImage = `url(img/${jsonObj[`car${indexRight}`].path})` : carRight.style.backgroundImage = `url(img/${jsonObj[`car${indexRight = 0}`].path})`;

//     console.log(`url(img/${jsonObj[`car${indexRight}`].path})`)


//     console.log(numCars)
//     indexLeft++;
//     indexActive++;
//     indexRight++;
// }

// const changeCarRightDirection = () => {
//     setAnimate();

//     indexLeft--;
//     indexActive--;
//     indexRight--;

//     console.log(indexLeft, indexActive, indexRight)

//     indexLeft >= 0 ? carLeft.style.backgroundImage = `url(img/${carsPath[indexLeft]}.png)` : carLeft.style.backgroundImage = `url(img/${carsPath[indexLeft = carsPath.length - 1]}.png)`;

//     indexActive >= 0 ? carActive.style.backgroundImage = `url(img/${carsPath[indexActive]}.png)` : carActive.style.backgroundImage = `url(img/${carsPath[indexActive = carsPath.length - 1]}.png)`;

//     indexRight >= 0 ? carRight.style.backgroundImage = `url(img/${carsPath[indexRight]}.png)` : carRight.style.backgroundImage = `url(img/${carsPath[indexRight = carsPath.length - 1]}.png)`;
// }

// arrowLeft.addEventListener('click', changeCarLeftDirection);
// arrowRight.addEventListener('click', changeCarRightDirection);
// carLeft.addEventListener('click', changeCarLeftDirection);
// carRight.addEventListener('click', changeCarRightDirection);


// ---- TODO:
// add cars.json
// make this page responsive