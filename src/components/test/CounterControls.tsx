import useStore from '../../stores/store'

const CounterComponent = () => {
    const { count, increment, decrement } = useStore();
  
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        {/* <button onClick={reset}>Reset</button> */}
      </div>
    );
  }

  export default CounterComponent;