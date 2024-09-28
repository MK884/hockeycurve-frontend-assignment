import React from "react";
import styles from "../styles/dialog.module.scss";

const Dialog = React.forwardRef<HTMLDialogElement, DialogProps>(
  ({ body, footer, header, style = {}, ...rest }, ref) => {
    return (
      <dialog ref={ref} className={styles["dialog"]} style={style} {...rest}>
        <header>{header}</header>
        <section>{body}</section>
        <footer>{footer}</footer>
      </dialog>
    );
  }
);

export default Dialog;