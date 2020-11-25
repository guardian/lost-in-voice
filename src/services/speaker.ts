const synth = window.speechSynthesis;

export function substitute(baseString: string, substitutions: string[]) {
  return substitutions.reduce((newString, sub, index) => {
    return newString.replace(`$${index}`, sub);
  }, baseString);
}

export function say(speech: string) {
  return new Promise((resolve, reject) => {
    const utterance = new SpeechSynthesisUtterance(speech);
    utterance.addEventListener('end', resolve);
    utterance.addEventListener('error', reject);
    utterance.addEventListener('start', () => console.log(speech));
    synth.speak(utterance);
  })
}