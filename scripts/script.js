// Getting elements
const list_numbers = document.querySelectorAll('#line-numbers');
const input_number = document.getElementById('input-number');
const button_test = document.getElementById('button-test');

const randomNumber = () => {
    return String(parseInt(Math.random()*8888+1000));
}

const checkNumber = (number) => {
    const isGreater = false;
    if (number.length > 4){
        isGreater = true;
    }
    return isGreater;
}

const randomNum = randomNumber().split('');
const lives = 5;
const bulls = 0;
const cows = 0;

console.log(randomNum);

button_test.addEventListener('click', () => {
    const attempt = String(input_number.value).trim().split('');
    const isGreater = checkNumber(attempt);

    if (!isGreater){
        for (let i=0; i < 4; i++){
            if (attempt[i] == randomNum[i]){
                bulls += 1;
            } else if (attempt[i] in randomNum) {
                console.log("tem");
            }
        }
    }
});