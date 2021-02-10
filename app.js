const todo = document.getElementById('todo');
let list = [];
list = document.getElementById('todoList')

document.getElementById('send').onclick = function() {
  console.log('ボタン押されたよ！');
  let todoItem = document.createElement('li')
  todoItem.innerHTML = todo.value;
  console.log(todoItem);
  list.appendChild(todoItem);
}