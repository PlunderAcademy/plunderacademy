import * as React from "react";

// Page intros (hero sections) show expanded on a visitor's first visit and collapsed
// after that. An explicit show/hide choice is remembered per page in localStorage.
export function usePageIntro(page: string) {
  const storageKey = `plunder-academy:intro:${page}`;

  const [open, setOpen] = React.useState(() => {
    try {
      return localStorage.getItem(storageKey) !== "collapsed";
    } catch {
      return true;
    }
  });

  React.useEffect(() => {
    try {
      // First visit: show it now, collapse it on the next visit
      if (localStorage.getItem(storageKey) === null) {
        localStorage.setItem(storageKey, "collapsed");
      }
    } catch {
      // Storage unavailable (private mode, blocked): the intro just shows each visit
    }
  }, [storageKey]);

  const toggle = React.useCallback(() => {
    setOpen((wasOpen) => {
      try {
        localStorage.setItem(storageKey, wasOpen ? "collapsed" : "expanded");
      } catch {
        // Ignore: the choice applies to this visit only
      }
      return !wasOpen;
    });
  }, [storageKey]);

  return { open, toggle };
}
