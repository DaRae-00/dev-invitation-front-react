import React, { FC, useState, useEffect } from 'react'
import { notices } from '@config/home-notice'
import { Notice } from '@components/icons'
import { ProductWrap } from '@components/product'
import { useSelectedProduct } from '@components/product/selected'
import Image from 'next/image'
import { MessageCard, EditMessageCard } from '@components/ui'

import s from './Preview.module.css'
let interval: number | any = null

const ImagesAnimation: FC<{ src?: string }> = ({ src }) => {
  return !!src ? (
    <Image src={src} alt="content image" width={500} height={472} />
  ) : (
    <div></div>
  )
}

const MessageCardList: FC = () => {
  return <MessageCard />
}

const EditMessageCardView: FC = () => {
  return <EditMessageCard />
}

const getComponent = (selectedMenu: string, src?: string) => {
  switch (selectedMenu) {
    case 'image':
      return <ImagesAnimation src={src} />
    case 'book':
      return <MessageCardList />
    case 'editBook':
      return <EditMessageCardView />
  }
}

const Preview: FC = () => {
  const { title, images, play, selectedMenu } = useSelectedProduct()
  const [image, setImage] = useState<string>('')
  const [previewFooterState, setPreviewFooterState] = useState<'play' | 'stop'>(
    'play'
  )

  const playImageAnimation = (images: string[]) => {
    let count = 1
    let imageIdx = 1
    setImage(images[imageIdx])

    interval = setInterval(() => {
      setImage(images[imageIdx])
      ++count
      imageIdx = count % images.length
    }, 3000)
  }

  const stopImageAnimation = () => {
    setImage('')
    clearInterval(interval)
    interval = null
  }

  useEffect(() => {
    setPreviewFooterState(play ? 'stop' : 'play')
    play ? playImageAnimation(images) : stopImageAnimation()
  }, [play])

  return (
    <div className={s.root}>
      <div className={s.header}>
        <div className="text-h4">미리보기</div>
      </div>
      <div className={s.content_wrap}>
        <ProductWrap state={previewFooterState} headerText={title || ''}>
          {getComponent(selectedMenu, image || images[0])}
        </ProductWrap>
      </div>
      <div className={s.notice_wrap}>
        <ul>
          {notices.map((n, idx) => (
            <li key={`notice-${idx}`}>
              <div className={s.notice_list}>
                <div className="mr-1 mt-1">
                  <Notice size="15" color="#6868ac" />
                </div>
                <div>{n}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Preview
