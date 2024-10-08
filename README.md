# AI Recipe Finder

An AI-powered recipe finder that suggests recipes based on the ingredients you have at home. This application uses the Spoonacular API to find recipes and OpenAI's API to generate additional recipe suggestions if none are found.

## Features

- Ingredient Input: Enter ingredients to find matching recipes.
- Recipe Suggestions: Fetches recipes from the Spoonacular API.
- AI Fallback: If no recipes are found, generates suggestions using OpenAI's GPT model.
- Responsive Design: Works seamlessly on different screen sizes.

## Technologies Used

- HTML
- CSS
- JavaScript
- Spoonacular API
- OpenAI API

## Getting Started

### Prerequisites

- A web browser to run the application.
- Basic understanding of HTML, CSS, and JavaScript.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-recipe-finder.git
   cd ai-recipe-finder
   ```
### Replace the API keys in script.js:

- Sign up at [Spoonacular](https://spoonacular.com/) to get your API key and replace the placeholder:
  
  ```javascript
  const spoonacularApiKey = 'YOUR_SPOONACULAR_API_KEY';
  ```

## Usage

1. *Enter Ingredients*: Input the ingredients you have in the provided field.
2. *Find Recipes: Click the **"Find Recipes"* button.
3. *View Results*: The application will display recipes based on the entered ingredients.

### Example

Enter "tomato, cheese, pasta" and click *"Find Recipes"* to see suggested recipes.

## Contributing

Feel free to fork the repository and submit a pull request if you'd like to contribute to the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- Thanks to the [Spoonacular API](https://spoonacular.com/) for providing recipe data.
- Thanks to the [OpenAI API](https://openai.com/api/) for generating additional recipe suggestions.
