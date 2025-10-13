"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <img 
            src="/acm-logo.jpg" 
            alt="ACM JIS University Logo" 
            className="h-10 w-auto object-contain mix-blend-multiply"
          />
          <span className="text-lg">ACM JIS University</span>
        </Link>
        <nav className={cn("items-center gap-6 md:flex", open ? "flex" : "hidden")}>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground">
            About
          </a>
          <a href="#why-join" className="text-sm text-muted-foreground hover:text-foreground">
            Why Join
          </a>
          <a href="#vision" className="text-sm text-muted-foreground hover:text-foreground">
            Vision
          </a>
          <a href="#team" className="text-sm text-muted-foreground hover:text-foreground">
            Team
          </a>
          <Button asChild size="sm">
            <a href="#contact">Contact</a>
          </Button>
        </nav>
        <button aria-label="Toggle menu" className="md:hidden" onClick={() => setOpen((v) => !v)}>
          <span className="i-lucide-menu h-6 w-6" />
        </button>
      </div>
    </header>
  )
}
