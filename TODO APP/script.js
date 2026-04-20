// Soo qabo walxaha aan u baahanahay
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Marka badhanka la riixo
addBtn.addEventListener("click", function () {
    const taskValue = taskInput.value;

    if (taskValue.trim() !== "") {
        // Samee 'li' cusub
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${taskValue}</span>
            <button class="delete-btn">X</button>
        `;

        // Ku dar liiska
        taskList.appendChild(li);

        // Nadiifi sanduuqa qoraalka
        taskInput.value = "";

        // Shaqada tirtirista
        li.querySelector(".delete-btn").addEventListener("click", function () {
            li.remove();
        });
    } else {
        alert("Fadlan qor wax qabad!");
    }
});