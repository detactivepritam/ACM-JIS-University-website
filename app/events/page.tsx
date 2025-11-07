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
          <div className="flex justify-center mb-16 w-full">
            <div className="w-full max-w-2xl">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="group relative rounded-2xl border border-primary/20 bg-gradient-to-br from-background to-background/80 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    {/* Category Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 px-4 py-2 border border-primary/30">
                      <Users className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-bold text-primary uppercase tracking-wide">
                        {event.category}
                      </span>
                    </div>

                    {/* Event Title */}
                    <h3 className="mb-3 text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                      {event.title}
                    </h3>

                    {/* Event Description */}
                    <p className="mb-8 text-base text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-4 border-t border-primary/10 pt-6 mb-6">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="rounded-lg bg-primary/10 p-3">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">Date</p>
                          <p className="font-semibold text-foreground">{event.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="rounded-lg bg-primary/10 p-3">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">Time</p>
                          <p className="font-semibold text-foreground">{event.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="rounded-lg bg-primary/10 p-3">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">Location</p>
                          <p className="font-semibold text-foreground">{event.location}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-base font-semibold text-primary transition-all group-hover:translate-x-1">
                      <span>Register Soon</span>
                      <ArrowRight className="h-5 w-5" />
                    </div>
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
