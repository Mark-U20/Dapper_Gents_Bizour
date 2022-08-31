import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router } from "react-router-dom";
import ApolloClient from "apollo-boost";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

const client = new ApolloClient({
  uri: process.env.URI || "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
