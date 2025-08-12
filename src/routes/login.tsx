import { createFileRoute } from "@tanstack/react-router"
import BaseButton from "@/components/ui/base/button"
import { useAuth } from "@/context/auth"

export const Route = createFileRoute("/login")({
  component: RouteComponent,
})

function RouteComponent() {
  const auth = useAuth()

  const handleLogin = async () => {
    await auth.login("emilys", "emilyspass")
  }

  const handleLogout = () => {
    auth.logout()
  }

  return (
    <>
      {auth.isAuthenticated ? (
        <BaseButton onClick={handleLogout}>Logout</BaseButton>
      ) : (
        <BaseButton onClick={handleLogin}>Login</BaseButton>
      )}
    </>
  )
}
