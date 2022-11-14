import { TodoActions } from "../enums/TodoEnums";
import { TodoAction, TodoState } from "../types/TodoTypes";
import { addTodo, deleteTodo, generateTodo, toggleDone } from "./helpers";

// Our reducer function that uses a switch statement to handle our actions
const useTodos = (state: TodoState, action: TodoAction) => {
  const { type, payload } = action;
  switch (type) {
    case TodoActions.ADD:
      let todos = state.todos;
      if(payload) {
        todos = addTodo(todos, generateTodo(payload));
      }
      return {
        ...state,
        todos: todos,
      };
    case TodoActions.UPDATE:
      let updatedTodos = state.todos;
      if(payload) {
        updatedTodos = toggleDone(updatedTodos, payload)
      }
      return {
        ...state,
        todos: updatedTodos,
      };
    case TodoActions.DELETE:
      let filteredTodos = state.todos;
      if(payload) {
        filteredTodos = deleteTodo(filteredTodos, payload);
      }
      return {
        ...state,
        todos: filteredTodos,
      };
    default:
      return state;
  }
}

export default useTodos;