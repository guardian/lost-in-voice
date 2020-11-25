import { neutral } from "@guardian/src-foundations/palette";
import { space } from "@guardian/src-foundations";
import { css } from "@emotion/react";

export const landingHeading = css`
  margin-top: 0;
`;

export const landing = css`
  padding: ${space[9]}px;
  width: 50%;
  margin: 0 auto;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${neutral[100]};
  text-align: center;
`;
