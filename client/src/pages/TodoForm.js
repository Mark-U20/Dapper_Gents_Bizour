import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { GET_TODOS } from '../utils/queries';

const ADD_TODO = gql`
  mutation addTodo($todo_text: String!) {
    addTodo(todo_text: $todo_text) {
      todo_text
    }
  }
`;

function TodoForm() {
  const [todo_text, setTodoText] = useState('');
  const [addTodo, { loading, error, data }] = useMutation(ADD_TODO, {
    variables: { todo_text },
    refetchQueries: [GET_TODOS],
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo();
    setTodoText('');
    navigate('/todos');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={todo_text}
        onChange={(e) => setTodoText(e.target.value)}
        type="text"
        placeholder="Enter your todo text"
      />
      <button>Submit</button>
    </form>
  );
}

export default TodoForm;
