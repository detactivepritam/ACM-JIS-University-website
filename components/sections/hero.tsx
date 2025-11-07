import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[url('/JIS_UNIVERSITY.jpg')] bg-cover bg-center"
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto max-w-6xl px-4 py-28 text-center md:py-36">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
          ACM JIS University Student Chapter
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-pretty text-white md:text-lg">
          ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources,
          and address the field’s challenges. As the world’s largest computing society, ACM strengthens the profession’s
          collective voice through strong leadership, promotion of the highest standards, and recognition of technical
          excellence.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button size="lg" asChild>
            <Link href="/events">Explore Events</Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <a href="#why-join">Why Join?</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
