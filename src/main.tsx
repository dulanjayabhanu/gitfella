import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { TooltipProvider } from "@/components/ui/tooltip.tsx"
import { RouterProvider } from "react-router/dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Router from "@/routes/Router.tsx"
import UserSessionProvider from "@/context/UserSessionProvider.tsx"

const client = new QueryClient()
const router = Router()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <UserSessionProvider>
        <ThemeProvider
          defaultTheme="system"
          storageKey="gitfella-ui-theme"
        >
          <TooltipProvider>
            <RouterProvider router={router} />
          </TooltipProvider>
        </ThemeProvider>
      </UserSessionProvider>
    </QueryClientProvider>
  </StrictMode>
)