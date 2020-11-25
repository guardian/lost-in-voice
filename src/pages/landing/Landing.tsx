import { ChangeEvent, FormEvent } from "react";
import { TextInput } from "@guardian/src-text-input"
import { Button } from "@guardian/src-button"
import { starFieldBackground, smallStars, mediumStars, bigStars } from "./stars";
import { landing, landingHeading } from "./landingStyles";

type LandingProps = {
  name: string,
  setName: (event: ChangeEvent<HTMLInputElement>) => void
  start: (event: FormEvent<HTMLFormElement>) => void
}

function Landing({ name, setName, start }: LandingProps) {
  return (
    <div css={starFieldBackground}>
      <div css={smallStars}></div>
      <div css={mediumStars}></div>
      <div css={bigStars}></div>
      <section css={landing}>
        <h1 css={landingHeading}>Welcome aboard the HMSS Overvoice</h1>
        <form onSubmit={start}>
          <TextInput
            label="Please enter your name"
            value={name}
            onChange={setName}
            width={30}
          />
          <Button
            priority="primary"
            size="default"
          >
            Start
        </Button>
        </form>
      </section>
    </div>
  );
}

export default Landing;