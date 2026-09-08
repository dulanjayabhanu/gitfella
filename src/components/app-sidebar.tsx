import * as React from "react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import sidebarStructure from "@/constants/sidebarStructure.tsx"
import type { SidebarStructure } from "@/types/SidebarStructure.ts"
import { Link } from "react-router"
import { GitfellaIcon } from "@/components/icons/gitfella.tsx"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const sidebarStructureData: SidebarStructure = sidebarStructure()

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={<Link to={"/"} />}
            >
              <GitfellaIcon className="size-5!" />
              <span className="text-base font-semibold">GitFella</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarStructureData.navMain} />
        <NavDocuments items={sidebarStructureData.documents} />
        <NavSecondary items={sidebarStructureData.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
