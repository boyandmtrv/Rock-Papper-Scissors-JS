const gameContainer = document.querySelector('.container');
const userResult = document.querySelector('.user-result img');
const compResult = document.querySelector('.comp-result img');
const result = document.querySelector('.result');
const optionImg = document.querySelectorAll('.option-images');
const userPoints = document.querySelector('.user-points b');
const compPoints = document.querySelector('.comp-points b');
const drawPoints = document.querySelector('.total-draw b')
const totalGamesPlayed = document.querySelector('.total-games b');


let userCounter = 0;
let compCounter = 0;
let totalCounter = 0;
let totalDrawCounter = 0;

optionImg.forEach((img, index) => {
    img.addEventListener('click', (e) => {
        img.classList.add('active');

        let userResultSrc = 'img/granite.png';
        if (userResult) {
            userResultSrc = e.target.querySelector('img').src;
            userResult.src = userResultSrc;
        }

        if (compResult) {
            compResult.src = 'img/granite.png';

            optionImg.forEach((img2, index2) => {
                index !== index2 && img2.classList.remove('active');
            });

            gameContainer.classList.add('start');

            let time = setTimeout(() => {
                gameContainer.classList.remove('start');
                if (userResult) {
                    userResult.src = userResultSrc;
                }

                let randomNum = Math.floor(Math.random() * 3);

                let compImg = ['img/granite.png', 'img/old-paper.png', 'img/scissors.png'];
                if (compResult) {
                    compResult.src = compImg[randomNum];
                }

                let compValue = ['R', 'P', 'S'][randomNum];
                let userValue = ['R', 'P', 'S'][index];

                let outcome = {
                    RR: 'Draw',
                    RP: 'Computer',
                    RS: 'User',
                    PP: 'Draw',
                    PR: 'User',
                    PS: 'Computer',
                    SS: 'Draw',
                    SR: 'Computer',
                    SP: 'User',
                };

                let outcomeValues = outcome[userValue + compValue];

                if (result) {
                    if (userValue === compValue) {
                        result.textContent = 'Draw';
                        totalDrawCounter++;
                    } else {
                        result.textContent = `${outcomeValues} won!`;
                        if (outcomeValues === 'User') {
                            userCounter++;
                        } else if (outcomeValues === 'Computer') {
                            compCounter++;
                        }
                    }
                };

                if (drawPoints) {
                    drawPoints.textContent = totalDrawCounter;
                };

                if (userPoints) {
                    userPoints.textContent = userCounter;
                }
                if (compPoints) {
                    compPoints.textContent = compCounter;
                }

                totalCounter++;
                if (totalGamesPlayed) {
                    totalGamesPlayed.textContent = totalCounter;
                }

                console.log(outcomeValues);
            }, 2300);
        }
    });
});
