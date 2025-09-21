import { Button } from "@/components/ui/button";
import { Download, Play, Github, Linkedin, Mail } from "lucide-react";
import programmerAvatar from "@/assets/programmer-avatar.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-slide-in-up">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                <span className="text-sm font-medium tracking-wider uppercase">
                  Hi, I'm Mariame Boughamir
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">A </span>
                <span className="text-gradient-primary">FULL-STACK</span>
                <br />
                <span className="text-foreground">WEB DEVELOPER</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Passionate about creating performant web applications with
                modern frameworks. Specialized in{" "}
                <span className="text-primary font-semibold">React.js</span>,{" "}
                <span className="text-accent font-semibold">Laravel</span>, and
                database optimization with{" "}
                <span className="text-primary font-semibold">MySQL</span> and{" "}
                <span className="text-accent font-semibold">MongoDB</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="../../public/Mariame_Boughamir_Full-Stack Web Developer_resume.pdf"
                download="Mariame_Boughamir_CV.pdf"
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary transition-smooth"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </a>

              <a
                href="https://github.com/sommaryam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                >
                  <Play className="w-5 h-5 mr-2" />
                  View Projects
                </Button>
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com/sommaryam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth hover-float"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/mariame-boughamir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-smooth hover-float"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                <img
                  src={programmerAvatar}
                  alt="Mariame Boughamir - Full Stack Developer"
                  className="w-full h-full object-cover rounded-3xl border-2 border-primary/20 shadow-2xl hover-scale transition-bounce"
                />

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-accent rounded-2xl rotate-12 animate-float" />
                <div
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/20 rounded-xl rotate-45 animate-float"
                  style={{ animationDelay: "0.5s" }}
                />

                {/* Stats overlay */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-sm rounded-2xl p-4 border border-border shadow-2xl">
                  <div className="flex gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">2+</div>
                      <div className="text-sm text-muted-foreground">
                        Years Learning
                      </div>
                    </div>
                    <div className="w-px bg-border" />
                    <div>
                      <div className="text-2xl font-bold text-accent">5+</div>
                      <div className="text-sm text-muted-foreground">
                        Technologies
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
