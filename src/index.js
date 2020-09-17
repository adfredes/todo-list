import './styles.css';

import {Todo, TodoList} from './js/classes/index'
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();

//todoList.todos.forEach(todo => crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml); //cuando tengo una sola variable y es la que se envia a la funcion callback
