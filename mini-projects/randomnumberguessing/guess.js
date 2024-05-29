const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum}-${maxNum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please enter a valid number");
    } 
    else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number within the specified range");
    }
     else {
        attempts++;
     
        if (guess < answer) {
            window.alert("Too low! Try again.");
        } 
        else if (guess > answer) {
            window.alert("Too high! Try again.");
        }
         else {
           window.alert(`yayyy!! the answer was ${answer}. you got it in ${attempts} attempts and ${guess} guess....CONGRATULATIONS!!!<33`);
           running=false;
        }
    }
}
