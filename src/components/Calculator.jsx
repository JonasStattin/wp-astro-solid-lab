import { createSignal } from 'solid-js';

function Calculator(props) {
  const [count, setCount] = createSignal(0);

  setInterval(() => setCount(count() + 1), 1000);
  
  return <div>Hello {props.name}, for the {count} time</div>;
}

export default Calculator;
