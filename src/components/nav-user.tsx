import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { EllipsisVerticalIcon, CircleUserRoundIcon, LogOutIcon } from "lucide-react"
import useUserSession from "@/hooks/useUserSession.ts"
import getUserDataQueryOption from "@/queries/getUserDataQueryOption.ts"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import extractFirstLetters from "@/utils/extractFirstLetters.ts"
import defaultValues from "@/constants/defaultValues.ts"
import NavUserCardSkeleton from "@/components/custom/NavUserCardSkeleton.tsx"
import { Link, useNavigate } from "react-router"

export function NavUser() {
  const { usernameState, clearUsername } = useUserSession()
  const { data, isFetching, isError } = useQuery(getUserDataQueryOption(usernameState || "", !!usernameState))
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { isMobile } = useSidebar()

  const { field: defaultFieldValue } = defaultValues()

  if (isFetching || isError)
    return <NavUserCardSkeleton />

  const handleLogout = (): void => {
    clearUsername()
    queryClient.clear()
    navigate("/")
  }

  return usernameState ? (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton size="lg" className="aria-expanded:bg-muted" />
            }
          >
            <Avatar className="size-8 rounded-lg grayscale">
              <AvatarImage src={data?.avatar_url || ""} alt={data?.name || defaultFieldValue} />
              <AvatarFallback className="rounded-lg">{extractFirstLetters(data?.name || "")}</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{data?.name || defaultFieldValue}</span>
              <span className="truncate text-xs text-foreground/70">
                {data?.login || defaultFieldValue}
              </span>
            </div>
            <EllipsisVerticalIcon className="ml-auto size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="min-w-56"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="size-8">
                    <AvatarImage src={data?.avatar_url || ""} alt={data?.name || defaultFieldValue} />
                    <AvatarFallback className="rounded-lg">{extractFirstLetters(data?.name || "")}</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{data?.name || defaultFieldValue}</span>
                    <span className="truncate text-xs text-muted-foreground">
                      {data?.login || defaultFieldValue}
                    </span>
                  </div>
                </div>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                render={<Link to={"/profile"} />}
              >
                <CircleUserRoundIcon />
                Profile
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => handleLogout()}
            >
              <LogOutIcon />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  ) : null
}
