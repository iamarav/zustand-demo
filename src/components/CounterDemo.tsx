import useCount from "../store/useCount";

export default function CounterDemo() {
  const {
    count,
    incrementNumber,
    setIncrementNumber,
    increment,
    decrement,
    getCount,
    reset
  } = useCount();

  return (
    <>
      <h2>Counter Demo</h2>

      <p>Count: {count}</p>
      <p>Count Getter: {getCount()}</p>

      <input
        type="number"
        placeholder="Count..."
        value={incrementNumber}
        onChange={(e) => setIncrementNumber(e.target.value)}
      />

      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
}
