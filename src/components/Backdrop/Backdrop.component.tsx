"use client";
import { createPortal } from "react-dom";
import { backdropClasses, modalClasses } from "./Backdrop.style";

import { useToChangeBackdropOverFlow } from "./Backdrop.hooks";

import type { FC, ReactNode, MouseEvent } from "react";

type PropsType = {
  children?: ReactNode;
  onClose: (e: MouseEvent<HTMLElement>) => void;
};

export const Backdrop: FC<PropsType> = ({ children, onClose }) => {
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
