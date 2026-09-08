import type { SidebarStructure } from "@/types/SidebarStructure.ts"
import {
  CircleUserRoundIcon,
  Crown,
  DatabaseIcon,
  FileText,
  HeartHandshake,
  House,
  ShieldCheck,
  ThumbsDown,
} from "lucide-react"

const sidebarStructure = (): SidebarStructure => {
  return {
    navMain: [
      {
        title: "Home",
        url: "/",
        icon: <House />,
      },
      {
        title: "Profile",
        url: "/profile",
        icon: <CircleUserRoundIcon />,
      },
      {
        title: "Fans",
        url: "/fans",
        icon: <Crown />,
      },
      {
        title: "Not Follow Back",
        url: "/not-follow-back",
        icon: <ThumbsDown />,
      },
      {
        title: "Fellas",
        url: "/fellas",
        icon: <HeartHandshake />,
      },
    ],
    navSecondary: [
      {
        title: "Privacy Policy",
        url: "/privacy",
        icon: <ShieldCheck />,
      },
      {
        title: "Terms of Service",
        url: "/terms",
        icon: <FileText />,
      },
    ],
    documents: [
      {
        name: "Raw Data",
        url: "/raw-data",
        icon: <DatabaseIcon />,
      },
    ],
  }
}

export default sidebarStructure