import { LuLinkedin, LuGithub } from "react-icons/lu";
import { MdOutlineWorkOutline } from "react-icons/md";
import type { FooterItemType } from "../types";

export const FOOTER_ITEMS: FooterItemType[] = [
 {
    href: '/',
    icon: <LuLinkedin/>
 },
 {
    href: '/',
    icon: <LuGithub/>
 },
 {
    href: '/',
    icon: <MdOutlineWorkOutline/>
 }
]