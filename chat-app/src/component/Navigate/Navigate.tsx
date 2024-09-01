import type { ReactNode } from 'react'
import Link from 'next/link'
import NextLink from 'next/link'

import type { UrlObject } from 'url'
import { pagesPath, PagesPath } from '@src/lib/pathpida/$path'

type Props = {
  href: UrlObject | ((path: PagesPath) => UrlObject)
  children: ReactNode
}

export const Navigate = ({ href, children }: Props) => {
  return (
    <Link  as={NextLink} href={typeof href === 'function' ? href(pagesPath) : href}>
      {children}
    </Link>
  )
}
