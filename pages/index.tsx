import type { NextPage } from 'next'
import { Layout } from '@components/common'
import { ProductView } from '@components/product'
import { products } from 'test/data'

export default function Home<NextPage>() {
  return (
    <div>
      <ProductView products={products} />
    </div>
  )
}

Home.Layout = Layout
