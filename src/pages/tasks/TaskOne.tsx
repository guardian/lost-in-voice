import { useEffect, useState } from "react"
import { firstTask } from "../../dialog";

type TaskProps = {
  start: boolean
}

function TaskOne({ start }: TaskProps) {
  const [taskAnnounced, setTaskAnnounced] = useState(false);
  useEffect(() => {
    if (start && !taskAnnounced) {
      firstTask();
      setTaskAnnounced(true);
    }
  }, [start, taskAnnounced]);
  
  useEffect(() => {
    function taskPromptRequest(event: KeyboardEvent) {
      console.log(event.key);
      if (event.shiftKey && event.key.toUpperCase() === 'S') {
        firstTask();
      }
    }
    window.addEventListener('keypress', taskPromptRequest);
    
    return () => {
      window.removeEventListener('keypress', taskPromptRequest);
    }
  })
  
  return null;
}

export default TaskOne