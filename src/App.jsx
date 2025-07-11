import { Provider } from "react-redux";
import { store } from "./app/store";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <Provider store={store}>
      <h1 className="text-center text-3xl font-medium">Manage your Todos</h1>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;
