import React, { FC } from 'react'
import BasicFooter from './Footers/BasicFooter'
import StopFooter from './Footers/StopFooter'
import PlayFooter from './Footers/PlayFooter'
import { Product } from '@components/product/types'
import { useSelectedProduct } from '@components/product/selected'

interface ProductFooterProps {
  date?: string
  state?: 'basic' | 'play' | 'stop'
  product?: Product
}

const getComponent = (state: string, product?: Product) => {
  switch (state) {
    case 'basic':
      return <BasicFooter product={product} />
    case 'play':
      return <PlayFooter />
    case 'stop':
      return <StopFooter />
    default:
      return <BasicFooter />
  }
}

const ProductFooter: FC<ProductFooterProps> = ({
  date,
  state = 'basic',
  product,
}) => {
  return <>{getComponent(state, product)}</>
}

export default ProductFooter
