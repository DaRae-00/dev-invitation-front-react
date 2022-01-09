import React, { FC } from 'react'
import { ProductWrap } from '@components/product'
import Image from 'next/image'
import { Product } from '@components/product/types'

import s from './ProductListView.module.css'

interface ProductListViewProps {
  products?: Product[]
}

const ProductListView: FC<ProductListViewProps> = ({ products = [] }) => {
  return (
    <div className={s.root}>
      {products?.map((p, index) => (
        <ProductWrap
          key={`product-wrap-${index}`}
          headerText={p.title}
          product={p}
        >
          <Image
            src={p.images[0]}
            alt={`product name is ${p.title}`}
            width={500}
            height={472}
          />
        </ProductWrap>
      ))}
    </div>
  )
}

export default ProductListView
