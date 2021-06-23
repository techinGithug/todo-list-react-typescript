import React, { ChangeEvent, useState, useEffect } from "react";
import "../css/TodoListItem.css";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
  updateTodo: UpdateTodo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
  updateTodo,
}) => {
  const [updTodo, setUpdTodo] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useEffect(() => {
    setUpdTodo(todo.text);
  }, []);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdTodo(e.target.value);
  };

  const _updateTodo = (id: number, updTodo: string) => {
    setIsEdit(false);
    updateTodo(id, updTodo);
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <div>
          <label
            className={todo.complete ? "complete" : undefined}
            style={{ cursor: "pointer" }}
          >
            <input
              className="form-check-input me-1"
              style={{ cursor: "pointer" }}
              type="checkbox"
              checked={todo.complete}
              onChange={() => toggleTodo(todo)}
            />
            {isEdit ? (
              <input
                type="text"
                value={updTodo}
                onChange={(e) => handleChange(e)}
              />
            ) : (
              todo.text
            )}
          </label>
        </div>
        <div className="d-flex">
          {isEdit ? (
            <div
              className="mt-1 me-1 text-danger"
              style={{ cursor: "pointer" }}
              onClick={() => _updateTodo(todo.id, updTodo)}
            >
              <svg
                style={{ height: "18" }}
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          ) : (
            <div
              className="mt-1 me-1 text-danger"
              style={{ cursor: "pointer" }}
              onClick={() => handleEdit()}
            >
              <svg
                style={{ height: "16" }}
                xmlns="http://www.w3.org/2000/svg"
                className="text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
          )}

          <div
            className="mt-1 text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => deleteTodo(todo.id)}
          >
            <svg
              style={{ height: "18" }}
              xmlns="http://www.w3.org/2000/svg"
              className=""
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoListItem;
