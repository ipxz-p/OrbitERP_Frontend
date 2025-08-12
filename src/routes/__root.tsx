import { Outlet, createRootRouteWithContext, useMatchRoute } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Toaster } from "sonner"
import type { QueryClient } from "@tanstack/react-query"
import type { AuthState } from "@/context/auth"
import { env } from "@/config/env"
import Navbar from "@/components/navbar"

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
  auth: AuthState
}>()({
  component: RootComponent,
  notFoundComponent: () => {
    return <p>Page not found</p>
  },
})

function RootComponent() {
  const hideNavbarRoutes = ["/login12"]

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
