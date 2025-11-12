import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const highlights = [
  { title: "Global Exposure", desc: "Opportunities to participate in ACM programs and conferences." },
  { title: "Research Growth", desc: "Encouraging projects, papers, and collaboration with mentors." },
  { title: "Community & Events", desc: "Talks, workshops, and hack events throughout the year." },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-pretty text-3xl font-semibold tracking-tight">What We Represent?</h2>
        <p className="mt-3 text-pretty text-muted-foreground">
          At the JIS University ACM Student Chapter, we provide a vibrant platform for students to gain exposure, build
          technical skills, and connect with a global community of computing professionals.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {highlights.map((h) => (
          <Card key={h.title} className="transition hover:-translate-y-0.5 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">{h.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
