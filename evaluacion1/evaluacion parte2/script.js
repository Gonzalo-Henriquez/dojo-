// box1

const button = document.getElementById("but");
const counter = document.getElementById("counter");

    button.addEventListener("click", () => {

    const currentCount = parseInt(counter.textContent);
    counter.textContent = currentCount + 1;
});

// box2

const button1 = document.getElementById("butt");
const counter2 = document.getElementById("counter2");

    button1.addEventListener("click", () => {

    const currentCount1 = parseInt(counter2.textContent);
    counter2.textContent = currentCount1 + 1;
});

// box3

const button2 = document.getElementById("buttt");
const counter3 = document.getElementById("counter3");

    button2.addEventListener("click", () => {

    const currentCount2 = parseInt(counter3.textContent);
    counter3.textContent = currentCount2 + 1;
});
