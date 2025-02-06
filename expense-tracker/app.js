import { auth, db } from "./firebase-config.js";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { signOut } from "firebase/auth";

// Logout
document.getElementById("logout-btn").addEventListener("click", () => {
    signOut(auth).then(() => {
        window.location.href = "index.html"; // Redirect to login
    });
});

// Add Expense
document.getElementById("add-expense-btn").addEventListener("click", async () => {
    const name = document.getElementById("expense-name").value;
    const amount = document.getElementById("expense-amount").value;

    if (name && amount) {
        try {
            await addDoc(collection(db, "expenses"), {
                name: name,
                amount: parseFloat(amount),
                timestamp: new Date()
            });

            alert("Expense Added!");
            loadExpenses();
        } catch (error) {
            console.error("Error adding expense:", error);
        }
    }
});

// Load Expenses
async function loadExpenses() {
    const expenseList = document.getElementById("expense-list");
    expenseList.innerHTML = "";

    const querySnapshot = await getDocs(collection(db, "expenses"));
    querySnapshot.forEach((doc) => {
        let expense = doc.data();
        let li = document.createElement("li");
        li.innerText = `${expense.name} - ₹${expense.amount}`;
        expenseList.appendChild(li);
    });
}

loadExpenses();
