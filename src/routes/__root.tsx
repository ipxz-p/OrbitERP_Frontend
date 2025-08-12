import { Outlet, createRootRouteWithContext, useMatchRoute } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Toaster } from "sonner"
import type { QueryClient } from "@tanstack/react-query"
import { env } from "@/config/env"
import Navbar from "@/components/navbar"

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: RootComponent,
  notFoundComponent: () => {
    return <p>Page not found</p>
  },
})

function RootComponent() {
  const hideNavbarRoutes = ["/login"]

  const matchRoute = useMatchRoute()

  const matchedHideNavRoutes = hideNavbarRoutes.some((route) => matchRoute({ to: route }))

  return (
    <>
      <Toaster position="top-right" richColors closeButton />
      {!matchedHideNavRoutes && <Navbar />}
      <Outlet />
      {env.APP_ENVIRONMENT === "development" && (
        <>
          <TanStackRouterDevtools />
          <ReactQueryDevtools />
        </>
      )}
    </>
  )
}
