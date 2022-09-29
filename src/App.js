import { createStore, createHook } from 'react-sweet-state';

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    count: 0,
  },
  // actions that trigger store mutation
  actions: {
    increment:
      (by = 1) =>
      ({ setState, getState }) => {
        // mutate state synchronously
        setState({
          count: getState().count + by,
        });
      },
  },
  // optional, mostly used for easy debugging
  name: 'counter',
});

const useCounter = createHook(Store);


export default function App() {
  const [state, actions] = useCounter();
  return (
    <div>
      <h1>My counter</h1>
      {state.count}
      <button onClick={() => actions.increment()}>Add +1</button>
      <button onClick={() => actions.increment(2)}>Add +2</button>
    </div>
  );
}

