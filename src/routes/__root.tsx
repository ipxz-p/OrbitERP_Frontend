import { Link, Outlet, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Toaster } from "sonner"
import { env } from "@/config/env"

export const Route = createRootRoute({
  component: () => (
    <>
      <Toaster position="top-right" richColors closeButton />
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/posts" className="[&.active]:font-bold">
          posts
        </Link>
      </div>
      <hr />
      <Outlet />
      {env.APP_ENVIRONMENT === "development" && (
        <>
          <TanStackRouterDevtools />
          <ReactQueryDevtools />
        </>
      )}
    </>
  ),
  notFoundComponent: () => {
    return <p>Page not found {"qwe"}</p>
  },
})
