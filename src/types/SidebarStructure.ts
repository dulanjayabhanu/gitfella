import type { SidebarUser } from "@/types/SidebarUser.ts"
import type { SidebarElement } from "@/types/SidebarElement.ts"
import type { SidebarDocument } from "@/types/SidebarDocument.ts"

export type SidebarStructure = {
  user?: SidebarUser
  navMain: SidebarElement[]
  navSecondary: SidebarElement[]
  documents: SidebarDocument[]
}