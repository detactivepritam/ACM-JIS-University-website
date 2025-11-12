"use client"

import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

type TeamMember = {
  name: string
  role: string
  designation: string
  image: string
}

const teamData: Record<
  | "studentCoordinator"
  | "facultyCoordinators"
  | "facultyMembers"
  | "executiveBoard"
  | "webTeam"
  | "postmen"
  | "executiveMembers",
  TeamMember[]
> = {
  studentCoordinator: [
    {
      name: "Mr. Achyut Mitra",
      role: "Student Coordinator",
      designation: "M.Tech, CSE",
      image: "/team/achyut-mitra.jpg",
    },
  ],

  facultyCoordinators: [
    {
      name: "Dr. Paramita Sarkar",
      role: "Faculty Coordinator",
      designation: "Assistant Professor, CSE",
      image: "/team/paramita-sarkar.jpg",
    },
    {
      name: "Dr. Abhrendu Bhattacharya",
      role: "Faculty Coordinator",
      designation: "Assistant Professor, CSE",
      image: "/team/abhrendu-bhattacharya.jpg",
    },
  ],

  facultyMembers: [
    {
      name: "Dr. Rajesh Bose",
      role: "Faculty Member",
      designation: "Professor, CSE",
      image: "/team/rajesh-bose.jpg",
    },
    {
      name: "Dr. Sandip Roy",
      role: "Faculty Member",
      designation: "Professor & HOD, CSE",
      image: "/team/sandip-roy.jpg",
    },
  ],

  executiveBoard: [
    {
      name: "Ridhirup Ghosh",
      role: "Chairperson",
      designation: "Student Leader",
      image: "/team/ridhirup-ghosh.jpg",
    },
    {
      name: "Sneha Majumdar",
      role: "Vice Chairperson",
      designation: "Student Leader",
      image: "/team/sneha-majumdar.jpg",
    },
    {
      name: "Rakesh Nandi",
      role: "Treasurer",
      designation: "Student Leader",
      image: "/team/rakesh-nandi.jpg",
    },
  ],

  webTeam: [
    {
      name: "Utsab Ghoshal",
      role: "Web Admin",
      designation: "Technical Lead",
      image: "/team/utsab-ghoshal.jpg",
    },
    {
      name: "Aditya Jha",
      role: "Co-Web Admin",
      designation: "Technical Team",
      image: "/team/aditya-jha.jpg",
    },
    {
      name: "Rajkishore Huduk",
      role: "Co-Web Admin",
      designation: "Technical Team",
      image: "/team/rajkishore-huduk.jpg",
    },
  ],

  postmen: [
    {
      name: "Souvik Karmakar",
      role: "Postman",
      designation: "Communication Team",
      image: "/team/souvik-karmakar.jpg",
    },
    {
      name: "Anindita Bhattacharya",
      role: "Postman",
      designation: "Communication Team",
      image: "/team/anindita-bhattacharya.jpg",
    },
  ],

  executiveMembers: [
    {
      name: "Pritam Bhuin",
      role: "Executive Member",
      designation: "Student Member",
      image: "/team/Pritam Bhuin.jpg",
    },
    {
      name: "Soumyadip Banerjee",
      role: "Executive Member",
      designation: "Student Member",
      image: "/team/soumyadip-banerjee.jpg",
    },
    {
      name: "Haranath Khan",
      role: "Executive Member",
      designation: "Student Member",
      image: "/team/haranath-khan.jpg",
    },  
  ],
}

const primaryWebTeamMembers = teamData.webTeam.filter(
  member => member.role === "Web Admin",
)
const extendedWebTeamMembers = teamData.webTeam.filter(
  member => member.role !== "Web Admin",
)

type TeamSectionConfig = {
  key: string
  title: string
  members: TeamMember[]
}

const featuredSections: TeamSectionConfig[] = [
  {
    key: "studentCoordinator",
    title: "Student Coordinator",
    members: teamData.studentCoordinator,
  },
  {
    key: "facultyCoordinators",
    title: "Faculty Coordinators",
    members: teamData.facultyCoordinators,
  },
  {
    key: "executiveBoard",
    title: "Executive Board",
    members: teamData.executiveBoard,
  },
  {
    key: "webAdmin",
    title: "Web Development Team",
    members: primaryWebTeamMembers,
  },
]

const extendedSections: TeamSectionConfig[] = [
  {
    key: "webTeamExtended",
    title: "Web Development Team",
    members: extendedWebTeamMembers,
  },
  {
    key: "facultyMembers",
    title: "Faculty Members",
    members: teamData.facultyMembers,
  },
  {
    key: "communicationTeam",
    title: "Communication Team",
    members: teamData.postmen,
  },
  {
    key: "executiveMembers",
    title: "Executive Members",
    members: teamData.executiveMembers,
  },
]

function MemberCard({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(" ")
    .map(namePart => namePart[0])
    .join("")
    .toUpperCase()

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="items-center justify-items-center text-center">
        <Avatar className="h-24 w-24 mx-auto">
          <AvatarImage src={member.image} alt={member.name} />
          <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>
        <CardTitle className="mt-3 text-balance text-center text-lg">
          <strong>{member.name}</strong>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-primary font-medium mb-1">
          <strong>{member.role}</strong>
        </p>
        <p className="text-sm text-muted-foreground">{member.designation}</p>
      </CardContent>
    </Card>
  )
}

function TeamSection({ title, members }: { title: string; members: TeamMember[] }) {
  if (members.length === 0) {
    return null
  }

  const getGridCols = (count: number) => {
    if (count === 1) return "grid-cols-1 md:grid-cols-1 lg:grid-cols-1 max-w-sm mx-auto"
    if (count === 2) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-2xl mx-auto"
    if (count === 3) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  }

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
        {title}
      </h2>
      <div className={`grid gap-6 ${getGridCols(members.length)}`}>
        {members.map((member, index) => (
          <MemberCard key={`${member.name}-${index}`} member={member} />
        ))}
      </div>
    </div>
  )
}

export default function FullTeamPage() {
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-pretty text-4xl font-bold tracking-tight">Meet Our Team</h1>
        <Link href="/" className="text-primary underline underline-offset-4">
          Back to home
        </Link>
      </div>

      <div className="text-center mb-16">
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The dedicated individuals who make JIS University ACM Student Chapter a thriving community
        </p>
      </div>

      {featuredSections
        .filter(section => section.members.length > 0)
        .map(section => (
          <TeamSection key={section.key} title={section.title} members={section.members} />
        ))}

      <div className="flex justify-center">
        <Button
          type="button"
          variant="outline"
          aria-expanded={isExpanded}
          aria-controls="full-team-details"
          onClick={() => setIsExpanded(previous => !previous)}
        >
          {isExpanded ? "Hide full team details" : "Click to see full team details"}
        </Button>
      </div>

      <div
        id="full-team-details"
        aria-hidden={!isExpanded}
        className={isExpanded ? "mt-12" : "hidden"}
      >
        {extendedSections
          .filter(section => section.members.length > 0)
          .map(section => (
            <TeamSection key={section.key} title={section.title} members={section.members} />
          ))}
      </div>
    </div>
  )
}
