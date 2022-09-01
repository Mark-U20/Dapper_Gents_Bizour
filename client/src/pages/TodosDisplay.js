import { useQuery } from '@apollo/client';
import { GET_TODOS } from '../utils/queries';


function TodosDisplay() {
  const { error, loading, data } = useQuery(GET_TODOS);

  return (
    <div className="todos">
      {error && <p className="error">{error.message}</p>}

      {loading && <p>Loading...</p>}

      {data && (
        <ul>
          {data.getTodos.map(todo => (
            <li key={todo._id}>{todo.todo_text}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TodosDisplay;