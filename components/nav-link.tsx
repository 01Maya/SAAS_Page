'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function NavLink({ href, children, className = "" }: NavLinkProps) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(href)
      if (section) {
        const rect = section.getBoundingClientRect()
        setIsActive(rect.top <= 100 && rect.bottom >= 100)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [href])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const section = document.querySelector(href)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${className} relative text-sm font-medium transition-colors hover:text-primary ${
        isActive ? "text-primary" : "text-foreground/60"
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary" />
      )}
    </Link>
  )
}

