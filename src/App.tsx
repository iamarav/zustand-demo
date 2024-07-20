import CounterDemo from "./components/CounterDemo";
import CounterReadOnly from "./components/CounterReadOnly";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Zustand Demo</h1>

      <hr />
      <CounterDemo></CounterDemo>
      <CounterReadOnly />
    </div>
  );
}
