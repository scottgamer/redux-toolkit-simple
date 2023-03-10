import "./App.css";
import { decrement, increment } from "./redux/counter";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

const App = () => {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <h1> The count is: {value}</h1>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(increment())}>increment</button>
    </div>
  );
};

export default App;
