import { ChangeEvent, FormEvent, useState } from "react";
import Landing from "./pages/landing/Landing";

function App() {
  const [name, setName] = useState('');
  
  function setUserName(event: ChangeEvent<HTMLInputElement>) {
    const input = event.target;
    setName(input.value);
  }
  
  function start(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  
  return (
    <Landing name={name} setName={setUserName} start={start} />
  );
}

export default App;
