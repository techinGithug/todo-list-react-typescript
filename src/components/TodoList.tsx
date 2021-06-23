import React from "react";
import TodoListItem from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
  updateTodo: UpdateTodo;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
  updateTodo,
}) => {
  return (
    <>
      <div className="">
        {todos.map((todo) => {
          return (
            <TodoListItem
              key={todo.text}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
