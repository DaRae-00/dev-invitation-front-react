import React, { FC } from 'react'
import cn from 'classnames'
import { Button } from '@components/ui'
import { Play, Gift, Write, Book } from '@components/icons'
import { useSelectedProduct } from '@components/product/selected'

import s from './PlayFooter.module.css'

const PlayFooter: FC = () => {
  const { onPlay, onSetMenuName } = useSelectedProduct()

  return (
    <div className={s.root}>
      <div className={s.list_wrap}>
        {/* <Button className={cn(s.button, s.list_button_height)}>
          <div className={s.icon}>
            <Gift />
          </div>
          <div> 선물함에 축의금 넣기 </div>
        </Button> */}
        <Button
          className={cn(s.button, s.list_button_height)}
          onClick={() => onSetMenuName('editBook')}
        >
          <div className={s.icon}>
            <Write />
          </div>
          <div> 방명록 작성하기 </div>
        </Button>
        <Button
          className={cn(s.button, s.list_button_height)}
          onClick={() => onSetMenuName('book')}
        >
          <div className={s.icon}>
            <Book />
          </div>
          <div> 방명록 구경하기 </div>
        </Button>
      </div>
      <div className={s.button_wrap}>
        <Button variant="circle" className={s.button} onClick={onPlay}>
          <div className={s.icon}>
            <Play />
          </div>
          <div> Play </div>
        </Button>
      </div>
    </div>
  )
}

export default PlayFooter
