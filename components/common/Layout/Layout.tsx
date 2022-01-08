import React, { FC } from 'react'
import cn from 'classnames'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useUI } from '@components/ui/context'
import { Navbar, Footer } from '@components/common'
import { useAcceptCookies } from 'lib/hooks/useAcceptCookies'
import { Sidebar, LoadingDots } from '@components/ui'
import { links } from '@config/links'

import s from './Layout.module.css'

const Loading = () => (
  <div className="w-80 h-80 flex items-center text-center justify-center p-3">
    <LoadingDots />
  </div>
)

const dynamicProps = {
  loading: Loading,
}

const Modal = dynamic(() => import('@components/ui/Modal'), {
  ...dynamicProps,
  ssr: false,
})

const ModalView: FC<{ modalView: string; closeModal(): any }> = ({
  modalView,
  closeModal,
}) => {
  return (
    <Modal onClose={closeModal}>
      <div>모달</div>
    </Modal>
  )
}

const ModalUI: FC = () => {
  const { displayModal, closeModal, modalView } = useUI()
  return displayModal ? (
    <ModalView modalView={modalView} closeModal={closeModal} />
  ) : null
}

const SidebarView: FC<{
  sidebarView: string
  closeSidebar(): any
}> = ({ sidebarView, closeSidebar }) => {
  return (
    <Sidebar onClose={closeSidebar}>
      <div>사이드 바 </div>
    </Sidebar>
  )
}

const SidebarUI: FC = () => {
  const { displaySidebar, closeSidebar, sidebarView } = useUI()

  return displaySidebar ? (
    <SidebarView sidebarView={sidebarView} closeSidebar={closeSidebar} />
  ) : null
}

const Layout: FC = ({ children }) => {
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies()
  const { locale = 'en-US' } = useRouter()

  return (
    <div className={cn(s.root)}>
      <Navbar links={links} />
      <main className="fit">{children}</main>
      <Footer />
      <ModalUI />
      <SidebarUI />
    </div>
  )
}

export default Layout
