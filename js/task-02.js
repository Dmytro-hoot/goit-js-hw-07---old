const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



const listEl = document.querySelector('#ingredients');

function createElement(arr) {
    let itemsArr = [];
    arr.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        itemsArr.push(listItem);
    });
    return listEl.prepend(...itemsArr);
}

createElement(ingredients);
