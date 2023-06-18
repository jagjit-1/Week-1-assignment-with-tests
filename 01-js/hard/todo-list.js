/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.tasks = [];
  }
  add(todo) {
    this.tasks.push(todo);
    return;
  }
  remove(indexOfTodo) {
    if (indexOfTodo >= this.tasks.length) return;
    this.tasks = this.tasks.filter((val, idx) => {
      return idx !== indexOfTodo;
    });
    return;
  }
  update(indexOfTodo, updatedTodo) {
    if (indexOfTodo >= this.tasks.length) return;
    this.tasks[indexOfTodo] = updatedTodo;
    return;
  }
  getAll() {
    return this.tasks;
  }
  get(indexOfTodo) {
    if (indexOfTodo >= this.tasks.length) return null;
    return this.tasks[indexOfTodo];
  }
  clear() {
    this.tasks = [];
  }

}

module.exports = Todo;
