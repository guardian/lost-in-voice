import React, { useEffect, useState } from "react"
import { firstTask,  } from "../../dialog";
import TaskOneForm, { TaskOneResponse } from "./TaskOneForm";

type TaskProps = {
  start: boolean
  name: string
}

type FoldRate = {
  cycle: string,
  rate: number,
}

const fuelRodCount = 15;
const minEngineTemp = -500;
const maxEngineTemp = 2000;
const maxRadiation = 1.2;

function randomNumberBetween(min: number, max: number, floor = true) {
  if (floor) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return parseFloat((Math.random() * max + min).toFixed(3));
}

function getFoldRates(): FoldRate[] {
  const cycles = ['E','D','C','B','A'];
  return Array.from({ length: 5 }, (_, index) => ({
    cycle: cycles[index],
    rate: randomNumberBetween(5, 25),
  }))
}

function getCurieLevels() {
  return Array.from({ length: 6 }, () => randomNumberBetween(0, maxRadiation, false))
}

function getBats() {
  const batFoods = ['bugs', 'peach crumble', 'sandwich'];
  const batMoods = ['happy', 'melancholic', 'philosophical', 'sulky'];
  const batNames = ['Gertrude', 'Siobhan', 'Jean-Paul', 'Otto', 'Freya'];
  return batNames.map((name) => {
    return {
      name,
      mood: batMoods[randomNumberBetween(0, batMoods.length - 1)],
      timeAsleep: randomNumberBetween(5, 20),
      lastMeal: batFoods[randomNumberBetween(0, batFoods.length - 1)]
    }
  })
}

function createResponseAssessment(faultyFuelRod: number, engineTemp: number, curieLevels: number[], foldRates: FoldRate[]) {
  const engineStatus = engineTemp > 1500 ? 'high' : engineTemp < 500 ? 'low' : 'normal';
  const curieDanger = curieLevels.slice(0, 3).some(level => level > 1) ? 'yes' : 'no';
  const highestFoldRate = Math.max(...foldRates.map(fRate => fRate.rate))
  const correctRate = foldRates.find(foldRate => foldRate.rate === highestFoldRate)
  
  return function assessResponse(response: TaskOneResponse) {
    const fuelRodCorrect = parseInt(response.faultRod, 10) === faultyFuelRod + 1;
    const engineCorrect = response.engineTemp === engineStatus;
    const radiationCorrect = response.radiationLevel === curieDanger;
    const foldRateCorrect = response.foldRate === correctRate?.cycle;
    console.log({
      fuel: fuelRodCorrect,
      engine: engineCorrect,
      radiation: radiationCorrect,
      folds: foldRateCorrect
    });
  }
}

function TaskOne({ start }: TaskProps) {
  const faultyFuelRod = randomNumberBetween(2, fuelRodCount - 1);
  const engineTemp = randomNumberBetween(minEngineTemp, maxEngineTemp);
  const curieLevels = getCurieLevels();
  const foldRates = getFoldRates();
  const bats = getBats();
  
  const assessResponse = createResponseAssessment(faultyFuelRod, engineTemp, curieLevels, foldRates);
  
  const [taskAnnounced, setTaskAnnounced] = useState(false);
  
  useEffect(() => {
    if (start && !taskAnnounced) {
      firstTask();
      setTaskAnnounced(true);
    }
  }, [start, taskAnnounced]);
  
  useEffect(() => {
    function taskPromptRequest(event: KeyboardEvent) {
      if (event.shiftKey && event.key.toUpperCase() === 'S') {
        firstTask();
      }
    }
    window.addEventListener('keypress', taskPromptRequest);
    
    return () => {
      window.removeEventListener('keypress', taskPromptRequest);
    }
  })
  
  return (<div>
    <h1>Labrador Class Engine Diagnostics Interface</h1>
    <div>
      <h2>Fuel</h2>
      <p>Ridium fuel rod status listed in numerical order</p>
      <ol>
        {Array.from({ length: fuelRodCount }).map((_, index) => {
          const status = index === faultyFuelRod ? 'FAULT' : 'OKAY'
          return <li key={index}>Status:&nbsp;{status}</li>
        })}
      </ol>
    </div>
    <div>
      <h2>Temperature</h2>
      <p>Normal engine temperature range is between 500 and 1500℃</p>
      <p>
        Current engine temperature is {engineTemp}℃
      </p>
    </div>
    <div>
      <h2>Radioactivity</h2>
      <p>Ambient radiation levels above 1 curie are potentially dangerous. Curie readings for the last hour below:</p>
      <table>
        <thead>
          <tr><th>Timestamp</th>
          <th>Curie level</th></tr>
        </thead>
        <tbody>
          {curieLevels.map((level, index) => {
            return <tr key={index}>
              <td>{(index + 1)* 10}&nbsp;minutes ago</td>
              <td>{level}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
    <div>
      <h2>Fold Rate</h2>
      <p>The rate at which the engine performed spacetime folds in the last five cycles.</p>
      <ol type="A" reversed>
        {foldRates.map((rate) => {
          return <li key={rate.cycle}>{rate.rate}&nbsp;folds per hour</li>
        })}
      </ol>
    </div>
    <div>
      <h2>Bats</h2>
      <p>Latest status of your Labrador Class Engine's pipistrelle bat colony. Remember, an engine without bats is like a day without smiles!</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mood</th>
            <th>Sleep this cycle</th>
            <th>Last meal</th>
          </tr>
        </thead>
        <tbody>
          {bats.map((bat) => {
            return <tr key={bat.name}>
              <td>{bat.name}</td>
              <td>{bat.mood}</td>
              <td>{bat.timeAsleep}&nbsp;hours</td>
              <td>{bat.lastMeal}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
    <TaskOneForm onSubmit={assessResponse} />
  </div>);
}

export default TaskOne