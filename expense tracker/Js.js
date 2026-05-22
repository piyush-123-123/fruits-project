let form = document.getElementById("expense-form");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  let amount =
    document.getElementById("amount").value;

  let description =
    document.getElementById("description").value;

  let category =
    document.getElementById("category").value;

  // create li
  let li = document.createElement("li");

  li.className =
    "list-group-item d-flex justify-content-between align-items-center";

  // create text
  let span = document.createElement("span");

  span.textContent =
    amount + " - " +
    description + " - " +
    category;

  // create button container
  let div = document.createElement("div");

  // edit button
  let editBtn =
    document.createElement("button");

  editBtn.textContent = "Edit";
  editBtn.type="button";

  editBtn.className =
    "btn btn-warning btn-sm me-2";

  editBtn.type = "button";

  // delete button
  let deleteBtn =
    document.createElement("button");
  deleteBtn.type="button";
  deleteBtn.textContent = "Delete";

  deleteBtn.className =
    "btn btn-danger btn-sm";

  deleteBtn.type = "button";

  // delete functionality
  deleteBtn.addEventListener("click", function () {

    li.remove();

  });

  // edit functionality
  editBtn.addEventListener("click", function () {

    document.getElementById("amount").value =
      amount;

    document.getElementById("description").value =
      description;

    document.getElementById("category").value =
      category;

    li.remove();

  });

  // append buttons
  div.appendChild(editBtn);

  div.appendChild(deleteBtn);

  // append text and buttons to li
  li.appendChild(span);

  li.appendChild(div);

  // append li to ul
  document.getElementById("list")
    .appendChild(li);

});