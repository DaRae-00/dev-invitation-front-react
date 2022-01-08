import { Layout } from '@components/common'
import { Text } from '@components/ui'

export default function Error() {
  return (
    <div className="max-w-2xl mx-8 sm:mx-auto py-20 flex flex-col items-center justify-center fit">
      <Text variant="heading">Error</Text>
      <Text className="">Sorry, there was an error.</Text>
    </div>
  )
}

Error.Layout = Layout
