// const form = document.getElementById("expense-form");
// const titleInput = document.getElementById("title");
// const amountInput = document.getElementById("amount");
// const expenseList = document.getElementById("expense-list");
// const totalDisplay = document.getElementById("total")

// let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// displayExpenses();

// form.addEventListener("submit" , function(e){

//     e.preventDefault();
//     const title = titleInput.value;
//     const amount = Number(amountInput.value);

//     const expense = {
//         id : Date.now(),
//         title,
//         amount
//     };

//     expenses.push(expense);
//     localStorage.setItem("expenses" , JSON.stringify(expenses));
//     displayExpenses();
//     form.reset ();
// });

// function displayExpenses(){
//     expenseList.innerHTML = "";
//     let total = 0;

//     expenses.forEach(expense => {

//         total += expense.amount;

//         const li = document.createElement("li");

//         li.innerHTML = 

//         `${expense.title}
//         ₹${expense.amount}`;
//         expenseList.appendChild(li);
        
//     });

//     totalDisplay.textContent = total;
// }