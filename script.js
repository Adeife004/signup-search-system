let formsWrapper = document.getElementById("formsWrapper");
let goToSearch = document.getElementById("goToSearch");
let goToSignup = document.getElementById("goToSignup");
let searchForm = document.getElementById("search-form");
let searchInput = document.getElementById("searchInput");
let usersTableBody = document.getElementById("usersTableBody");

let peopleArr = [];

// Switch between signup and search pages
goToSearch.addEventListener("click", () => {
  formsWrapper.classList.add("show-search");
});

goToSignup.addEventListener("click", () => {
  formsWrapper.classList.remove("show-search");
});

// Handle sign-up
function submitForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let age = document.getElementById("age").value.trim();
  let address = document.getElementById("address").value.trim();

  // check if all fields are filled
  if (!name || !email || !age || !address) {
    alert("Please fill all fields!");
    return;
  }

  // check if the email already exists
  let existingUser = peopleArr.find(
    (person) => person.email.toLowerCase() === email.toLowerCase()
  );

  if (existingUser) {
    alert("This email has already been used!");
    return;
  }

  // people object and pushing to an array
  let person = { name, email, age, address };
  peopleArr.push(person);

  // sort helps in displaying names or data or items alphabetically depending on the condition given using the localeCompare method
  peopleArr.sort((a, b) => a.name.localeCompare(b.name));
  displayTable(peopleArr);

  // clear the form
  document.getElementById("signup-form").reset();
}

// Display all users in the table
function displayTable(data) {
  usersTableBody.innerHTML = "";

  if (data.length === 0) {
    usersTableBody.innerHTML = `<tr><td colspan="4">No registered users yet.</td></tr>`;
    return;
  }

  data.forEach((person) => {
    let row = `
      <tr>
        <td>${person.name}</td>
        <td>${person.email}</td>
        <td>${person.age}</td>
        <td>${person.address}</td>
      </tr>
    `;
    usersTableBody.innerHTML += row;
  });
}

// Search users by name, email, age or address
// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let query = searchInput.value.trim().toLowerCase();

//   let results = peopleArr.filter(
//     (person) =>
//       person.name.toLowerCase().includes(query) ||
//       person.email.toLowerCase().includes(query) ||
//       person.age.toLowerCase().includes(query) ||
//       person.address.toLowerCase().includes(query)
//   );

//   displayTable(results);
// });