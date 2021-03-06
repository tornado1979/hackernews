export default function createLogger({ getState }) {
  return (next) => 
    (action) => {
      const console = window.console;
      const prevState = getState();
      const returnValue = next(action);
      const nextState = getState();
      console.log(`%c prev state`, `color: #9E9E9E`, prevState);
      console.log(`%c action`, `color: pink`, action);
      console.log(`%c next state`, `color: #4CAF50`, nextState);
      console.log(`%c next(action)`, `color: gold`, returnValue);
      return returnValue;
    };
}