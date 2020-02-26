import React from "react";
import { Provider } from "react-redux";
import UsersList from "./screens/UsersList";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
}

export default App;
