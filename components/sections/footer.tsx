import { Linkedin, Twitter, Instagram, Github, Mail } from "lucide-react"

export function Footer() {
  const socials = [
    { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/acm-jisu-ab9504391/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { label: "Twitter/X", icon: Twitter, href: "https://x.com/Jisu_acm?t=XK-qpu9_bIsONRbeB9dxHA&s=09" },
    { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/jisu.acm?igsh=Ym50eG9jYnZudnNs" },
    { label: "GitHub", icon: Github, href: "#" },
    { label: "Google Groups", icon: Mail, href: "#" },
  ]

  return (
    <footer id="contact" className="relative mt-6 border-t bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h3 className="text-balance text-xl font-semibold">Let’s keep in touch!</h3>
        <p className="mt-1 text-sm text-muted-foreground">Find us on any of these platforms.</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {socials.map((s) => {
            const IconComponent = s.icon
            return (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-background p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
              >
                <IconComponent className="h-5 w-5 text-primary" />
              </a>
            )
          })}
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          Website developed and maintained by ACM JIS University Web Team.
        </p>
      </div>
    </footer>
  )
}
