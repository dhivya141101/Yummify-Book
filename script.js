// DOM
const recipeForm = document.getElementById('recipe-form');
const recipeList = document.getElementById('recipe-list');
const searchInput = document.getElementById('search');
const editIdInput = document.getElementById('editing-recipe-id');
const toggleFavBtn = document.getElementById('toggle-fav-filter');

// Modal
const modal = document.getElementById('recipe-modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalIngredients = document.getElementById('modal-ingredients');
const modalSteps = document.getElementById('modal-steps');
const closeModalBtn = document.querySelector('.close-btn');

const darkModeToggle = document.getElementById('darkModeToggle');
const backupBtn = document.getElementById('backupBtn');
const restoreBtn = document.getElementById('restoreBtn');

const STORAGE_KEY = 'pillu-recipes';
let showOnlyFavorites = false;

// Load Recipes
window.addEventListener('DOMContentLoaded', () => {
  loadRecipes();
});

// Submit
recipeForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const id = editIdInput.value;
  const name = document.getElementById('recipe-name').value.trim();
  const ingredients = document.getElementById('ingredients').value.trim();
  const steps = document.getElementById('steps').value.trim();
  const imageFile = document.getElementById('image').files[0];

  if (!name || !ingredients || !steps) {
    alert('Fill all fields!');
    return;
  }

  const reader = new FileReader();
  reader.onload = function () {
    const imageData = reader.result;
    let recipes = getRecipes();

    if (id) {
      const index = recipes.findIndex(r => r.id == id);
      if (index !== -1) {
        recipes[index].name = name;
        recipes[index].ingredients = ingredients;
        recipes[index].steps = steps;
        if (imageFile) {
          recipes[index].image = imageData;
        }
      }
    } else {
      const newRecipe = {
        id: Date.now(),
        name,
        ingredients,
        steps,
        image: imageData || '',
        favorite: false,
      };
      recipes.push(newRecipe);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
    recipeForm.reset();
    editIdInput.value = '';
    loadRecipes(searchInput.value);
  };

  if (imageFile) {
    reader.readAsDataURL(imageFile);
  } else {
    reader.onload();
  }
});

// Load & Filter Recipes
function loadRecipes(filter = '') {
  const recipes = getRecipes();
  recipeList.innerHTML = '';

  const filtered = recipes.filter(recipe => {
    const matchesSearch =
      recipe.name.toLowerCase().includes(filter.toLowerCase()) ||
      recipe.ingredients.toLowerCase().includes(filter.toLowerCase());

    const matchesFav = showOnlyFavorites ? recipe.favorite : true;
    return matchesSearch && matchesFav;
  });

  if (filtered.length === 0) {
    recipeList.innerHTML = '<p>No recipes found.</p>';
    return;
  }

  filtered.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card';

    card.innerHTML = `
      <h3>${recipe.name}</h3>
      ${recipe.image ? `<img src="${recipe.image}" alt="${recipe.name}" />` : ''}
      <div class="buttons">
        <button class="view-btn" data-id="${recipe.id}">👁️</button>
        <button class="edit-btn" data-id="${recipe.id}">✏️</button>
        <button class="delete-btn" data-id="${recipe.id}">🗑️</button>
        <button class="fav-btn" data-id="${recipe.id}">
          ${recipe.favorite ? '⭐' : '☆'}
        </button>
      </div>
    `;

    recipeList.appendChild(card);
  });
}

// Get recipes
function getRecipes() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

// Search Input
searchInput.addEventListener('input', () => {
  loadRecipes(searchInput.value);
});

// Filter Favorites Toggle
toggleFavBtn.addEventListener('click', () => {
  showOnlyFavorites = !showOnlyFavorites;
  toggleFavBtn.textContent = showOnlyFavorites ? 'Show All Recipes 📚' : 'Show Favorites Only ⭐';
  loadRecipes(searchInput.value);
});

// Recipe List Events
recipeList.addEventListener('click', (e) => {
  const id = e.target.getAttribute('data-id');
  const recipes = getRecipes();
  const recipe = recipes.find(r => r.id == id);

  if (!recipe) return;

  if (e.target.classList.contains('view-btn')) {
    showRecipeModal(recipe);
  }

  if (e.target.classList.contains('edit-btn')) {
    document.getElementById('recipe-name').value = recipe.name;
    document.getElementById('ingredients').value = recipe.ingredients;
    document.getElementById('steps').value = recipe.steps;
    editIdInput.value = recipe.id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (e.target.classList.contains('delete-btn')) {
    const confirmed = confirm('Delete this recipe?');
    if (confirmed) {
      const updated = recipes.filter(r => r.id != id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      loadRecipes(searchInput.value);
    }
  }

  if (e.target.classList.contains('fav-btn')) {
    recipe.favorite = !recipe.favorite;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
    loadRecipes(searchInput.value);
  }
});

// Modal Functions
function showRecipeModal(recipe) {
  modalTitle.textContent = recipe.name;
  modalImage.src = recipe.image || '';
  modalIngredients.textContent = recipe.ingredients;
  modalSteps.textContent = recipe.steps;
  modal.style.display = 'flex';
}

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

function addRecipe() {
    const tags = document.getElementById('tags').value.split(',').map(tag => tag.trim());
    const recipe = {
        name: document.getElementById('recipe-name').value,
        ingredients: document.getElementById('ingredients').value,
        steps: document.getElementById('steps').value,
        tags: tags,
        image: document.getElementById('recipe-image').files[0]
    };
    saveRecipe(recipe);
}

function displayRecipe(recipe) {
    const tagsContainer = document.createElement('div');
    tagsContainer.classList.add('tags');
    recipe.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });
    // Add this to your recipe card element
    recipeCard.appendChild(tagsContainer);
}

function addRecipe() {
    const nutrition = {
        calories: document.getElementById('calories').value,
        fat: document.getElementById('fat').value,
        protein: document.getElementById('protein').value
    };
    const recipe = {
        name: document.getElementById('recipe-name').value,
        ingredients: document.getElementById('ingredients').value,
        steps: document.getElementById('steps').value,
        nutrition: nutrition,
        image: document.getElementById('recipe-image').files[0]
    };
    saveRecipe(recipe);
}

function displayRecipe(recipe) {
    const nutritionContainer = document.createElement('div');
    nutritionContainer.classList.add('nutrition');
    nutritionContainer.innerHTML = `
        <p>Calories: ${recipe.nutrition.calories} kcal</p>
        <p>Fat: ${recipe.nutrition.fat} g</p>
        <p>Protein: ${recipe.nutrition.protein} g</p>
    `;
    recipeCard.appendChild(nutritionContainer);
}

backupBtn.addEventListener('click', () => {
    const recipes = getRecipes(); // Fetch recipes from local storage
    const blob = new Blob([JSON.stringify(recipes)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'recipes_backup.json';
    a.click();
});

restoreBtn.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.click();

    input.addEventListener('change', (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
            const recipes = JSON.parse(event.target.result);
            restoreRecipes(recipes);
        };
        reader.readAsText(file);
    });
});