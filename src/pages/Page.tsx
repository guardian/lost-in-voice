import { ReactChild, useEffect, useState } from "react";
import { neutral } from "@guardian/src-foundations/palette";
import { css } from "@emotion/react";

const pageStyles = css`
  height: 100vh;
  background-color: ${neutral[7]};
  color: ${neutral[7]} !important;
`;

type PageProps = {
  children: ReactChild,
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
