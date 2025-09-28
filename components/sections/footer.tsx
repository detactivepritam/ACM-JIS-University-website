import { Linkedin, Twitter, Instagram, Github, Mail } from "lucide-react"

export function Footer() {
  const socials = [
    { label: "LinkedIn", icon: Linkedin, href: "#" },
    { label: "Twitter/X", icon: Twitter, href: "#" },
    { label: "Instagram", icon: Instagram, href: "#" },
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
