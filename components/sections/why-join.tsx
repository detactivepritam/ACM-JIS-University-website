import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function WhyJoin() {
  return (
    <section id="why-join" className="mx-auto max-w-6xl px-4 py-6 md:py-10">
      <Card className="border-0 bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle className="text-2xl">Why become an ACM member?</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
            <li>Network with peers, mentors, and industry leaders</li>
            <li>Exclusive access to ACM content, SIGs, and learning resources</li>
            <li>Career growth via talks, mentorship, and hands-on events</li>
            <li>Be part of a global computing community</li>
          </ul>
          <div>
            <p className="text-sm/6 opacity-90">
              Members get priority access to events, volunteering opportunities, and leadership roles within the
              chapter. Join us to learn, build, and contribute!
            </p>
            <Button variant="secondary" className="mt-4">
              Become a member
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
