// Example predefined Indian recipes
const indianRecipesList = [
    {
      id: 1,
      title: "Paneer Butter Masala",
      imageUrl: "images/paneer-butter-masala.jpg",
      ingredients: [
        "200g paneer, cubed",
        "2 tablespoons butter",
        "1 large onion, chopped",
        "2 tomatoes, pureed",
        "1/2 cup heavy cream",
        "1 teaspoon ginger-garlic paste",
        "1 teaspoon garam masala",
        "1 teaspoon cumin powder",
        "Salt to taste"
      ],
      instructions: [
        "Heat butter in a pan and sauté chopped onions until golden brown.",
        "Add ginger-garlic paste and sauté for another minute.",
        "Add pureed tomatoes, garam masala, cumin powder, and salt.",
        "Cook the masala mixture until the oil separates.",
        "Add paneer cubes and cook for 5-7 minutes.",
        "Pour in the cream and simmer for 2-3 minutes.",
        "Serve with naan or rice."
      ],
      nutrition: {
        calories: 350,
        fat: "25g",
        carbs: "15g",
        proteins: "15g"
      },
      description: "A rich and creamy North Indian dish with soft paneer cubes.",
      tags: ["Vegetarian", "North Indian", "Spicy"],
      isVegetarian: true
    },
    {
      id: 2,
      title: "Aloo Gobi",
      imageUrl: "images/aloo-gobi.jpg",
      ingredients: [
        "2 medium potatoes, peeled and cubed",
        "1 small cauliflower, cut into florets",
        "1 onion, chopped",
        "2 tomatoes, chopped",
        "1 teaspoon turmeric powder",
        "1 teaspoon cumin seeds",
        "1 teaspoon coriander powder",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      instructions: [
        "Heat oil in a pan and add cumin seeds.",
        "Once they splutter, add chopped onions and sauté until golden.",
        "Add chopped tomatoes, turmeric, coriander powder, and salt.",
        "Cook until the tomatoes soften.",
        "Add potatoes and cauliflower. Stir well.",
        "Cover and cook on low heat for 15-20 minutes until vegetables are tender.",
        "Garnish with fresh coriander leaves."
      ],
      nutrition: {
        calories: 180,
        fat: "8g",
        carbs: "25g",
        proteins: "5g"
      },
      description: "A simple and flavorful curry made with potatoes and cauliflower.",
      tags: ["Vegetarian", "Indian", "Vegan"],
      isVegetarian: true
    },
    {
      id: 3,
      title: "Chole Bhature",
      imageUrl: "images/chole-bhature.jpg",
      ingredients: [
        "1 cup chickpeas, soaked overnight",
        "2 onions, chopped",
        "2 tomatoes, chopped",
        "1 teaspoon cumin seeds",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon garam masala",
        "1/2 teaspoon red chili powder",
        "1 tablespoon coriander powder",
        "2 cups all-purpose flour (for bhature)",
        "1 tablespoon yogurt (for bhature)",
        "Oil for frying"
      ],
      instructions: [
        "Cook chickpeas in a pressure cooker until soft.",
        "Heat oil in a pan, add cumin seeds, and sauté onions until golden.",
        "Add ginger-garlic paste, tomatoes, and all the spices. Cook until tomatoes soften.",
        "Add cooked chickpeas, and simmer for 10 minutes.",
        "For the bhature dough, combine flour, yogurt, and water to make a soft dough.",
        "Roll out the dough into rounds and deep fry until golden brown.",
        "Serve hot with chole."
      ],
      nutrition: {
        calories: 500,
        fat: "25g",
        carbs: "60g",
        proteins: "15g"
      },
      description: "A popular North Indian dish consisting of spicy chickpeas and fried bread.",
      tags: ["Vegetarian", "North Indian", "Heavy meal"],
      isVegetarian: true
    },
    {
      id: 4,
      title: "Masoor Dal",
      imageUrl: "images/masoor-dal.jpg",
      ingredients: [
        "1 cup red lentils (masoor dal)",
        "1 onion, chopped",
        "2 tomatoes, chopped",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "1 teaspoon coriander powder",
        "1/2 teaspoon cumin powder",
        "1 tablespoon ghee",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      instructions: [
        "Wash the lentils and cook them in a pressure cooker with water until soft.",
        "In a pan, heat ghee and add cumin seeds.",
        "Once they splutter, add onions and sauté until golden.",
        "Add tomatoes and cook until soft.",
        "Add turmeric, coriander powder, cumin powder, and salt.",
        "Add the cooked lentils and mix well. Simmer for 5-10 minutes.",
        "Garnish with fresh coriander leaves."
      ],
      nutrition: {
        calories: 200,
        fat: "8g",
        carbs: "30g",
        proteins: "15g"
      },
      description: "A simple yet nutritious dal made with red lentils.",
      tags: ["Vegetarian", "Indian", "Vegan"],
      isVegetarian: true
    },
    {
      id: 5,
      title: "Dosa with Sambar",
      imageUrl: "images/dosa-with-sambar.jpg",
      ingredients: [
        "2 cups rice",
        "1/2 cup urad dal (black gram)",
        "1 teaspoon fenugreek seeds",
        "1 tablespoon ghee",
        "1 cup toor dal (for sambar)",
        "1 carrot, chopped",
        "1 potato, chopped",
        "Tamarind pulp",
        "Sambar masala"
      ],
      instructions: [
        "Soak rice, urad dal, and fenugreek seeds overnight.",
        "Grind the soaked mixture into a smooth batter.",
        "Ferment the batter for 8 hours or overnight.",
        "For the sambar, cook toor dal with vegetables and tamarind.",
        "Add sambar masala and cook until thick.",
        "Make thin dosas on a hot pan with ghee, serve with sambar."
      ],
      nutrition: {
        calories: 350,
        fat: "12g",
        carbs: "50g",
        proteins: "12g"
      },
      description: "A South Indian favorite: crispy dosas served with spicy sambar.",
      tags: ["Vegetarian", "South Indian", "Breakfast"],
      isVegetarian: true
    },
        {
          id: 6,
          title: "Vegetable Stir Fry",
          imageUrl:"images/vegetable-stir-fry.jpg",
          ingredients: [
            "2 cups broccoli florets",
            "1 cup sliced carrots",
            "1 cup bell peppers, sliced",
            "1 tablespoon olive oil",
            "1 tablespoon soy sauce",
            "1 teaspoon sesame seeds"
          ],
          instructions: [
            "Heat olive oil in a pan over medium heat.",
            "Add the broccoli, carrots, and bell peppers.",
            "Stir fry for 5-7 minutes until vegetables are tender.",
            "Drizzle with soy sauce and sprinkle sesame seeds.",
            "Serve hot and enjoy!"
          ],
          nutrition: {
            calories: 120,
            fat: "4g",
            carbs: "18g",
            proteins: "3g"
          },
          description: "A healthy and delicious vegetable stir fry packed with nutrients.",
          tags: ["Vegetarian", "Low-calorie", "Quick meal"],
          isVegetarian: true
        },
        {
          id: 7,
          title: "Chickpea Salad",
          imageUrl: "images/chickpea-salad.jpg",
          ingredients: [
            "1 can chickpeas, drained and rinsed",
            "1 cucumber, chopped",
            "1 cup cherry tomatoes, halved",
            "1/4 cup red onion, chopped",
            "2 tablespoons olive oil",
            "1 tablespoon lemon juice",
            "Salt and pepper to taste"
          ],
          instructions: [
            "Combine all the ingredients in a large bowl.",
            "Toss gently to mix well.",
            "Chill in the fridge for 10-15 minutes before serving."
          ],
          nutrition: {
            calories: 250,
            fat: "10g",
            carbs: "32g",
            proteins: "8g"
          },
          description: "A fresh and tangy chickpea salad, perfect for a light lunch.",
          tags: ["Vegetarian", "Healthy", "Salad"],
          isVegetarian: true
        },
        {
          id: 8,
          title: "Spaghetti Aglio e Olio",
          imageUrl: "images/spaghetti-aglio-e-olio.jpg",
          ingredients: [
            "200g spaghetti",
            "3 cloves garlic, thinly sliced",
            "1/4 cup olive oil",
            "1/2 teaspoon red pepper flakes",
            "Fresh parsley, chopped",
            "Grated Parmesan cheese (optional)"
          ],
          instructions: [
            "Cook the spaghetti according to package instructions.",
            "While the pasta cooks, heat olive oil in a pan.",
            "Add garlic and red pepper flakes, sauté for 2 minutes.",
            "Drain the pasta and add it to the pan with garlic oil.",
            "Toss the spaghetti in the oil mixture and sprinkle with parsley.",
            "Top with grated Parmesan if desired."
          ],
          nutrition: {
            calories: 400,
            fat: "15g",
            carbs: "60g",
            proteins: "10g"
          },
          description: "An Italian classic, simple yet full of flavor!",
          tags: ["Vegetarian", "Italian", "Quick meal"],
          isVegetarian: true
        },
        {
          id: 9,
          title: "Mango Smoothie",
          imageUrl: "images/mango-smoothie.jpg",
          ingredients: [
            "1 cup mango, chopped",
            "1/2 cup Greek yogurt",
            "1/2 cup milk",
            "1 tablespoon honey",
            "Ice cubes"
          ],
          instructions: [
            "Blend all the ingredients until smooth.",
            "Pour into a glass and serve immediately."
          ],
          nutrition: {
            calories: 180,
            fat: "2g",
            carbs: "40g",
            proteins: "6g"
          },
          description: "A refreshing and creamy mango smoothie, perfect for a summer treat.",
          tags: ["Smoothie", "Vegetarian", "Breakfast"],
          isVegetarian: true
        },
        {
          id: 10,
          title: "Vegetarian Burrito",
          imageUrl: "images/vegetarian-burrito.jpg",
          ingredients: [
            "1 large flour tortilla",
            "1/2 cup cooked rice",
            "1/2 cup black beans",
            "1/4 cup corn kernels",
            "1/4 cup diced bell peppers",
            "1/4 cup shredded cheese",
            "Sour cream and salsa for garnish"
          ],
          instructions: [
            "Place the tortilla on a flat surface.",
            "Layer rice, black beans, corn, and bell peppers.",
            "Sprinkle with cheese and fold the tortilla to form a burrito.",
            "Toast the burrito in a hot pan for 2-3 minutes on each side.",
            "Serve with sour cream and salsa."
          ],
          nutrition: {
            calories: 350,
            fat: "12g",
            carbs: "50g",
            proteins: "12g"
          },
          description: "A tasty and filling vegetarian burrito, perfect for lunch.",
          tags: ["Vegetarian", "Mexican", "Lunch"],
          isVegetarian: true
        },
        {
          id: 11,
          title: "Avocado Toast",
          imageUrl: "images/avacado-toast.jpg",
          ingredients: [
            "2 slices whole-grain bread",
            "1 ripe avocado",
            "Salt and pepper to taste",
            "Red pepper flakes (optional)"
          ],
          instructions: [
            "Toast the bread slices until golden brown.",
            "Mash the avocado and spread it on the toast.",
            "Season with salt, pepper, and red pepper flakes."
          ],
          nutrition: {
            calories: 220,
            fat: "15g",
            carbs: "18g",
            proteins: "4g"
          },
          description: "A simple, yet delicious, healthy breakfast option.",
          tags: ["Vegetarian", "Breakfast", "Quick meal"],
          isVegetarian: true
        },
        {
          id: 12,
          title: "Apple Cinnamon Oatmeal",
          imageUrl: "images/apple-cinnamon-oatmeal.jpg",
          ingredients: [
            "1 cup rolled oats",
            "2 cups milk",
            "1 apple, diced",
            "1/2 teaspoon cinnamon",
            "Honey to taste"
          ],
          instructions: [
            "Cook oats with milk in a pot over medium heat.",
            "Once the oats are soft, stir in diced apple and cinnamon.",
            "Cook for an additional 2-3 minutes, then drizzle with honey."
          ],
          nutrition: {
            calories: 300,
            fat: "6g",
            carbs: "50g",
            proteins: "8g"
          },
          description: "A warm, comforting breakfast to start your day.",
          tags: ["Vegetarian", "Breakfast", "Healthy"],
          isVegetarian: true
        },
        {
          id: 13,
          title: "Caprese Salad",
          imageUrl: "images/caprese-salad.jpg",
          ingredients: [
            "2 tomatoes, sliced",
            "1/2 cup fresh mozzarella",
            "Basil leaves",
            "1 tablespoon olive oil",
            "1 tablespoon balsamic vinegar",
            "Salt and pepper to taste"
          ],
          instructions: [
            "Arrange tomato slices, mozzarella, and basil on a plate.",
            "Drizzle with olive oil and balsamic vinegar.",
            "Season with salt and pepper to taste."
          ],
          nutrition: {
            calories: 180,
            fat: "12g",
            carbs: "6g",
            proteins: "10g"
          },
          description: "A classic Italian salad with fresh mozzarella and ripe tomatoes.",
          tags: ["Vegetarian", "Salad", "Italian"],
          isVegetarian: true
        },
        {
          id: 14,
          title: "Quinoa Bowl",
          imageUrl: "images/quinoa-bowl.jpg",
          ingredients: [
            "1 cup cooked quinoa",
            "1/2 cup chickpeas",
            "1/4 cup diced cucumber",
            "1/4 cup shredded carrots",
            "1 tablespoon tahini",
            "Lemon juice"
          ],
          instructions: [
            "In a bowl, combine quinoa, chickpeas, cucumber, and carrots.",
            "Drizzle with tahini and lemon juice.",
            "Toss gently and serve chilled."
          ],
          nutrition: {
            calories: 320,
            fat: "12g",
            carbs: "40g",
            proteins: "10g"
          },
          description: "A healthy and protein-packed quinoa bowl, perfect for lunch.",
          tags: ["Vegetarian", "Healthy", "Lunch"],
          isVegetarian: true
        },
        {
          id: 15,
          title: "Sweet Potato Fries",
          imageUrl: "images/sweet-potato-fries.jpg",
          ingredients: [
            "2 large sweet potatoes",
            "2 tablespoons olive oil",
            "Salt and pepper to taste",
            "1 teaspoon paprika"
          ],
          instructions: [
            "Preheat the oven to 425°F (220°C).",
            "Peel and cut the sweet potatoes into fries.",
            "Toss the fries in olive oil, salt, pepper, and paprika.",
            "Spread on a baking sheet and bake for 25-30 minutes, flipping halfway through."
          ],
          nutrition: {
            calories: 180,
            fat: "7g",
            carbs: "35g",
            proteins: "2g"
          },
          description: "Crispy and delicious baked sweet potato fries.",
          tags: ["Vegetarian", "Snack", "Healthy"],
          isVegetarian: true
        },
        {
          id: 16,
          title: "Paneer Tikka",
          imageUrl: "images/paneer-tikka.jpg",
          ingredients: [
            "200g paneer, cut into cubes",
            "1/4 cup yogurt",
            "1 tablespoon lemon juice",
            "1 tablespoon ginger-garlic paste",
            "1/2 teaspoon turmeric",
            "1 teaspoon chili powder",
            "Salt to taste"
          ],
          instructions: [
            "Marinate the paneer cubes in yogurt, lemon juice, ginger-garlic paste, turmeric, chili powder, and salt.",
            "Let it sit for 30 minutes.",
            "Grill or bake until golden brown and serve hot."
          ],
          nutrition: {
            calories: 250,
            fat: "15g",
            carbs: "8g",
            proteins: "15g"
          },
          description: "A smoky and flavorful Indian appetizer made with marinated paneer.",
          tags: ["Vegetarian", "Indian", "Appetizer"],
          isVegetarian: true
        },
        {
          id: 17,
          title: "Mushroom Butter Masala",
          imageUrl: "images/mushroom-butter-masala.jpg",
          ingredients: [
            "2 medium mushrooms, washed and half cut",
            "1 cauliflower, cut into florets",
            "1 onion, chopped",
            "1 tablespoon ginger-garlic paste",
            "1/2 teaspoon turmeric",
            "1 teaspoon cumin seeds",
            "1/2 teaspoon garam masala"
          ],
          instructions: [
            "Heat oil in a pan and fry cumin seeds.",
            "Add onions and sauté until golden.",
            "Add ginger-garlic paste, turmeric, and mushrooms. Stir well.",
            "Add cauliflower florets and cook until tender.",
            "Sprinkle garam masala and cook for another 2 minutes.",
            "Serve hot with roti or rice."
          ],
          nutrition: {
            calories: 220,
            fat: "8g",
            carbs: "30g",
            proteins: "5g"
          },
          description: "A classic Indian dish made with mushrooms and cauliflower.",
          tags: ["Vegetarian", "Indian", "Main Course"],
          isVegetarian: true
        },
        {
          id: 18,
          title: "Palak Paneer",
          imageUrl: "images/palak-paneer.jpg",
          ingredients: [
            "200g paneer",
            "2 cups spinach, chopped",
            "1 onion, chopped",
            "1 tomato, chopped",
            "1 tablespoon ginger-garlic paste",
            "1 teaspoon cumin",
            "1/2 teaspoon turmeric",
            "1 teaspoon garam masala"
          ],
          instructions: [
            "Blanch the spinach in boiling water and blend into a puree.",
            "Sauté onions, ginger-garlic paste, and tomatoes in a pan.",
            "Add the spinach puree, turmeric, and garam masala.",
            "Add paneer cubes and simmer for 5 minutes.",
            "Serve hot with naan or rice."
          ],
          nutrition: {
            calories: 300,
            fat: "20g",
            carbs: "12g",
            proteins: "15g"
          },
          description: "A creamy spinach curry with paneer, rich in flavor and nutrition.",
          tags: ["Vegetarian", "Indian", "Main Course"],
          isVegetarian: true
        }
    
  ];
  
  // Function to get all recipes (either predefined or user-generated)
  function getAllRecipes() {
    // Get the saved recipes from LocalStorage
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
  
    // Combine predefined and saved recipes
    return [...indianRecipesList, ...savedRecipes];
  }
  
  // Function to save new recipe
  function saveRecipe(recipe) {
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipes.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }
  
  // Update Recipe (edit functionality)
  function updateRecipe(index, updatedRecipe) {
    const recipes = JSON.parse(localStorage.getItem("recipes") || '[]');
    recipes[index] = updatedRecipe;
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }
  
  // Get all Recipes
  function getRecipes() {
    return JSON.parse(localStorage.getItem('recipes') || '[]');
  }
  
  function deleteLastRecipe() {
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  
    if (recipes.length > 0) {
      recipes.pop(); // Remove last from storage
      localStorage.setItem("recipes", JSON.stringify(recipes));
      alert("🍽️ Last recipe deleted!");
      window.location.href = "index.html";
  
      // Call the function to fully re-render all cards
      displayRecipes(); 
    } else {
      alert("⚠️ No recipes found to delete!");
    }
  }

  
  
  
  
  