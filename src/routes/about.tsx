import Seo from '@/utils/seo/seo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Seo title='About' />
      <div>Hello "/about"!</div>
    </>
  )
}
