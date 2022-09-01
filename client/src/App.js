import { useState, useEffect } from "react";
import StarWars from "./pages/StarWars";
import Landing from "./pages/Landing";
import Header from "./components/Header";
import TodosDisplay from "./pages/TodosDisplay";
import TodoForm from "./pages/TodoForm";
import UserForm from "./pages/UserForm";
import { Routes, Route } from "react-router-dom";
import decode from "jwt-decode";

function App() {
  const [logo, setTitle] = useState("React Overview");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const decoded = decode(localStorage.getItem("token"));

    if (decoded.exp > Date.now() / 1000) {
      setUser(decoded.data);
    }
  }, []);

  return (
    <div>
      <Header logo={logo} user={user} />

      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route path="/starwars" element={<StarWars />} />
        <Route path="/todos" element={<TodosDisplay />} />
        <Route path="/todo-form" element={<TodoForm />} />
        <Route path="/user-form" element={<UserForm setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
