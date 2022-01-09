import React, { FC } from 'react'
import { Stop, Heart } from '@components/icons'
import { Button } from '@components/ui'
import toFormatDate from '@lib/to-format-date'
import { useSelectedProduct } from '@components/product/selected'

import s from './StopFooter.module.css'

interface StopFooterProps {
  date?: string
  name1?: string
  name2?: string
}

const StopFooter: FC<StopFooterProps> = ({
  date = '2022-01-01',
  name1 = '김선남',
  name2 = '김선녀',
}) => {
  const { onStop } = useSelectedProduct()

  return (
    <div className={s.root}>
      <div className={s.text_wrap}>
        <div> {toFormatDate(date, 'y년 M월 d일')}</div>
        <div>
          {name1} ♡ {name2}
        </div>
        <div> 결혼합니다</div>
      </div>
      <div className={s.button_wrap}>
        <Button variant="circle" className={s.button} onClick={onStop}>
          <div className={s.icon}>
            <Stop />
          </div>
          <div> Stop </div>
        </Button>
      </div>
    </div>
  )
}

export default StopFooter
