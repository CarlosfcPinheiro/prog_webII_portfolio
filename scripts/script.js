// Getting elements
const list_number = document.querySelectorAll('#line-number');
const input_number = document.getElementById('input-number');
const button_test = document.getElementById('button-test');
const bulls_span = document.getElementById('bulls-count');
const cows_span = document.getElementById('cows-count');
// Function to generate an random number with unique values
const randomNumber = () => {
    let isUnique;
    let number;
    do{
        number = String(parseInt(Math.random()*8888+1000));
        const numberArr = number.split('');
        // Set.size => Returns the unique values on the Set data structure
        isUnique = new Set(numberArr).size != numberArr.length;
    } while (isUnique);

    return number;
}
// Function to check and validate number lenth
const checkNumberLength = (number) => {
    let isGreater = false;
    if (number.length != 4 || number == ''){
        isGreater = true;
    }
    return isGreater;
}
// Function to check and validade unique values
const checkUniqueNumber = (numberArr) => {
    let isUnique = true;
    if (new Set(numberArr).size != numberArr.length){
        isUnique = false;
    }
    return isUnique;
}
// Function to write numbers
const writeNumber = (numberArr, index) => {
    const currentList = list_number[index];
    for (let i = 0; i < 4; i++){
        const div_number = currentList.getElementsByTagName('div');
        const span = div_number[i].getElementsByTagName('span')[0];

        span.textContent = numberArr[i];
    }
}

// Global variables
const randomNum = randomNumber();
const randomNumSplited = randomNum.split('')
let lives = 5;
let bulls = 0;
let cows = 0;

//console.log(randomNum);
// Button clicked logic listener
button_test.addEventListener('click', () => {
    bulls = 0;
    cows = 0;

    const attempt = String(input_number.value).trim();
    const attemptSplited = attempt.split('');
    // Logic validators
    const isGreater = checkNumberLength(attempt);
    const isUnique = checkUniqueNumber(attemptSplited);
    // To get actual line of divs
    const actualLine = Math.abs(lives-5);

    if (attempt == randomNum){
        console.log("É igual");
    }
    else if (!isGreater && isUnique){
        // Write number on the span elements
        writeNumber(attemptSplited, actualLine);
        for (let i=0; i < 4; i++){
            if (attemptSplited[i] === randomNumSplited[i]){
                bulls += 1;
                console.log(`Added bulls to ${attemptSplited[i]}`);
            } else if (randomNumSplited.includes(attemptSplited[i])) {
                console.log(randomNumSplited);
                cows += 1;
                console.log(`Added cows to ${attemptSplited[i]}`);
            }
        }
        bulls_span.textContent = bulls;
        cows_span.textContent = cows;

        lives -= 1;

    } else {
        console.log("Erro ao enviar tentativa.");
    }
});