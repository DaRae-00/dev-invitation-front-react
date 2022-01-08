import React, { FC } from 'react'
import { Text } from '@components/ui'
import { ProductFooter } from '@components/product'
import toPixels from '@lib/to-pixels'

import s from './ProductWrap.module.css'

interface ProductWrapProps {
  headerText?: string
  children?: React.ReactDOM | any
}

const ProductWrap: FC<ProductWrapProps> = ({
  headerText = 'Text',
  children,
}) => {
  return (
    <div className={s.root}>
      <div className={s.header}>
        <Text variant="sectionHeading"> {headerText} </Text>
      </div>
      <div className={s.content_wrap}>{children}</div>
      <div className={s.footer}>
        <ProductFooter />
      </div>
    </div>
  )
}

export default ProductWrap
