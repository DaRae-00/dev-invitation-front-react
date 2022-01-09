import React, { FC } from 'react'
import { Bag, PreviewMovie } from '@components/icons'
import { Button } from '@components/ui'
import { useSelectedProduct } from '@components/product/selected'
import { Product } from '@components/product/types'

import s from './BasicFooter.module.css'

interface BasicFooterProps {
  product?: Product
}

const BasicFooter: FC<BasicFooterProps> = ({ product }) => {
  const { onSetSelectedProduct } = useSelectedProduct()

  return (
    <div className={s.root}>
      <div className="flex justify-around">
        <Button
          className={s.menu}
          onClick={() => onSetSelectedProduct(product)}
        >
          <div className={s.icon}>
            <PreviewMovie />
          </div>
          <div>미리보기</div>
        </Button>

        {/* <Button className={s.menu}>
          <div className={s.icon}>
            <Bag />
          </div>
          <div>구매하기</div>
        </Button> */}
      </div>
    </div>
  )
}

export default BasicFooter
