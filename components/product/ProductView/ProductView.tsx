import React, { FC } from 'react'
import { IconContext } from 'react-icons'
import { ProductWrap } from '@components/product'

import s from './ProductView.module.css'

const ProductView: FC = () => {
  return (
    <IconContext.Provider value={{ className: 'product-react-icon-class' }}>
      <div className={s.root}>
        <ProductWrap></ProductWrap>
      </div>
    </IconContext.Provider>
  )
}

export default ProductView
