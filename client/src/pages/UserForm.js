import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { ADD_USER, LOGIN_USER } from '../utils/mutations';
import AuthService from '../utils/auth';

function UserForm(props) {
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',

    type: 'register',
  });
  const [addUser] = useMutation(ADD_USER, {
    variables: formInput,
  });

  const [loginUser] = useMutation(LOGIN_USER, {
    variables: formInput,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('handlesubmit called!');

    // setting init user and token
    let user, token;

    // grabbing auth type from form
    let mutation = formInput.type === 'register' ? addUser : loginUser;
    let type = formInput.type === 'register' ? 'addUser' : 'loginUser';

    // running mutation depending on form type
    const { data } = await mutation();

    // setting user and token data from mutation
    user = data[type].user;
    token = data[type].token;

    console.log('HEY IM LOOKN FOR TOOKINS HERE' + token);

    // setting user prop to user
    props.setUser(user);

    // saving token to localstorage and navigating to root
    AuthService.login(token);
  };

  const handleInputChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value, //this is use
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{formInput.type[0].toUpperCase() + formInput.type.slice(1)}</h1>
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
      <div className="type-wrap">
        <label htmlFor="login">
          Login
          <input
            checked={formInput.type === 'login'}
            onChange={handleInputChange}
            name="type"
            id="login"
            type="radio"
            value="login"
          />
        </label>
        <label htmlFor="register">
          Register
          <input
            checked={formInput.type === 'register'}
            onChange={handleInputChange}
            name="type"
            id="register"
            type="radio"
            value="register"
          />
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default UserForm;
