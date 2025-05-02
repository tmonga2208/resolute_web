// components/Navbar.tsx

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-4 py-1  bg-white dark:bg-zinc-900">
      {/* Logo */}
      <div className="w-[100px] h-[70px]">
        <Link href="/">
          <img src="/logo.png" className="w-full h-full object-fill" alt="logo"  />
        </Link>
        </div>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-6">
            <NavigationMenuItem className="text-gray-500">
                <NavigationMenuLink href="/home" className="text-xs font-medium hover:underline">
                  HOME
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-gray-500">
                <NavigationMenuLink href="/services" className="text-xs font-medium hover:underline">
                  ABOUT US
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-gray-500">
                <NavigationMenuLink href="/contact" className="text-xs font-medium hover:underline">
                  SERVICES
                </NavigationMenuLink>
                </NavigationMenuItem>
            <NavigationMenuItem className="text-gray-500">
                <NavigationMenuLink href="/about" className="text-xs font-medium hover:underline">
                  RESOURCES
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-gray-500">
                <NavigationMenuLink href="/about" className="text-xs font-medium hover:underline">
                  CONTACT US
                </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button className="rounded-4xl bg-teal-600 text-sm hover:bg-teal-700">SCHEDULE A CONSULTATION</Button>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
                  <SheetContent side="right" className="flex flex-col gap-6 ">
                      <NavigationMenu>
          <NavigationMenuList className="flex flex-col items-center gap-6">
                      <NavigationMenuItem className="text-gray-500">
                <NavigationMenuLink href="/home" className="text-xs font-medium hover:underline">
                  HOME
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-gray-500">
                <NavigationMenuLink href="/services" className="text-xs font-medium hover:underline">
                  ABOUT US
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-gray-500">
                <NavigationMenuLink href="/contact" className="text-xs font-medium hover:underline">
                  SERVICES
                </NavigationMenuLink>
                </NavigationMenuItem>
            <NavigationMenuItem className="text-gray-500">
                <NavigationMenuLink href="/about" className="text-xs font-medium hover:underline">
                  RESOURCES
                </NavigationMenuLink>
            </NavigationMenuItem>
             <NavigationMenuItem className="text-gray-500">
                <NavigationMenuLink href="/about" className="text-xs font-medium hover:underline">
                  CONTACT US
                </NavigationMenuLink>
                              </NavigationMenuItem>
                          </NavigationMenuList>
                </NavigationMenu>
            <Button className="w-full mt-4">Sign Up</Button>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
