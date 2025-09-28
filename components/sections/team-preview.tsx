import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const team = [
  { name: "Dr. Faculty Name", role: "Faculty Coordinator", img: "/faculty-portrait.jpg" },
  { name: "Coordinator A", role: "Coordinator", img: "/diverse-student-portraits.png" },
  { name: "Coordinator B", role: "Coordinator", img: "/diverse-student-portraits.png" },
  { name: "Coordinator C", role: "Coordinator", img: "/diverse-student-portraits.png" },
]

export function TeamPreview() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <h2 className="text-center text-3xl font-semibold tracking-tight">Meet Our Team</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
        Coordinators and mentors who make the chapter thrive.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
        {team.map((m) => (
          <div key={m.name} className="group text-center">
            <Avatar className="mx-auto h-24 w-24 transition group-hover:scale-[1.03]">
              <AvatarImage alt={`${m.name} avatar`} src={m.img || "/placeholder.svg"} />
              <AvatarFallback>{m.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="mt-3 font-medium">{m.name}</div>
            <div className="text-sm text-muted-foreground">{m.role}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/team"
          className="rounded-full border px-5 py-2 text-sm font-medium text-primary transition hover:bg-secondary"
        >
          Click here to see our full team
        </Link>
      </div>
    </section>
  )
}
