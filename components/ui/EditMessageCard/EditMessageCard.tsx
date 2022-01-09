import React, { FC } from 'react'
import { Button } from '@components/ui'
import s from './EditMessageCard.module.css'

const MessageCard: FC = () => {
  return (
    <div className={s.root}>
      <div className={s.header}>
        <input
          className={s.name}
          type="text"
          placeholder="이름을 기록해주세요"
          maxLength={20}
        ></input>
      </div>
      <div className={s.content}>
        <textarea
          className={s.content_text}
          placeholder="내용을 기록해주세요"
          rows={5}
          cols={20}
          maxLength={100}
        ></textarea>
      </div>
      <div className="flex justify-end">
        <Button variant="slim" className={s.save}>
          저장
        </Button>
      </div>
    </div>
  )
}

export default MessageCard
