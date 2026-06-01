// Task 3: Make the Button Work
document.getElementById('generateButton')
const btn = document.getElementById('generateButton')
btn.addEventListener('click', function() {
  generateSpell();  
});

// Task 4: Add Some Colorful Magic
function getRandomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}


// Task 5: Countdown to Magic
function generateSpell() {
  const spellArea = document.getElementById('spellArea');
  const ingredientsList = document.getElementById('ingredientsList');
  const ingredients = Array.from(ingredientsList.getElementsByTagName('li')).map(li => li.textContent);
  const randomIngredient = ingredients[Math.floor(Math.random() * ingredients.length)];

  let count = 3;

  const countdown = setInterval(() => {
    spellArea.textContent = count;
    count--;

    if (count < 1) {
      clearInterval(countdown);
      spellArea.textContent = randomIngredient;
      spellArea.style.backgroundColor = getRandomColor();         
    }
  }, 1000);
}

// Task 6: Add a Reset Button
const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', function() {
  const spellArea = document.getElementById('spellArea');
  spellArea.textContent = '';
  spellArea.style.backgroundColor = '';
});