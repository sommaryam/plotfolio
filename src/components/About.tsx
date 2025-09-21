import { Card } from "@/components/ui/card";
import { GraduationCap, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-primary">About</span> Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Full-Stack Web Developer focused on creating high-performance applications 
            and working on ambitious projects that make a real impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Personal info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As a dedicated Full-Stack Developer, I specialize in performance optimization and modern web frameworks. 
                My expertise spans from crafting intuitive user interfaces with <span className="text-primary font-semibold">React.js</span> and 
                <span className="text-accent font-semibold"> Tailwind CSS</span> to building robust backend systems with 
                <span className="text-primary font-semibold"> Laravel</span> and database management.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about clean code, modern design principles, and creating web applications that not only look great 
                but perform exceptionally well. My goal is to contribute to ambitious projects that push the boundaries of what's possible on the web.
              </p>
            </div>
          </div>

          {/* Right side - Education timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Education</h3>
            
            <div className="space-y-6">
              <Card className="p-6 bg-darker-surface border-border hover-scale transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">
                        Diplôme de Technicien Spécialisé en Développement Web
                      </h4>
                      <span className="text-sm text-accent font-medium">2023-2025</span>
                    </div>
                    <p className="text-primary font-medium mb-1">Option Full Stack</p>
                    <p className="text-muted-foreground text-sm">
                      Web Higher Institute of Applied Technology (ISTA), Agadir
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-darker-surface border-border hover-scale transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <Code className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">
                        Baccalauréat Scientifique
                      </h4>
                      <span className="text-sm text-accent font-medium">2022-2023</span>
                    </div>
                    <p className="text-accent font-medium mb-1">Maintenance Informatique et Réseaux</p>
                    <p className="text-muted-foreground text-sm">
                      Specialized in Computer Maintenance and Networks
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Achievement stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-card/50 rounded-xl border border-border">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Dedicated</div>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-xl border border-border">
                <div className="text-2xl font-bold text-accent mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Tech Stack</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;