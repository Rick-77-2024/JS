// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні
// // бути список під час відображення.

const link = new URL('https://dummyjson.com/recipes')
const food = document.getElementsByClassName('recipes')[0];

fetch(link)
    .then(value => value.json())
    .then(recipesObj => {
        let {recipes} = recipesObj;
        console.log(recipes);

        recipes.forEach(recipe => {
            const ulRecipe = document.createElement('ul');
            food.appendChild(ulRecipe);
            console.log(recipe);
            for (const key in recipe) {
                const liRecipe = document.createElement('li');
                ulRecipe.appendChild(liRecipe);

                if (typeof recipe[key] === 'object') {
                    const ulAdditInfo = document.createElement('ul');
                    ulAdditInfo.textContent = `${key}`;
                    liRecipe.appendChild(ulAdditInfo);
                    let info = recipe[key];
                    info.forEach(anyItem => {
                        const any = document.createElement('li');
                        any.textContent = `${anyItem}`;
                        ulAdditInfo.appendChild(any)
                    });
                } else {
                    liRecipe.textContent = `${key}:  ${recipe[key]}`;
                }
            }
        });
    });
