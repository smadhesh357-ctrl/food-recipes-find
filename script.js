let currentFoods = [...foods];
let activeCategory = "All";

const grid = document.getElementById("foodGrid");
const count = document.getElementById("count");
const searchInput = document.getElementById("searchInput");

const categories = ["All", ...new Set(foods.map(f => f.category))];

function setupCategories() {
  const box = document.getElementById("categories");
  box.innerHTML = categories.map(c =>
    `<button class="${c === "All" ? "active" : ""}" onclick="filterCategory('${escapeHtml(c)}')">${escapeHtml(c)}</button>`
  ).join("");
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, ch => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[ch]));
}

function imageUrl(name, category = "", id = 1) {
  // Each food gets its own search query + unique lock number.
  // This prevents every card from showing the same category image.
  const query = encodeURIComponent(
    (name + " food").toLowerCase().replace(/[^a-z0-9 ]/g, "")
  );
  return `https://loremflickr.com/900/650/${query}?lock=${id}`;
}

function fallbackImage(img) {
  img.src = "https://placehold.co/800x600/ff7043/ffffff?text=" +
    encodeURIComponent(img.alt || "Food");
}

function makeIngredients(food) {
  const n = food.name.toLowerCase();

  if (food.category === "Dessert") {
    return ["Main ingredient for " + food.name, "Sugar - 1/2 cup", "Milk or cream - 1 cup", "Butter or oil - 2 tbsp", "Cardamom/vanilla - 1 tsp", "Nuts or fruit for topping - optional"];
  }
  if (food.category === "Italian") {
    return [food.name + " main ingredient", "Onion - 1", "Garlic - 3 cloves", "Tomato/sauce - 1 cup", "Cheese - 1/2 cup", "Olive oil - 2 tbsp", "Salt and pepper - as needed", "Italian herbs - 1 tsp"];
  }
  if (food.category === "Chinese") {
    return [food.name + " main ingredient", "Garlic - 3 cloves", "Ginger - 1 tsp", "Spring onion - 2 tbsp", "Soy sauce - 1 tbsp", "Chilli sauce - 1 tbsp", "Oil - 2 tbsp", "Salt and pepper - as needed"];
  }
  if (food.category === "Japanese") {
    return [food.name + " main ingredient", "Soy sauce - 1 tbsp", "Ginger - 1 tsp", "Garlic - 2 cloves", "Sesame oil - 1 tsp", "Vegetables - 1 cup", "Salt - as needed"];
  }
  if (food.category === "Mexican") {
    return [food.name + " main ingredient", "Onion - 1", "Tomato - 1", "Beans/corn - 1 cup", "Cheese - 1/2 cup", "Chilli powder - 1 tsp", "Lime juice - 1 tbsp", "Salt - as needed"];
  }
  if (food.category === "Fast Food") {
    return [food.name + " main ingredient", "Onion - 1", "Tomato - 1", "Cheese - 1/2 cup", "Butter/oil - 2 tbsp", "Pepper - 1/2 tsp", "Salt - as needed", "Fresh vegetables - 1 cup"];
  }
  return [food.name + " main ingredient", "Onion - 1", "Tomato - 1", "Ginger-garlic paste - 1 tbsp", "Oil - 2 tbsp", "Turmeric - 1/2 tsp", "Chilli powder - 1 tsp", "Garam masala - 1 tsp", "Salt - as needed"];
}

function makeSteps(food) {
  return [
    "Wash and prepare all the ingredients needed for " + food.name + ".",
    "Heat a suitable pan and add oil or butter.",
    "Add onion, garlic and ginger if used. Cook until fragrant.",
    "Add the main ingredients and the listed spices/sauces.",
    "Mix well and cook on medium heat until the ingredients are nearly done.",
    "Add a little water if needed, cover and cook until the food reaches the desired texture.",
    "Taste and adjust salt or seasoning.",
    "Garnish as desired and serve hot."
  ];
}

function render(list) {
  currentFoods = list;
  count.textContent = `${list.length} food item${list.length === 1 ? "" : "s"} found`;

  if (!list.length) {
    grid.innerHTML = `<div class="no-result">😕 No food found. Try another name.</div>`;
    return;
  }

  grid.innerHTML = list.map((food, index) => `
    <article class="card">
      <img src="${imageUrl(food.name, food.category, food.id)}" alt="${escapeHtml(food.name)}"
           onerror="fallbackImage(this)">
      <div class="card-body">
        <h3>${escapeHtml(food.name)}</h3>
        <p>🍽️ ${escapeHtml(food.category)}</p>
        <p>⏱️ About 30–45 mins</p>
        <button class="view" onclick="openRecipe(${index})">View Recipe 👨‍🍳</button>
      </div>
    </article>
  `).join("");
}

function searchFoods() {
  const q = searchInput.value.trim().toLowerCase();
  let list = foods.filter(f =>
    f.name.toLowerCase().includes(q) &&
    (activeCategory === "All" || f.category === activeCategory)
  );
  render(list);
}

function filterCategory(category) {
  activeCategory = category;
  document.querySelectorAll(".categories button").forEach(btn =>
    btn.classList.toggle("active", btn.textContent === category)
  );
  searchFoods();
}

function openRecipe(index) {
  const food = currentFoods[index];
  if (!food) return;

  document.getElementById("recipeTitle").textContent = food.name;
  document.getElementById("recipeMeta").textContent =
    `🍽️ ${food.category}   •   ⏱️ About 30–45 mins`;
  const img = document.getElementById("recipeImage");
  img.alt = food.name;
  img.src = imageUrl(food.name, food.category, food.id);
  img.onerror = () => fallbackImage(img);

  document.getElementById("ingredients").innerHTML =
    makeIngredients(food).map(x => `<li>${escapeHtml(x)}</li>`).join("");
  document.getElementById("steps").innerHTML =
    makeSteps(food).map(x => `<li>${escapeHtml(x)}</li>`).join("");

  document.getElementById("recipeModal").classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeRecipe() {
  document.getElementById("recipeModal").classList.remove("show");
  document.body.style.overflow = "";
}

function outsideClose(event) {
  if (event.target.id === "recipeModal") closeRecipe();
}

searchInput.addEventListener("input", searchFoods);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeRecipe();
});

setupCategories();
render(foods);
