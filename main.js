fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => print_img(data))
  .catch((err) => console.log("AJAX"));

let btnAdd = document.getElementById("btnAdd");
let photoContainer = document.querySelector(".photos");
let currentIndex = 0; // Индекс текущего элемента

function print_img(todos) {
  btnAdd.addEventListener("click", () => {
    // Проверяем, есть ли еще элементы для отображения
    if (currentIndex < todos.length) {
      const todo = todos[currentIndex]; // Получаем текущий элемент
      photoContainer.innerHTML += 
      `
        <div class="photo">
              <h3>${todo.title}</h3>
              <p>${todo.completed}</p>
            </div>
      `;
      currentIndex++; // Увеличиваем индекс для следующего элемента
    } else {
      console.log("Все элементы уже добавлены!"); // Сообщение, если все элементы уже добавлены
    }
  });
}