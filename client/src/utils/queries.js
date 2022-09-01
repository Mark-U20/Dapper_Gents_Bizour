import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query GetTodos {
    getTodos {
      _id
      todo_text
    }
  }
`;
