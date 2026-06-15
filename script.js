const messages = [
"Are you sure?",
"Really sure????",
"100% sure?",
"Pleeease...",
"Think again!",
"I'll be sad if you say no...",
"Very, very sad...",
"Super duper sad...",
"Okay... I won't ask again...",
"Just kidding, say yes! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}