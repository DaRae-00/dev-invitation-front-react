import React, { FC } from 'react'
import { Text } from '@components/ui'
import { notices } from '@config/home-notice'
import { Notice } from '@components/icons'

import s from './Preview.module.css'

const Preview: FC = () => {
  return (
    <div className={s.root}>
      <div className={s.header}>
        <Text variant="pageHeading">미리보기</Text>
      </div>
      <div className={s.content_wrap}>222</div>
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
