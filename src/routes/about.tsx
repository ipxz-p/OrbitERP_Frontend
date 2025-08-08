import { createFileRoute } from "@tanstack/react-router"
import Seo from "@/utils/seo/seo"
import { useExample } from "@/features/example/hook"

export const Route = createFileRoute("/about")({
  component: RouteComponent,
})

function RouteComponent() {
  const { useExamples } = useExample()
  const { data } = useExamples()
  return (
    <>
      <Seo title="About" />
      <div>Hello "/about"!</div>
      {data}
    </>
  )
}
