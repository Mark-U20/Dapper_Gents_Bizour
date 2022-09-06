import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN_USER } from '../utils/mutations';
import {motion} from 'framer-motion';

import AuthService from '../utils/auth';

function UserForm({setUser}) {
  // setting thi initial form state
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
    type: 'register',
  });
  // defining the ADD_USER mutation and pulling out the function as addUser
  const [addUser] = useMutation(ADD_USER, {
    variables: {...formInput},
  });
  // defining the LOGIN_USER mutation and pulling out the function as loginUser
  const [loginUser] = useMutation(LOGIN_USER, {
    variables: {...formInput},
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setting init user and token
    let user, token;

    // grabbing auth type from form
    let mutation = formInput.type === 'register' ? addUser : loginUser;
    let type = formInput.type === 'register' ? 'addUser' : 'loginUser';

    // running mutation depending on form type
    const { data } = await mutation();

    console.log(formInput)
    console.log(data);

    // setting user and token data from mutation
    user = data[type].userData;
    token = data[type].tokenData;

    // setting user prop to user
    setUser(user);

    console.log(token)

    // saving token to localstorage and navigating to root
    AuthService.login(token);
  };

  // as the form is changed, the forminput state is updated
  const handleInputChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.form onSubmit={handleSubmit}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
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
    </motion.form>
  );
}

export default UserForm;
