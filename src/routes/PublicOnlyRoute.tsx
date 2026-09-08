import useUserSession from "@/hooks/useUserSession.ts"
import { Navigate, Outlet } from "react-router"

const PublicOnlyRoute = () => {
  const { usernameState } = useUserSession()

  if (usernameState)
    return <Navigate to={"/"} replace />

  return <Outlet />
}

export default PublicOnlyRoute