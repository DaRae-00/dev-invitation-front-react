import type { NextPage } from 'next'
import { Layout } from '@components/common'
import { ProductView, Preview } from '@components/product'

export default function Home<NextPage>() {
  return (
    <div className="flex flex-wrap">
      <div>
        <Preview />
      </div>
      <div>
        <ProductView />
      </div>
    </div>
  )
}

Home.Layout = Layout
