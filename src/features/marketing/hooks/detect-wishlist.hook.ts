import { useEffect } from "react";

export const useDetectWishlistChange = (wishlist: string[]) => {
  //* wishlist selector 變動時則將 wishlist 內容放入 localStorage 裡面
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
};
