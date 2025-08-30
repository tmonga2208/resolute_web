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
import CalendarModal from "./calendar"

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
                <NavigationMenuLink href="/" className="text-xs font-medium hover:underline">
                  HOME
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-gray-500">
                <NavigationMenuLink href="/about" className="text-xs font-medium hover:underline">
                  ABOUT US
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-gray-500">
                <NavigationMenuLink href="/services" className="text-xs font-medium hover:underline">
                  SERVICES
                </NavigationMenuLink>
                </NavigationMenuItem>
            <NavigationMenuItem className="text-gray-500">
                <NavigationMenuLink href="/resources" className="text-xs font-medium hover:underline">
                  RESOURCES
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-gray-500">
                <NavigationMenuLink href="/contact" className="text-xs font-medium hover:underline">
                  CONTACT US
                </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <CalendarModal/>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden font-mont">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
                  <SheetContent side="right" className="flex flex-col ">
                      <NavigationMenu>
          <NavigationMenuList className="w-full flex flex-col items-center justify-center gap-6">
                      <NavigationMenuItem className="ml-12 text-gray-500 w-full ">
                <NavigationMenuLink href="/" className="text-lg flex font-medium">
                  HOME
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="ml-12 text-gray-500 w-full">
                <NavigationMenuLink href="/about" className="text-lg font-medium">ABOUT US</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="ml-12 text-gray-500 w-full">
                <NavigationMenuLink href="/services" className="text-lg font-medium">
                  SERVICES
                </NavigationMenuLink>
                </NavigationMenuItem>
            <NavigationMenuItem className="ml-12 text-gray-500 w-full">
                <NavigationMenuLink href="/resources" className="text-lg font-medium hover:underline">
                  RESOURCES
                </NavigationMenuLink>
            </NavigationMenuItem>
             <NavigationMenuItem className="ml-12 text-gray-500 w-full">
                <NavigationMenuLink href="/contact" className="text-lg font-medium hover:underline">
                  CONTACT US
                </NavigationMenuLink>
                </NavigationMenuItem>
                 <NavigationMenuItem className="ml-12 text-gray-500 w-full">   
            <CalendarModal/>
                              </NavigationMenuItem>
                          </NavigationMenuList>
                </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
