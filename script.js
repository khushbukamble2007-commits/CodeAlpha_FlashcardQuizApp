
let flashcards = [
    {
        question: "What is HTML?",
        answer: "HTML stands for HyperText Markup Language."
    },
    {
        question: "What is CSS?",
        answer: "CSS is used to style web pages."
    },
    {
        question: "What is JavaScript?",
        answer: "JavaScript makes websites interactive."
    },
    {
        question: "What is Python?",
        answer: "Python is a high-level programming language."
    },
    {
        question: "What is a Database?",
        answer: "A database stores and organizes data."
    }
];

let currentIndex = 0;
let answerVisible = false;

function displayCard() {
    let card = flashcards[currentIndex];

    document.getElementById("cardTitle").innerText =
        answerVisible ? "Answer" : "Question";

    document.getElementById("cardText").innerText =
        answerVisible ? card.answer : card.question;

    document.getElementById("showBtn").innerText =
        answerVisible ? "Hide Answer" : "Show Answer";

    document.getElementById("cardNumber").innerText =
        `Card ${currentIndex + 1} of ${flashcards.length}`;
}

function showAnswer() {
    answerVisible = !answerVisible;
    displayCard();
}

function nextCard() {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    answerVisible = false;
    displayCard();
}

function previousCard() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = flashcards.length - 1;
    }

    answerVisible = false;
    displayCard();
}

function addCard() {
    let question = document.getElementById("questionInput").value.trim();
    let answer = document.getElementById("answerInput").value.trim();

    if (!question || !answer) {
        alert("Please enter both question and answer!");
        return;
    }

    flashcards.push({ question, answer });

    currentIndex = flashcards.length - 1;
    clearInputs();
    answerVisible = false;
    displayCard();

    alert("Flashcard added successfully!");
}

function editCard() {
    if (flashcards.length === 0) return;

    let question = document.getElementById("questionInput").value.trim();
    let answer = document.getElementById("answerInput").value.trim();

    if (!question || !answer) {
        alert("Enter the updated question and answer!");
        return;
    }

    flashcards[currentIndex] = { question, answer };

    clearInputs();
    answerVisible = false;
    displayCard();

    alert("Flashcard updated successfully!");
}

function deleteCard() {
    if (flashcards.length === 0) return;

    if (confirm("Are you sure you want to delete this card?")) {
        flashcards.splice(currentIndex, 1);

        if (currentIndex >= flashcards.length) {
            currentIndex = Math.max(0, flashcards.length - 1);
        }

        answerVisible = false;
        displayCard();
    }
}

function clearInputs() {
    document.getElementById("questionInput").value = "";
    document.getElementById("answerInput").value = "";
}

displayCard();
