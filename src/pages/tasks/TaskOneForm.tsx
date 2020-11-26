import { ChangeEvent, FormEvent, useState } from "react";

type EngineTemp = 'normal' | 'high' | 'low'

type YesNoResponse = 'yes' | 'no'

type TaskOneField = 'faultRod' | 'engineTemp' | 'radiationLevel' | 'foldRate' | 'batStatus'

export type TaskOneResponse = {
  faultRod: string,
  engineTemp: EngineTemp,
  radiationLevel: YesNoResponse,
  foldRate: string,
  batStatus: YesNoResponse
}

const initialState: TaskOneResponse = {
  faultRod: '',
  engineTemp: 'normal',
  radiationLevel: 'no',
  foldRate: '',
  batStatus: 'yes'
}

type TaskOneFormProps = {
  onSubmit: (response: TaskOneResponse) => void
}

function TaskOneForm({ onSubmit }: TaskOneFormProps) {
  const [responses, setResponses] = useState(initialState);
  
  function onFieldChange(field: TaskOneField) {
    return function onChange(event: ChangeEvent<HTMLInputElement>) {
      console.log(field);
      if (event.target.type === 'text' || event.target.checked) {
        setResponses({
          ...responses,
          [field]: event.target.value,
        });
      }
    }
  }
  
  function onFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(responses);
  }
  
  return <div>
    <h2>Engine Fault Reporting Form</h2>
    <form onSubmit={onFormSubmit}>
      <label htmlFor="rods">
        Faulty fuel rod numbers, if any
        <input tabIndex={0} type="text" name="rods" id="rods" value={responses.faultRod} onChange={onFieldChange('faultRod')}/>
      </label>
      <fieldset>
        <legend>What is the engine temperature status?</legend>
        <label htmlFor="normal">
          <input type="radio" name="temp" id="normal" value="normal" onChange={onFieldChange('engineTemp')} defaultChecked />
          Normal
        </label>
        <label htmlFor="high">
          <input type="radio" name="temp" id="high" value="high" onChange={onFieldChange('engineTemp')} />
          High
        </label>
        <label htmlFor="low">
          <input type="radio" name="temp" id="low" value="low" onChange={onFieldChange('engineTemp')} />
          Low
        </label>
      </fieldset>
      <fieldset>
        <legend>Has the radiation risen to unsafe levels in the last half hour?</legend>
        <label htmlFor="yes">
          <input type="radio" name="radiation" id="yes" value="yes" onChange={onFieldChange('radiationLevel')} />
          Yes
        </label>
        <label htmlFor="no">
          <input type="radio" name="radiation" id="no" value="no" onChange={onFieldChange('radiationLevel')} defaultChecked />
          No
        </label>
      </fieldset>
      <label htmlFor="folds">
        Cycle with highest fold rate
        <input tabIndex={0} type="text" name="folds" id="folds" value={responses.foldRate} onChange={onFieldChange('foldRate')} />
      </label>
      <fieldset>
        <legend>How are the bats?</legend>
        <label htmlFor="okay">
          <input type="radio" name="bats" id="okay" value="yes" onChange={onFieldChange('batStatus')} defaultChecked />
          They seem fine
        </label>
        <label htmlFor="whocan">
          <input type="radio" name="bats" id="whocan" value="no" onChange={onFieldChange('batStatus')} />
          Who can say?
        </label>
      </fieldset>
      <input type="submit" value="Assess engine faults"/>
    </form>
  </div>
}

export default TaskOneForm;