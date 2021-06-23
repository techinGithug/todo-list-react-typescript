type Todo = {
  id: number;
  text: string;
  complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (newTodo: string) => void;
type DeleteTodo = (id:number) => void;
type UpdateTodo = (id:number, text:string) => void;
