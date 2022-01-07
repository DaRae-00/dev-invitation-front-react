import { FC } from 'react'
import NavbarRoot from './NavbarRoot'
import Link from 'next/link'
import { Logo, Container } from '@components/ui'

import s from './Navbar.module.css'

interface LinkType {
  href: string
  label: string
}

interface NavbarProps {
  links?: LinkType[]
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
    <Container>
      <div className={s.nav}>
        <div className="flex items-center flex-1">
          <Link href="/">
            <a className={s.logo} aria-label="Logo">
              <Logo />
            </a>
          </Link>
        </div>
        <nav className={s.navMenu}>
          {links?.map((l) => (
            <Link href={l.href} key={l.href}>
              <a className={s.link}>{l.label}</a>
            </Link>
          ))}
        </nav>
      </div>
    </Container>
  </NavbarRoot>
)

export default Navbar
