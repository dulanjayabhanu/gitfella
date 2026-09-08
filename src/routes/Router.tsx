import { createBrowserRouter } from "react-router"
import { lazy } from "react"
import ProtectedRoute from "@/routes/ProtectedRoute.tsx"
import PublicOnlyRoute from "@/routes/PublicOnlyRoute.tsx"
import NotFoundPage from "@/pages/NotFoundPage.tsx"
import ErrorPage from "@/pages/ErrorPage.tsx"

const DashboardPage = lazy(() => import("@/pages/DashboardPage.tsx"))
const HomePage = lazy(() => import("@/pages/HomePage.tsx"))
const LoginPage = lazy(() => import("@/pages/LoginPage.tsx"))
const ProfilePage = lazy(() => import("@/pages/ProfilePage.tsx"))
const FansPage = lazy(() => import("@/pages/FansPage.tsx"))
const NotFollowBackPage = lazy(() => import("@/pages/NotFollowBackPage.tsx"))
const FellasPage = lazy(() => import("@/pages/FellasPage.tsx"))
const RawDataPage = lazy(() => import("@/pages/RawDataPage.tsx"))
const PrivacyPage = lazy(() => import("@/pages/PrivacyPage.tsx"))
const TermsPage = lazy(() => import("@/pages/TermsPage.tsx"))

const Router = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          element: <ProtectedRoute />,
          children: [
            {
              path: "/profile",
              element: <ProfilePage />,
            },
            {
              path: "/fans",
              element: <FansPage />,
            },
            {
              path: "/not-follow-back",
              element: <NotFollowBackPage />,
            },
            {
              path: "/fellas",
              element: <FellasPage />,
            },
            {
              path: "/raw-data",
              element: <RawDataPage />,
            },
          ],
        },
        {
          element: <PublicOnlyRoute />,
          children: [
            {
              path: "/login",
              element: <LoginPage />,
            },
          ],
        },
        {
          path: "/privacy",
          element: <PrivacyPage />,
        },
        {
          path: "/terms",
          element: <TermsPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ])
}

export default Router