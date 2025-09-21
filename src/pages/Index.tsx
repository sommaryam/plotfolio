import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior to the whole document
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* SEO and Meta Information */}
      <div className="sr-only">
        <h1>Mariame Boughamir - Full-Stack Web Developer Portfolio</h1>
        <meta name="description" content="Mariame Boughamir is a skilled Full-Stack Web Developer specializing in React.js, Laravel, MySQL, and modern web technologies. View her portfolio and projects." />
        <meta name="keywords" content="Mariame Boughamir, Full-Stack Developer, Web Developer, React.js, Laravel, MySQL, MongoDB, PHP, JavaScript, Portfolio, Agadir Morocco" />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;