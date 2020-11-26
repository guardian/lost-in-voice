import { ReactNode, useEffect, useState } from "react";
import { neutral } from "@guardian/src-foundations/palette";
import { css } from "@emotion/react";

const pageStyles = css`
  height: 100vh;
  /* overflow: hidden;
  background-color: ${neutral[7]};
  color: ${neutral[7]};
  
  & * {
    margin: 0;
    border-color: ${neutral[7]};
    border-style: solid;
    background-color: ${neutral[7]};
    opacity: 0; 
  } */
`;

type PageProps = {
  children: ReactNode,
  onRender: () => void
}

function Page({ children, onRender }: PageProps) {
  const [dialogPending, setDialogPending] = useState(true);
  
  useEffect(() => {
    if (dialogPending) {
      onRender();
      setDialogPending(false);
    }
  }, [onRender, dialogPending]);
  
  return <section css={pageStyles}>
    {children}
  </section>
}

export default Page;
