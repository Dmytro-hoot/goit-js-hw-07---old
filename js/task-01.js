
const itemEl = document.querySelectorAll('.item');
const titleEl = document.querySelector('h2');

console.log(`В списке ${itemEl.length} категории.`);

itemEl.forEach(item =>
    console.log(`
    - Категория: ${titleEl.textContent}
    - Количество элементов: ${item.querySelectorAll('li').length} `),
);