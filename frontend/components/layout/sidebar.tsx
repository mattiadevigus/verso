import { Home, Flag, Trophy, Settings, Info, UserRound } from "lucide-react"
 
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Header3, Mono } from "../ui/typography"
 
// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Races",
    url: "#",
    icon: Flag,
  },
  {
    title: "Championships",
    url: "#",
    icon: Trophy,
  },
    {
    title: "Drivers",
    url: "#",
    icon: UserRound,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Credits",
    url: "#",
    icon: Info,
  }
]
 
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl my-4">Verso 0.1</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="my-1">
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <Mono text={item.title} />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}