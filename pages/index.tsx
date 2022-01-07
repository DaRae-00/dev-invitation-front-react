import type { NextPage } from 'next'
import { Layout } from '@components/common'

export default function Home<NextPage>() {
  return (
    <div>
      <div> 홈 입니다 </div>
    </div>
  )
}

Home.Layout = Layout
