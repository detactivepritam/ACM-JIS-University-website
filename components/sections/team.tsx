import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Team data organized by roles
const teamData = {
  studentCoordinator: [
    {
      name: "Mr. Achyut Mitra",
      role: "Student Coordinator",
      designation: "M.Tech, CSE",
      image: "/team/achyut-mitra.jpg",
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  ],

  executiveMembers: [
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
    {
      name: "Pritam Bhuin",
      role: "Executive Member",
      designation: "Student Member",
      image: "/team/pritam-bhuin.jpg",
    }
  ]
}

// Member Card Component
function MemberCard({ member }: { member: typeof teamData.studentCoordinator[0] }) {
  const initials = member.name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase()

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="items-center">
        <Avatar className="h-20 w-20">
          <AvatarImage src={member.image} alt={member.name} />
          <AvatarFallback className="text-sm font-semibold bg-primary/10 text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>
        <CardTitle className="mt-3 text-balance text-center text-base">
          <strong>{member.name}</strong>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-primary font-medium mb-1 text-sm">
          <strong>{member.role}</strong>
        </p>
        <p className="text-xs text-muted-foreground">
          {member.designation}
        </p>
      </CardContent>
    </Card>
  )
}

// Team Section Component
function TeamSection({ title, members }: { title: string; members: typeof teamData.studentCoordinator }) {
  const getGridCols = (count: number) => {
    if (count === 1) return "grid-cols-1 md:grid-cols-1 lg:grid-cols-1 max-w-xs mx-auto"
    if (count === 2) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-lg mx-auto"
    if (count === 3) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-2xl mx-auto"
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  }

  return (
    <div className="mb-12">
      <h3 className="text-xl font-bold text-center mb-6 text-foreground">
        {title}
      </h3>
      <div className={`grid gap-4 ${getGridCols(members.length)}`}>
        {members.map((member, index) => (
          <MemberCard key={`${member.name}-${index}`} member={member} />
        ))}
      </div>
    </div>
  )
}

export function Team() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Meet Our Team
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The dedicated individuals who make ACM JIS University Student Chapter a thriving community
        </p>
      </div>

      {/* Student Coordinator */}
      <TeamSection 
        title="Student Coordinator" 
        members={teamData.studentCoordinator} 
      />

      {/* Faculty Coordinators */}
      <TeamSection 
        title="Faculty Coordinators" 
        members={teamData.facultyCoordinators} 
      />

      {/* Faculty Members */}
      <TeamSection 
        title="Faculty Members" 
        members={teamData.facultyMembers} 
      />

      {/* Executive Board */}
      <TeamSection 
        title="Executive Board" 
        members={teamData.executiveBoard} 
      />

      {/* Web Development Team */}
      <TeamSection 
        title="Web Development Team" 
        members={teamData.webTeam} 
      />

      {/* Communication Team */}
      <TeamSection 
        title="Communication Team" 
        members={teamData.postmen} 
      />

      {/* Executive Members */}
      <TeamSection 
        title="Executive Members" 
        members={teamData.executiveMembers} 
      />
    </section>
  )
}