import React, { FC } from 'react'
import { Stop } from '@components/icons'
import { Button } from '@components/ui'

import s from './StopFooter.module.css'

const StopFooter: FC = () => {
  return (
    <div className={s.root}>
      <div className={s.text_wrap}>
        <div> 2022년 10월 01일</div>
        <div> 김선남 김선녀</div>
        <div> 결혼합니다</div>
      </div>
      <div className={s.button_wrap}>
        <Button variant="circle" className={s.button}>
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
