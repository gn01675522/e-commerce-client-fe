import { useEffect } from "react";

export const useToChangeBackdropOverFlow = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);
};
