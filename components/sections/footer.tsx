export function Footer() {
  const socials = [
    { label: "LinkedIn", icon: "i-lucide-linkedin", href: "#" },
    { label: "Twitter/X", icon: "i-lucide-twitter", href: "#" },
    { label: "Instagram", icon: "i-lucide-instagram", href: "#" },
    { label: "GitHub", icon: "i-lucide-github", href: "#" },
    { label: "Google Groups", icon: "i-lucide-mail", href: "#" },
  ]

  return (
    <footer id="contact" className="relative mt-6 border-t bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h3 className="text-balance text-xl font-semibold">Let’s keep in touch!</h3>
        <p className="mt-1 text-sm text-muted-foreground">Find us on any of these platforms.</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              <span className={`${s.icon} h-4 w-4 text-primary`} />
              <span>{s.label}</span>
            </a>
          ))}
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          Website developed and maintained by ACM JIS University Web Team.
        </p>
      </div>
    </footer>
  )
}
