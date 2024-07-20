import useCount from "../store/useCount";

export default function CounterReadOnly() {
  const { count, onePlus, oneMinus } = useCount();

  return (
    <>
      <h2>Counter Read Only</h2>

      <p>Count: {count}</p>
      <p>One Plus: {onePlus()}</p>
      <p>One Minus: {oneMinus()}</p>
    </>
  );
}
