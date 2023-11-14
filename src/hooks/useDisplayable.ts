'use client';

import { ReactNode, useState } from 'react';
import { usePathname } from 'next/navigation';

export function useDisplayable() {
  const [shouldDisplayNav, setShouldDisplayNav] = useState(false);

  const regexToSkipNav = [/\/auth.*/, /\/home.*/];

  const pathname = usePathname();

  function shouldSkip() {
    if (pathname == null) return false;
    return regexToSkipNav.some((regex) => regex.test(pathname));
  }

  // setShouldDisplayNav(!shouldSkip())

  function renderMenuIfNecessary(children: ReactNode) {
    if (shouldSkip()) return;
    return children;
  }

  return {
    shouldDisplayNav,
    renderMenuIfNecessary,
  };
}
