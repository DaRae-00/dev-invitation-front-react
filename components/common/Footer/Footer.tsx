import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import getSlug from 'lib/get-slug'
import { Github } from '@components/icons'
import { Logo, Container } from '@components/ui'

import s from './Footer.module.css'

interface Props {
  className?: string
  children?: any
}

const links = [
  {
    name: 'Home',
    url: '/',
  },
]

const Footer: FC<Props> = ({ className }) => {
  const rootClassName = cn(s.root, className)

  return (
    <footer className={rootClassName}>
      <Container>
        <div style={{ height: '50px', padding: '10px' }}> made by darae </div>
      </Container>
    </footer>
  )
}

export default Footer
