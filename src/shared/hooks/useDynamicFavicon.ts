import { useEffect } from "react";

export const useDynamicFavicon = () => {
  useEffect(() => {
    const setFavicon = (theme: "light" | "dark") => {
      const faviconLink: HTMLLinkElement =
        document.querySelector("link[rel='icon']") ||
        document.createElement("link");
      faviconLink.rel = "icon";
      faviconLink.href =
        theme === "dark" ? "/favicon-dark.png" : "/favicon-light.png";
      if (!faviconLink.parentNode) {
        document.head.appendChild(faviconLink);
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setFavicon(mediaQuery.matches ? "dark" : "light");
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setFavicon(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);
};
