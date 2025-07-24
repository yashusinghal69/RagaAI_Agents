import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity, FileText, Heart, UserCheck } from "lucide-react"

export default function HomePage() {
  const agents = [
    {
      title: "Clinical Coder Agent",
      description: "AI-powered clinical coding assistance",
      href: "/agents/clinical-coder-agent",
      icon: FileText,
    },
    {
      title: "Clinical Trial Agent",
      description: "Clinical trial management and coordination",
      href: "/agents/clinical-trial-agent",
      icon: Activity,
    },
    {
      title: "Patient Care Agent",
      description: "Comprehensive patient care management",
      href: "/agents/patient-care-agent",
      icon: Heart,
    },
    {
      title: "Patient Discharge Agent",
      description: "Streamlined patient discharge processes",
      href: "/agents/patient-discharge-agent",
      icon: UserCheck,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Healthcare AI Agents</h1>
          <p className="text-xl text-gray-600">Access specialized AI agents for healthcare management</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agents.map((agent) => {
            const IconComponent = agent.icon
            return (
              <Card key={agent.href} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{agent.title}</CardTitle>
                      <CardDescription>{agent.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link href={agent.href}>
                    <Button className="w-full">Access Agent</Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
