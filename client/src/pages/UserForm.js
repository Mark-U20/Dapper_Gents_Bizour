import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { ADD_USER } from '../utils/mutations';

function TodoForm(props) {
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
  });
  const [addUser, { loading, error, data }] = useMutation(ADD_USER, {
    variables: formInput,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      data: { addUser: response },
    } = await addUser();

    console.log(`data from mutation: ${data}`);

    localStorage.setItem('token', response.token);

    props.setUser(response.user);
    navigate('/');
  };

  const handleInputChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value, //this is use
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        value={formInput.email}
        onChange={handleInputChange}
        type="email"
        placeholder="Enter your email address"
      />
      <input
        name="password"
        value={formInput.password}
        onChange={handleInputChange}
        type="password"
        placeholder="Enter your password"
      />
      <button>Submit</button>
    </form>
  );
}

export default TodoForm;
