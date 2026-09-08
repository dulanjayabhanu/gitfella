import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList, BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb.tsx"
import { Link, useLocation } from "react-router"
import { routeLabels } from "@/constants/routeLabels.ts"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button.tsx"
import { useTheme } from "@/components/theme-provider.tsx"
import { GitHubIcon } from "@/components/icons/github.tsx"

export function SiteHeader() {
  const { theme, setTheme } = useTheme()
  const location = useLocation()
  const currentLocation: string = routeLabels[location.pathname] ?? "Page"

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="flex h-(--header-height) w-full shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center justify-between gap-2">
        <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 h-4 data-vertical:self-auto"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink render={<Link to={"/"} />}>
                  GitFella
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>{currentLocation}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex items-center gap-1 px-4 lg:gap-2 lg:px-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleThemeToggle}
            className="relative"
            nativeButton={false}
            render={
              <a
                href="https://github.com/dulanjayabhanu/gitfella"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <GitHubIcon size={12} />
            <span className="sr-only">TView source on GitHub</span>
          </Button>
          <Separator
            orientation="vertical"
            className="mx-2 h-4 data-vertical:self-auto"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={handleThemeToggle}
            className="relative"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  )
}