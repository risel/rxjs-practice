import { useEffect, useRef, useState } from "react";
import { of } from "rxjs";

const source = [ "Dante", "Peter", "James"];
const names$ = of(source);

function App() {
  const [names, setNames] = useState();
  useEffect(() => {
    const subscription = names$.subscribe(setNames);

    return () => subscription.unsubscribe();
  },[]);  
  const handleList = () => {
    return names.map((item) => {
      return <div>{item}</div>
    })
  }
  return (
    <div>
      {handleList}
    </div>
  );
}

export default App;
