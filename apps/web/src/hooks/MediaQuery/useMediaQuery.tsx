import { machine } from "os";
import { useEffect, useState } from "react";

export enum DefaultQueries {
  SM = "640px",
  MD = "768px",
  LG = "1024px",
  XL = "1280px",
}

export function useMediaQuery(query: string): boolean {
  const parsedQuery = `(${query})`;

  const getMatches = (parsedQuery: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(parsedQuery).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(parsedQuery));
  const [clientMatches, setClientMatches] = useState(false);

  function handleChange() {
    setMatches(getMatches(parsedQuery));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(parsedQuery);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parsedQuery]);

  useEffect(() => {
    setClientMatches(matches);
  }, [matches]);

  return clientMatches;
}
