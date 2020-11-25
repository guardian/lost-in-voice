import { say, substitute } from "../services/speaker";
import { greeting, taskOne } from "./dialog.json";
import explosion from "../assets/explosion.wav";

function audioEnded(audio) {
  return new Promise((resolve) => {
    audio.addEventListener('ended', resolve);
  })
}

export async function startGame(name: string) {
  const computerLine = async () => await say(substitute(greeting, [name]));
  try {
    const audio = new Audio(explosion);
    await audio.play();
    await audioEnded(audio);
    return computerLine();
  } catch (error) {
    return computerLine();
  }
}

export async function firstTask() {
  await say(taskOne);
}