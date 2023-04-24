const gameContainer = document.querySelector('.container');
const userResult = document.querySelector('.user-result img');
const compResult = document.querySelector('.comp-result img');
const result = document.querySelector('.result')
const optionImg = document.querySelectorAll('.option-images');

optionImg.forEach((img, index) => {
    img.addEventListener('click', (e) => {
        img.classList.add('active');

        userResult.src = compResult.src = 'img/fist.svg';
        result.textContent = 'Wait...'

        optionImg.forEach((img2, index2) => {
            index !== index2 && img2.classList.remove('active');
        });

        gameContainer.classList.add('start')

        let time = setTimeout(() => {
            gameContainer.classList.remove('start')
            let imgSrc = e.target.querySelector('img').src;
            userResult.src = imgSrc;

            let randomNum = Math.floor(Math.random() * 3);

            let compImg = ['img/fist.svg', 'img/papper.svg', 'img/scissors.svg'];
            compResult.src = compImg[randomNum];

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

            result.textContent = userValue === compValue ? 'Draw' : `${outcomeValues} won!`

            console.log(outcomeValues);
        }, 2300)

    });
})