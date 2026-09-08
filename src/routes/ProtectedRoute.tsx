import useUserSession from "@/hooks/useUserSession.ts"
import { Navigate, Outlet } from "react-router"

const ProtectedRoute = () => {
  const { usernameState } = useUserSession()

  if (!usernameState)
    return <Navigate to={"/login"} replace />

  return <Outlet />
}

export default ProtectedRoute