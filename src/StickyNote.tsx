import { css } from "@emotion/react";

const stickyContainer = css`
  width: 270px;
  position: absolute;
  bottom: 20px;
  transform: rotate(5deg);
  right: 20px;
`;

const stickyOuter = css`
  display: flex;
  padding-top: 92.5925926%;
  position: relative;
  width: 100%;
`;

const sticky = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

/* The sticky note itself */
const stickyContent = css`
  background: linear-gradient(
    180deg,
    rgba(187, 235, 255, 1) 0%,
    rgba(187, 235, 255, 1) 12%,
    rgba(170, 220, 241, 1) 75%,
    rgba(195, 229, 244, 1) 100%
  );
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Marker Felt', cursive;
  font-size: 1.25rem;
`;

function StickyNote() {
  return <div css={stickyContainer} aria-hidden="true">
        <div css={stickyOuter}>
          <div css={sticky}>
            <div css={stickyContent}>
              Spoken interface notes
              <ul>
                <li>Command + F5 to start</li>
                <li>Ctrl + Option + arrow keys to navigate</li>
                <li>Try Ctrl + Option + U for the rotor!</li>
              </ul>
              <span>- Captain Kaur</span>
            </div>
          </div>
        </div>
      </div>
}

export default StickyNote