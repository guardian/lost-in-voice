import React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import StickyNote from "./StickyNote";
import Landing from "./pages/landing/Landing";
import Page from "./pages/Page";
import TaskOne from "./pages/tasks/TaskOne";
import TaskTwo from "./pages/tasks/TaskTwo";
import { startGame } from "./dialog";

function App() {
  const [task, setTask] = useState(0);
  const [isStarted, setStarted] = useState(false);
  const [name, setName] = useState('');
  
  function setUserName(event: ChangeEvent<HTMLInputElement>) {
    const input = event.target;
    setName(input.value);
  }
  
  function start(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStarted(true);
  }
    
  return (
    <>
      {!isStarted && <Landing name={name} setName={setUserName} start={start} />}
      {isStarted && <>
        <Page onRender={async () => {
          startGame(name).then(() => {
            console.log('started');
            
            setTask(1);
          })
        }}>
          {task === 1 && <TaskOne start={task === 1} name={name} done={() => { setTask(2) }} />}
          {task === 2 && <TaskTwo start={task === 2} name={name} done={() => { setTask(2) }} />}
        </Page>
        <StickyNote />
       </>}
    </>
  );
}

export default App;
