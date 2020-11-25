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
        <h1 css={landingHeading}>Welcome aboard the HMSS Aderin-Pocock</h1>
        <p>
          Congratulations on being selected to join the crew of Her Majesty's Starship Aderin-Pocock, a joint European deep space scientific mission.
        </p>
        <p>
          Before you reach your first destination, you will enjoy five years of cryosleep while the ship's automated systems guide you out of our solar
          system and into the galaxy beyond. What could possibly go wrong?
        </p>
        
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
            type="submit"
          >
            Start
          </Button>
        </form>
        <p>
          This game is designed to be played on macOS Safari
        </p>
      </section>
    </div>
  );
}

export default Landing;