import React, { useState } from "react";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

const initialTodos: Array<Todo> = [
  { id: 1, text: "Walk the dog", complete: true },
  { id: 2, text: "Write app", complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodo = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodo);
  };

  const addTodo: AddTodo = (newTodo) => {
    let nextId = todos.length + 1;
    newTodo.trim() !== "" &&
      setTodos([...todos, { id: nextId, text: newTodo, complete: false }]);
  };

  const deleteTodo: DeleteTodo = (id: number) => {
    const delTodo = todos.filter((todo) => todo.id !== id);
    setTodos(delTodo);
  };

  const updateTodo: UpdateTodo = (id: number, text: string) => {
    const update = todos.map((todo) =>
      todo.id === id ? { ...todo, text: text } : todo
    );
    setTodos(update);
  };

  return (
    <>
      <div className="w-25 mx-auto my-5 border border-1 py-2 px-3 rounded shadow">
        <div className="my-3 text-center text-uppercase fw-bold">
          Todo-List-Typescript
        </div>
        <div className="text-center mb-3">
          <AddTodoForm addTodo={addTodo} />
        </div>
        <div className="mb-2">
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        </div>
      </div>
    </>
  );
};

export default App;
