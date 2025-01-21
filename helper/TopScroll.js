import { useEffect } from "react";

export default function TopScroll(modal, fun) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY >= 250) {
          setNavShow(true);
        } else {
          setNavShow(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
}
