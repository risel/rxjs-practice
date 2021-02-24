import { useEffect, useRef } from "react";
import { fromEvent } from "rxjs";

function App() {
  const targetRef = useRef(null);
  const observer = (value) => {
    console.log(value);
  };
  useEffect(() => {
    fromEvent(targetRef.current, "click")
      .subscribe(observer);
  },[]);

  const fetchList = (number) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
      .then(response => response.json())
  };

  return (
    <div ref={targetRef}>
      something
    </div>
  );
}

export default App;
