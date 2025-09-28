import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const members = [
  { name: "Dr. Faculty Name", role: "Faculty Coordinator", img: "/faculty-portrait.jpg" },
  { name: "Coordinator A", role: "Coordinator", img: "/diverse-student-portraits.png" },
  { name: "Coordinator B", role: "Coordinator", img: "/diverse-student-portraits.png" },
  { name: "Member C", role: "Core Team", img: "/diverse-student-portraits.png" },
  { name: "Member D", role: "Core Team", img: "/diverse-student-portraits.png" },
]

export default function FullTeamPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-pretty text-3xl font-semibold tracking-tight">Our Full Team</h1>
        <Link href="/" className="text-primary underline underline-offset-4">
          Back to home
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {members.map((m) => (
          <Card key={m.name} className="transition hover:shadow-lg">
            <CardHeader className="items-center">
              <Avatar className="h-24 w-24">
                <AvatarImage alt={`${m.name} avatar`} src={m.img || "/placeholder.svg"} />
                <AvatarFallback>{m.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <CardTitle className="mt-3 text-balance text-center text-lg">{m.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-sm text-muted-foreground">{m.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
