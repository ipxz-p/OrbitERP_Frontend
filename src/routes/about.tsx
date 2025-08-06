import { createFileRoute } from "@tanstack/react-router"
import { useEffect } from "react"
import { toast } from "sonner"
import Seo from "@/utils/seo/seo"
import { api } from "@/lib/api-client"

export const Route = createFileRoute("/about")({
  component: RouteComponent,
})

function RouteComponent() {
  useEffect(() => {
    api.get("test").then((res) => {
      toast.success("fetch success")
      console.log(res)
    })
  }, [])
  return (
    <>
      <Seo title="About" />
      <div>Hello "/about"!</div>
    </>
  )
}
