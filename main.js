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
}
let indexLeft = 0;
let indexActive = indexLeft + 1;
let indexRight = indexLeft + 2;

const createArray = (jsonObj) => {
    const numCars = Object.keys(jsonObj).length;
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    const changeCarRightDirection = () => {
        indexLeft < numCars - 1 ? indexLeft++ : indexLeft = 0;
        indexActive < numCars - 1 ? indexActive++ : indexActive = 0;
        indexRight < numCars - 1 ? indexRight++ : indexRight = 0;
        sliderSection.innerHTML = `<div class="arrow arrow-left"><img src="img/arrow.png" alt="arrow"></div>
        <div class="arrow arrow-right"><img src="img/arrow.png" alt="arrow"></div>`;
        createArray(jsonObj)
    }

    const changeCarLeftDirection = () => {
        indexLeft > 0 ? indexLeft-- : indexLeft = numCars - 1;
        indexActive > 0 ? indexActive-- : indexActive = numCars - 1;
        indexRight > 0 ? indexRight-- : indexRight = numCars - 1;
        sliderSection.innerHTML = `<div class="arrow arrow-left"><img src="img/arrow.png" alt="arrow"></div>
        <div class="arrow arrow-right"><img src="img/arrow.png" alt="arrow"></div>`;
        createArray(jsonObj)
    }

    arrowLeft.addEventListener('click', changeCarLeftDirection);
    arrowRight.addEventListener('click', changeCarRightDirection);

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
    const carActive = document.querySelector('.car.active');
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
    setAnimate();
}


// TODO make this page more responsive