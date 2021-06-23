import React, { ChangeEvent, FormEvent, useState } from "react";

interface AddTodoProps {
  addTodo: AddTodo;
}

const AddTodoForm: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const handeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <>
      <div>
        <form>
          <div className="d-flex">
            <input
              className="form-control border rounded-start"
              type="text"
              value={newTodo}
              onChange={handeChange}
            />
            <button
              className="btn btn-primary text-uppercase"
              type="submit"
              onClick={handleSubmit}
            >
              add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTodoForm;
