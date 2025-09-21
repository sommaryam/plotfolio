import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Phone,
  Send,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "mariamboughamir@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  // const { toast } = useToast();
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: ""
  // });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   toast({
  //     title: "Message Sent!",
  //     description: "Thank you for reaching out. I'll get back to you soon!",
  //   });
  //   setFormData({ name: "", email: "", subject: "", message: "" });
  // };

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData(prev => ({
  //     ...prev,
  //     [e.target.name]: e.target.value
  //   }));
  // };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your next project to life? Let's collaborate and
            build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, innovative
                projects, or just chat about web development. Whether you have a
                specific project in mind or want to explore possibilities, I'd
                love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-card/50 rounded-xl border border-border hover-scale transition-smooth">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a
                    href="mailto:mariamboughamir@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    mariamboughamir@gmail.com
                  </a>
                  
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card/50 rounded-xl border border-border hover-scale transition-smooth">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Linkedin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/mariame-boughamir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-smooth"
                  >
                    Mariame Boughamir
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card/50 rounded-xl border border-border hover-scale transition-smooth">
                <div className="p-3 bg-secondary/10 rounded-xl">
                  <Github className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">GitHub</h4>
                  <a
                    href="https://github.com/sommaryam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-secondary transition-smooth"
                  >
                    sommaryam
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card/50 rounded-xl border border-border">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <span className="text-muted-foreground">Agadir, Morocco</span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Quick Actions
              </h4>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary transition-smooth"
                >
                  <a
                    href="mailto:mariamboughamir@gmail.com"
                    onClick={(e) => {
                      e.preventDefault();
                      copyToClipboard();
                    }}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {copied ? "Copied!" : "Send Email"}
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                >
                  <a
                    href="https://linkedin.com/in/mariame-boughamir"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form
          <Card className="p-8 bg-darker-surface border-border">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-foreground">Send a Message</h3>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div> */}

          {/* <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="bg-card border-border focus:border-primary transition-smooth"
                  />
                </div> */}

          {/* <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-card border-border focus:border-primary transition-smooth"
                  />
                </div>
              </div> */}

          {/* <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  required
                  className="bg-card border-border focus:border-primary transition-smooth"
                />
              </div> */}
          {/* 
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello!"
                  rows={5}
                  required
                  className="bg-card border-border focus:border-primary transition-smooth resize-none"
                />
              </div> */}

          {/* <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-primary transition-smooth"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div> */}

          {/* Call to Action */}
          {/* <div className="text-center mt-16 p-8 bg-gradient-accent rounded-2xl">
          <MessageCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how we can bring your web development vision to life with modern technologies and best practices.
          </p>
          {/* <Button 
            size="lg"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary transition-smooth"
          >
            <a href="mailto:mariamboughamir@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Start a Conversation
            </a>
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
