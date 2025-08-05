import Seo from '@/utils/seo/seo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    return {
      postId: params.postId,
    }
  },
})

function RouteComponent() {
  const { postId } = Route.useLoaderData()
  return (
    <>
      <Seo title={postId} />
      <div>Hello "{postId}</div>
    </>
  )
}