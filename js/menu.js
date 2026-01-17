const categoriesDiv = document.getElementById("categories");
const menuContainer = document.getElementById("menu-container");

function loadCategories() {
  Object.keys(menuData).forEach((category, index) => {
    const btn = document.createElement("button");
    btn.innerText = category;

    if (index === 0) {
      btn.classList.add("active");
      loadMenu(category);
    }

    btn.onclick = () => {
      document.querySelectorAll("nav button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadMenu(category);
    };

    categoriesDiv.appendChild(btn);
  });
}

function loadMenu(category) {
  menuContainer.innerHTML = "";

  menuData[category].forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-card";

    card.innerHTML = `
      <h3>${item.name}</h3>
      <div class="price">₹ ${item.price}</div>
    `;

    menuContainer.appendChild(card);
  });
}

loadCategories();
