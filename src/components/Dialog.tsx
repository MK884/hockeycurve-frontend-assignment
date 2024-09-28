import React from "react";
import styles from "../styles/dialog.module.scss";

const Dialog = React.forwardRef<HTMLDialogElement, DialogProps>(
  ({ body, footer, header, style = {}, children, ...rest }, ref) => {
    return (
      <dialog ref={ref} className={styles["dialog"]} style={style} {...rest}>
       {children}
      </dialog>
    );
  }
);

export default Dialog;