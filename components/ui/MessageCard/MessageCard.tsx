import React, { FC } from 'react'
import { Cross } from '@components/icons'
import s from './MessageCard.module.css'

const MessageCard: FC<{ name?: string; content?: string }> = ({
  name = '이름',
  content = '',
}) => {
  return (
    <div className={s.root}>
      <div className={s.header}>
        <div className={s.name}> {name}</div>
        <button className={s.icon}>
          <Cross width="20" height="20" />
        </button>
      </div>
      <div className={s.content}>{content}</div>
    </div>
  )
}

export default MessageCard
