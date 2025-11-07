'use client'

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/sections/footer"
import Link from "next/link"
import { Calendar, Clock, MapPin, ArrowRight, Zap, Users } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "ACM Tech Meetup 2024",
      description: "Join us for an exciting discussion on latest trends in computer science and technology.",
      date: "Coming Soon",
      time: "TBA",
      location: "JIS University Campus",
      category: "Meetup"
    }
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="flex-1 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          {/* Header */}
          <div className="mb-20 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 border border-primary/20">
              <Zap className="w-4 h-4 text-primary" />
              <p className="text-sm font-medium text-primary">Exciting Opportunities Ahead</p>
            </div>
            <h1 className="text-balance text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent pb-2">
              Events Coming Soon
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              ACM JIS University Student Chapter is planning amazing events, workshops, and competitions.
              Stay tuned for more details!
            </p>
          </div>

          {/* Events Grid */}
          <div className="flex justify-center mb-12 w-full">
            <div className="w-full max-w-md">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="group relative rounded-xl border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/50"
              >
                {/* Category Badge */}
                <div className="mb-4 inline-block rounded-md bg-primary/10 px-3 py-1">
                  <span className="text-xs font-semibold text-primary">
                    {event.category}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {event.title}
                </h3>

                {/* Event Description */}
                <p className="mb-6 text-sm text-muted-foreground">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-3 border-t pt-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center text-sm font-medium text-primary transition-all group-hover:translate-x-1">
                  <span>Register Soon</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
            <h2 className="mb-4 text-2xl font-bold">Stay Updated on Our Events</h2>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
              Don't miss out on amazing opportunities to learn, connect, and grow with ACM JIS University. 
              Check back soon for detailed information and registration!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild>
                <Link href="/">
                  Back to Home
                </Link>
              </Button>
              <Button variant="outline">
                Follow Us on Social Media
              </Button>
            </div>
          </div>

          {/* Coming Soon Banner */}
          <div className="mt-12 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-8 text-center">
            <div className="inline-block rounded-full bg-primary/20 px-4 py-2 mb-4">
              <p className="text-sm font-medium text-primary flex items-center gap-2">
                <span className="relative inline-block">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-pulse"></span>
                  <span className="relative inline-block h-2 w-2 rounded-full bg-primary"></span>
                </span>
                We're Preparing Something Special
              </p>
            </div>
            <p className="text-muted-foreground">
              More events will be announced soon. Subscribe to our email list or follow our social media for updates.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
