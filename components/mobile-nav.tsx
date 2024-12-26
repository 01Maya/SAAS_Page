'use client'

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#solutions", label: "Solutions" },
  { href: "#features", label: "Features" },
  { href: "#analytics", label: "Analytics" },
  { href: "#cta", label: "Get Started" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleClick}
              className="block px-2 py-1 text-lg hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

