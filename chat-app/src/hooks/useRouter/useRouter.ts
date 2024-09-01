import { useRouter as useNextRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import type { UrlObject } from 'url'
import { pagesPath, PagesPath } from '@src/lib/pathpida/$path'

export const useRouter = () => {
  const [isClient, setIsClient] = useState(false);
  const nextRouter = useNextRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const push = useCallback(
    (url: UrlObject | ((path: PagesPath) => UrlObject)) => {
      if (!isClient) return;
      return nextRouter.push(typeof url === 'function' ? url(pagesPath) : url);
    },
    [nextRouter, isClient]
  );

  const replace = useCallback(
    (url: UrlObject | ((path: PagesPath) => UrlObject)) => {
      if (!isClient) return;
      return nextRouter.replace(
        typeof url === 'function' ? url(pagesPath) : url
      );
    },
    [nextRouter, isClient]
  );

  return { push, replace } as const;
}
