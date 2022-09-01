import { NavLink } from 'react-router-dom';

function Header(props) {
  console.log(props);

  return (
    <header>
      <h3>{props.logo}</h3>
      <nav>
        {props.user && <span>Welcome, {props.user.email}</span>}

        <NavLink to="/">Home</NavLink>
        <NavLink to="/starwars">StarWars!</NavLink>
        <NavLink to="/todos">Todos</NavLink>
        <NavLink to="/todo-form">Create Todo</NavLink>
        <NavLink to="/user-form">Create User</NavLink>
      </nav>
    </header>
  )
}

export default Header;