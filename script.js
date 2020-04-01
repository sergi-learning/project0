const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

const todoList = {
    todoList: [],
    getNumberOfTodos: function() {
        return this.todoList.length
    },
    addTodo: function(aTodo) {
        this.todoList.push(aTodo)
    },
    getTodo: function(n) {
        if (n >=0 &&  n< this.todoList.length) {
            return this.todoList[n]
        }
    },
    removeTodo: function(aTodo) {
        this.todoList.splice(aTodo, 1)
    }
}

refresh()

function refresh() {
    itemCountSpan.innerHTML = todoList.getNumberOfTodos()

    list.innerHTML = ''

    for (let i=0; i<todoList.getNumberOfTodos(); i++)
    {
        list.innerHTML = list.innerHTML + '<li id=todo'+i+'>'+todoList.getTodo(i)+ '<button class="button" onClick="remove('+i+')">remove</button></li>'
    }
}

function remove(n) {
    todoList.removeTodo(n)
    refresh()
}

function newTodo() {
  let newTodo = prompt('Enter new TODO')
  if (newTodo !== '') {
     todoList.addTodo(newTodo)
  }
  refresh()
}




