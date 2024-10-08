document.getElementById('find-recipes').addEventListener('click', async function () {
  const ingredients = document.getElementById('ingredients').value;
  if (!ingredients) {
    alert('Please enter some ingredients');
    return;
  }

  // Clear previous results
  const recipeList = document.getElementById('recipe-list');
  recipeList.innerHTML = '';

  try {
    // Fetch recipes from Spoonacular API
    const spoonacularApiKey = 'fc79d4f46f644488ba6b2051e0a8336e'; 
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${spoonacularApiKey}`
    );
    const recipes = await response.json();

    if (recipes.length > 0) {
      recipes.forEach((recipe) => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
          <h3>${recipe.title}</h3>
          <img src="${recipe.image}" alt="${recipe.title}" width="100" />
        `;
        recipeList.appendChild(recipeDiv);
      });
    } else {
      // If no recipes found, use GPT-based AI as fallback
      const aiResponse = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `sk-BNRYVMX1dwWLF9ADrlLmUoasl0HMUMoD1rvWqeuJwfT3BlbkFJI-Nj-RiUZv64Ycd7qo19isPcGD-TI7E-faO4goE14A`,
        },
        body: JSON.stringify({
          model: 'text-davinci-003',
          prompt: `Suggest some recipes using these ingredients: ${ingredients}.`,
          max_tokens: 150,
        }),
      });

      const aiData = await aiResponse.json();
      const aiRecipes = aiData.choices[0].text.trim().split('\n');

      aiRecipes.forEach((recipeText) => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `<p>${recipeText}</p>`;
        recipeList.appendChild(recipeDiv);
      });
    }
  } catch (error) {
    console.error('Error fetching recipes:', error);
    alert('There was an error fetching recipes. Please try again later.');
  }
});