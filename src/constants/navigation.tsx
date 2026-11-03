import type { NavItemType } from "../types";
import { LayoutDashboard, CircleHelp, Cog } from 'lucide-react'

export const MENU_ITEMS: NavItemType[] = [
    {
    label: 'Dashboard',
    path: '/',
    icon: <LayoutDashboard/>, 
  },
  {
    label: 'Configuration',
    path: '/config',
    icon: <Cog/>,
  },
  {
    label: 'Help',
    path: '/help',
    icon: <CircleHelp/>,
  }
]