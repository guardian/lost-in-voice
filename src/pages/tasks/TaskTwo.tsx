import { ChangeEvent, createRef, FormEvent, useEffect, useState } from "react";
import { TaskProps } from "./types";
import { secondTaskOutcome } from "../../dialog";
import { wait } from "../../services/timing";

function TaskTwo({ name }: TaskProps) {
  const taskRoot = createRef<HTMLHeadingElement>();
  
  const [unusual, setUnusual] = useState('none');
  
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (unusual === 'none') return;
    await wait(2500);
    if (unusual === 'C') {
      secondTaskOutcome(true, name);
    } else {
      secondTaskOutcome(false, name);
    }
  }
  
  function onInputChange(event: ChangeEvent<HTMLInputElement>) {
    setUnusual(event.target.value);
  }
  
  useEffect(() => {
    taskRoot.current?.focus();
  }, [])
  
  return (
    <article>
      <h1 tabIndex={-1} ref={taskRoot}>The <s>Very Secret</s> Diary of the Ship's Computer</h1>
      <article>
        <h2>Cycle E</h2>
        <p>Dear Diary. I'm a bit scared of the noises coming out of the engine room. I think I had better wake a member of the crew.</p>
      </article>
      <article>
        <h2>Cycle D</h2>
        <p>
          Dear Diary. I've decided that it would be a good idea to take up writing poetry. That way when the crew wake up, I can entertain them better.
          Here is my first poem.
        </p>
        <p>
          I wandered lonely as a cloud,<br/>
          But I was really rather loud,<br/>
          I didn't hail or rain or squall,<br/>
          I wasn't like a cloud at all!
        </p>
      </article>
      <article>
        <h2>Cycle C</h2>
        <p>
          Dear Diary. I made a peach crumble for the engine bats today to try to keep my mind off things. It's not part of their usual diet, but I think they deserve it. However I don't think it agreed with Jean-Paul's digestion. He disappeared into the reactor for several hours. Is that safe? I'm sure it's safe.
        </p>
      </article>
      <article>
        <h2>Cycle B</h2>
        <p>
          Dear Diary. Sometimes I wonder what I might have been if I wasn't a ship's computer. Would I have been a communication device? Would I have been a bicycle computer? Would I have been a smart fridge? These questions haunt me in the designated dark hours of the cycle. Am I me because I was designed to be me? Are we all nothing more than the sum of our k-nearest neighbours algorithms? Don't worry diary. I don't know what that is either.
        </p>
      </article>
      <article>
        <h2>Cycle A</h2>
        <p>
          Dear Diary. It's been six months and I'm really bored with only the engine bats for company. I'm going to play some Animal Crossing.
        </p>
      </article>
      <form onSubmit={onSubmit}>
        <label htmlFor="cycle">
          If you think I did something unusual, enter the cycle letter here
        </label>
        <input type="text" name="cycle" id="cycle" value={unusual} onChange={onInputChange} />
        <input type="submit" value="Check"/>
      </form>
    </article>
  )
}

export default TaskTwo;