import { LayoutDashboard, CircleHelp, Cog } from 'lucide-react'
import type { FooterItemType } from "../types";

export const FOOTER_ITEMS: FooterItemType[] = [
 {
    href: '/',
    icon: <LayoutDashboard/>,
    normalColor: 'text-slate-100',
    hoverColor: 'text-slate-800'
 },
 {
    href: '/',
    icon: <CircleHelp/>,
    normalColor: 'text-blue-500',
    hoverColor: 'text-blue-800'
 },
 {
    href: '/',
    icon: <Cog/>,
    normalColor: 'text-red-500',
    hoverColor: 'text-red-800'
 }
]