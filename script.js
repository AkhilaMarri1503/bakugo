function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskText;

  // Mark as complete on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.style.border = "none";
  delBtn.style.background = "transparent";
  delBtn.style.cursor = "pointer";
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent marking complete
    li.remove();
  });

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = ""; // clear input
}
