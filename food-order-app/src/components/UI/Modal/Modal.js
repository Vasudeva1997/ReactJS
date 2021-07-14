import cssClasses from "./Modal.module.css";
import React from "react";
import ReactDOM  from "react-dom";

const Backdrop = (props) => {
  return <div className={cssClasses.backdrop}></div>;
};

const Overlay = (props) => {
  return (
    <div className={cssClasses.modal}>
      <div className={cssClasses.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
