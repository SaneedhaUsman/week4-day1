const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");
const cardsContainer = document.getElementById("cardsContainer");

let cards = JSON.parse(localStorage.getItem("flashcards")) || [];

renderCards();

function addCard(){

    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();

    if(!question || !answer){

        alert("Please enter both question and answer!")
        return;
    }
const card = {question, answer};

cards.push(card);

localStorage.setItem("flashcards",JSON.stringify(cards));
questionInput.value = "";
answerInput.value = "";

renderCards();

}

function renderCards(){

    cardsContainer.innerHTML = "";

    cards.forEach((card , index) => {
      const cardDiv = document.createElement("div");
       cardDiv.className = "card" ;

       const text = document.createElement("p");
       text.textContent = card.question;
       cardDiv.addEventListener("click" ,() =>{
      text.textContent = 
    text.textContent === card.question
    ? card.answer : card.question;

       } )
        const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Delete";
                deleteBtn.addEventListener("click" , (e) => {
     e.stopPropagation();
     cards.splice(index,1);
     localStorage.setItem("flashcards", JSON.stringify(cards));
     renderCards();

                });
        cardDiv.appendChild(text);
        cardDiv.appendChild(deleteBtn);

      cardsContainer.appendChild(cardDiv);
    });


}

