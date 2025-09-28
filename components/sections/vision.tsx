import { Card } from "@/components/ui/card"

const objectives = [
  "Advance computing as a science and a profession.",
  "Serve as a dynamic hub for activities and collaboration.",
  "Provide exposure to knowledge, trends, and innovation.",
  "Unite educators, researchers, and students.",
]

export function Vision() {
  return (
    <section id="vision" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="grid items-start gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-pretty text-3xl font-semibold tracking-tight">Our Vision</h2>
          <p className="mt-3 text-muted-foreground">
            We align clear objectives with consistent action. Here’s what guides our efforts:
          </p>
          <ul className="mt-6 space-y-4">
            {objectives.map((o, i) => (
              <li key={o} className="group flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed transition group-hover:translate-x-0.5">{o}</span>
              </li>
            ))}
          </ul>
        </div>
        <Card className="aspect-[4/3] overflow-hidden">
          {/* Placeholder campus image */}
          <img alt="JIS University campus" src="/university-campus.png" className="h-full w-full object-cover" />
        </Card>
      </div>
    </section>
  )
}
