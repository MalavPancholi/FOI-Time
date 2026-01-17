const categoryBar = document.getElementById("categoryBar");
const menuGrid = document.getElementById("menuGrid");
const searchInput = document.getElementById("searchInput");

let activeCategory = Object.keys(menuData)[0];

/* CATEGORY BUTTONS */
Object.keys(menuData).forEach((category, index) => {
  const btn = document.createElement("button");
  btn.className = "category-btn";
  btn.textContent = category;

  if (index === 0) btn.classList.add("active");

  btn.onclick = () => {
    document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = category;
    searchInput.value = "";
    renderCategoryMenu();
  };

  categoryBar.appendChild(btn);
});

/* RENDER CATEGORY MENU */
function renderCategoryMenu() {
  menuGrid.innerHTML = "";

  menuData[activeCategory].forEach(item => {
    renderCard(item);
  });
}

/* GLOBAL SEARCH */
function renderSearchResults(query) {
  menuGrid.innerHTML = "";

  Object.entries(menuData).forEach(([category, items]) => {
    items
      .filter(item => item.name.toLowerCase().includes(query))
      .forEach(item => {
        renderCard(item);
      });
  });
}

/* CARD RENDER */
function renderCard(item) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    ${item.special ? `<div class="ribbon">⭐ Chef Special</div>` : ""}
    <h3>${item.name}</h3>
    <p>₹ ${item.price}</p>
  `;

  menuGrid.appendChild(card);
}

/* SEARCH INPUT */
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();

  if (query === "") {
    renderCategoryMenu();
  } else {
    renderSearchResults(query);
  }
});

/* INITIAL LOAD */
renderCategoryMenu();
