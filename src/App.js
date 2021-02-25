import { useEffect, useRef, useState } from "react";
import { interval } from "rxjs";
import { map } from "rxjs/operators";

const source = [ "Dante", "Peter", "James"];
const names$ = interval(1000).pipe(map(i => source.slice(0, i+1)));

function App() {
  const [names, setNames] = useState();
  useEffect(() => {
    const subscription = names$.subscribe(setNames);

    return () => subscription.unsubscribe();
  },[]);  
  const handleList = () => {
    return names?.map((item) => {
      return <div>{item}</div>
    })
  }
  return (
    <div>
      {handleList()}
    </div>
  );
}

export default App;
