import clsx from "clsx";
import React, { useRef } from "react";
import { useClickAway } from "react-use";
import CloseIcon from "../../atoms/vectors/close-icon";
import "./Modal.scss";

const Modal = ({ children, openModal, title, closeModal, twClx, active }) => {
  const ref = useRef(null);
  useClickAway(ref, () => {
    closeModal(false);
  });

  return (
    <div className="Modal">
      {openModal && (
        <div
          className={clsx(
            "modal-overlay",
            active ? "modal-active-bg" : "modal-overlay-bg",
            twClx
          )}
          onClick={() => closeModal(false)}
        ></div>
      )}
      <div className={clsx("modal-wrap", openModal && "open")}>
        <div
          className={clsx("modal-box", active ? "bg-transparent" : "bg-bg-4")}
          ref={ref}
        >
          {!active && (
            <div className="modal-head">
              <div></div>
              <h1>{title}</h1>
              <span onClick={() => closeModal(false)}>
                {active ? (
                  <CloseIcon />
                ) : (
                  <img src="/vectors/close-icon.svg" alt="close modal" />
                )}
              </span>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
