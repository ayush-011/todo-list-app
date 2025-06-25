const Input = document.getElementById("input");
const addBtn = document.getElementById("add-btn");
const ul = document.getElementById("task-list");

Input.addEventListener("input", () => {
  const text = Input.value.trim();
  addBtn.disabled = text === "";
});

Input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !addBtn.disabled) {
    addBtn.click();
  }
});

addBtn.addEventListener("click", () => {
  const inputText = Input.value.trim();
  const li = document.createElement("li");
  ul.appendChild(li);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  li.appendChild(checkbox);

  const span = document.createElement("span");
  span.innerText = inputText;
  span.classList.add("span");
  li.appendChild(span);

  checkbox.addEventListener("change", () => {
    span.classList.toggle("checked", checkbox.checked);
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "✖";
  deleteBtn.classList.add("delete-btn");
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  Input.value = "";
  addBtn.disabled = true;
});
