import React, { FC } from 'react'
import { Text } from '@components/ui'
import { ProductFooter } from '@components/product'
import { IconContext } from 'react-icons'
import { Product } from '@components/product/types'

import s from './ProductWrap.module.css'

interface ProductWrapProps {
  headerText?: string
  state?: 'basic' | 'play' | 'stop'
  children?: React.ReactDOM | any
  product?: Product
}

const ProductWrap: FC<ProductWrapProps> = ({
  headerText = 'Text',
  children,
  state,
  product,
}) => {
  return (
    <IconContext.Provider value={{ className: 'product-react-icon-class' }}>
      <div className={s.root}>
        <div className={s.header}>
          <div className="text-h4"> {headerText} </div>
        </div>
        <div className={s.content_wrap}>{children}</div>
        <div className={s.footer}>
          <ProductFooter state={state} product={product} />
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default ProductWrap
