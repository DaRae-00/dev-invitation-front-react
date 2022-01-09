import React, { FC } from 'react'
import { ProductListView, Preview } from '@components/product'
import { Products } from '@components/product/types'
import { SelectedProvider } from '@components/product/selected'

const ProductView: FC<Products> = ({ products }) => {
  return (
    <SelectedProvider>
      <div className="flex flex-wrap">
        <div>
          <Preview />
        </div>
        <div>
          <div className="text-center p-8">
            <div className="text-h2">
              결혼식에 오지 못하는 친구나 친지분들께
            </div>
            <div className="text-h2">마음을 전하세요</div>
          </div>
          <ProductListView products={products} />
        </div>
      </div>
    </SelectedProvider>
  )
}

export default ProductView
