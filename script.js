const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];
const loading = document.querySelector(".user-list li h4");

getUsers();

filter.addEventListener("input", (e) => {
  filterUser(e.target.value);
});

async function getUsers() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const { results } = await res.json();

  results.forEach((user) => {
    const li = document.createElement("li");
    listItems.push(li);
    li.innerHTML = `<img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info">
    <h4>${user.name.first} ${user.name.last}</h4>
    <p>${user.location.city}, ${user.location.country}</p>
    </div>`;
    result.appendChild(li);
  });
  //   if (listItems.length != 0) {
  //     loading.classList.add("hide");
  //   } else {
  //     loading.classList.remove("hide");
  //   }
}
function filterUser(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      {
        item.classList.add("hide");
      }
    }
  });
}
