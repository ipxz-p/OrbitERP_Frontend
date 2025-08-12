import { createFileRoute, useLoaderData } from "@tanstack/react-router"
import Seo from "@/utils/seo/seo"
import { exampleQueryOptions } from "@/features/example/hooks/useExample"

export const Route = createFileRoute("/about")({
  loader: ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(exampleQueryOptions.all())
  },
  component: RouteComponent,
})

function RouteComponent() {
  const data = useLoaderData({ from: "/about" })

  return (
    <>
      <Seo title="About" />
      <div>Hello "/about"!</div>
      {data.status}
    </>
  )
}
