import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  Mail,
  MessageSquare,
  BarChart3,
  Settings,
} from "lucide-react";
import barberHome from "@/assets/barber-home.png";
import barberAbout from "@/assets/barber-about.png";
import barberServices from "@/assets/barber-services.png";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcase of my full-stack development skills through real-world
            applications
          </p>
        </div>

        {/* Main Project - Barber Booking System */}
        <Card className="p-8 lg:p-12 bg-gradient-primary border-border mb-12 hover-scale transition-smooth">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge
                  variant="secondary"
                  className="mb-4 bg-primary/20 text-primary border-primary/30"
                >
                  Featured Project
                </Badge>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                  Barber Booking System
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  A comprehensive full-stack web application designed for barber
                  shops to streamline their booking process with both customer
                  and admin management capabilities.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    {
                      icon: <Calendar className="w-4 h-4" />,
                      text: "Service Selection & Booking",
                    },
                    {
                      icon: <Users className="w-4 h-4" />,
                      text: "Barber Assignment",
                    },
                    {
                      icon: <Mail className="w-4 h-4" />,
                      text: "Email Notifications",
                    },
                    {
                      icon: <MessageSquare className="w-4 h-4" />,
                      text: "WhatsApp Integration",
                    },
                    {
                      icon: <Settings className="w-4 h-4" />,
                      text: "Admin Dashboard",
                    },
                    {
                      icon: <BarChart3 className="w-4 h-4" />,
                      text: "Analytics & Statistics",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="text-primary">{feature.icon}</span>
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Tailwind CSS",
                    "Laravel",
                    "MySQL",
                    "Email API",
                    "WhatsApp API",
                    "Git",
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-accent/30 text-accent hover:bg-accent/10 transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">
                  Project Value
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  This project demonstrates complete full-stack mastery, from
                  intuitive user interfaces to robust backend architecture. It
                  showcases real-world problem-solving with practical features
                  that businesses actually need.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {/* <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary transition-smooth">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Demo
                </Button> */}
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                >
                  <Github className="w-4 h-4 mr-2" />
                  <a
                    href="https://github.com/sommaryam/barber-booking?tab=readme-ov-file"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </Button>
              </div>
            </div>

            {/* Project Screenshots */}
            <div className="relative">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-border bg-darker-surface">
                  <img
                    src={barberHome}
                    alt="Barber Booking System - Homepage"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden border border-border bg-darker-surface">
                    <img
                      src={barberAbout}
                      alt="Barber Booking System - About Page"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-border bg-darker-surface">
                    <img
                      src={barberServices}
                      alt="Barber Booking System - Services Page"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/30 rounded-2xl rotate-12 animate-float" />
              <div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-accent/20 rounded-xl rotate-45 animate-float"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </Card>

        {/* Additional Projects Placeholder */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            More Projects Coming Soon
          </h3>
          <p className="text-muted-foreground mb-6">
            Currently working on exciting new projects that will showcase
            additional skills and technologies.
          </p>
        
        </div>
      </div>
    </section>
  );
};

export default Projects;
