"use client";
import { createPortal } from "react-dom";
import { backdropClasses, modalClasses } from "./Backdrop.styles";

import { useToChangeBackdropOverFlow } from "./Backdrop.hooks";

import type { FC } from "react";
import type { IBackdrop } from "./Backdrop.types";

export const Backdrop: FC<IBackdrop> = ({ children, onClose }) => {
  const portalElement = document.body;

  useToChangeBackdropOverFlow();

  return (
    <>
      {createPortal(
        <div className={backdropClasses} onClick={onClose}>
          <div className={modalClasses}>{children}</div>
        </div>,
        portalElement,
      )}
    </>
  );
};
