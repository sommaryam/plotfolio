import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker-surface border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Mariame Boughamir
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Full-Stack Web Developer passionate about creating modern,
              performant web applications. Always learning and growing in the
              ever-evolving world of technology.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/sommaryam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth hover-float"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/mariame-boughamir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-smooth hover-float"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Quick Links
            </h3>
            <div className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Get In Touch
            </h3>
            <div className="space-y-2">
              <div className="text-muted-foreground">
                <span className="font-medium text-foreground">Email:</span>{" "}
                mariamboughamir@gmail.com
              </div>
              <div className="text-muted-foreground">
                <span className="font-medium text-foreground">Location:</span>{" "}
                Agadir, Morocco
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="flex items-center gap-2 text-muted-foreground mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary animate-pulse" />
            <span>by Mariame Boughamir © {currentYear}</span>
          </div>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
