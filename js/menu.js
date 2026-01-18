const categoryBar = document.getElementById("categoryBar");
const menuGrid = document.getElementById("menuGrid");
const searchInput = document.getElementById("searchInput");

let currentCategory = "";

/* LOAD CATEGORIES */
function loadCategories() {
  categoryBar.innerHTML = "";

  Object.keys(menuData).forEach((category, index) => {
    const btn = document.createElement("button");
    btn.className = "category-btn";
    btn.textContent = category;

    if (index === 0) {
      btn.classList.add("active");
      currentCategory = category;
      renderMenu(menuData[category]);
    }

    btn.onclick = () => {
      document
        .querySelectorAll(".category-btn")
        .forEach(b => b.classList.remove("active"));

      btn.classList.add("active");
      currentCategory = category;
      renderMenu(menuData[category]);
    };

    categoryBar.appendChild(btn);
  });
}

/* RENDER MENU */
function renderMenu(items) {
  menuGrid.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>₹ ${item.price}</p>
    `;

    menuGrid.appendChild(card);
  });
}

/* SEARCH */
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  const filtered = menuData[currentCategory].filter(item =>
    item.name.toLowerCase().includes(query)
  );

  renderMenu(filtered);
});

/* INIT */
loadCategories();
