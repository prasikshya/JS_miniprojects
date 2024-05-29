document.addEventListener("DOMContentLoaded", function () {
    const myText = document.getElementById("Mytext");
    const mySubmit = document.getElementById("mySubmit");
    const result = document.getElementById("result");
    let age;

    mySubmit.onclick = function () {
        age = myText.value;
        age = Number(age);

        if (age >= 100) {
            result.textContent = `You're too old for this site`;
        } else if (age == 0) {
            result.textContent = `Either you're a baby or you haven't entered the age`;
        } else if (age >= 18) {
            result.textContent = `You're eligible to use this site... yayyy!`;
        } else if (age < 0) {
            result.textContent = `Age can't be below 0... check and try again!!`;
        } else {
            result.textContent = `You must be between 18 and 100 to enter this site...`;
        }
    };
});
