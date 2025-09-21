import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Code2,
  Database,
  Palette,
  GitBranch,
  Monitor,
  Figma,
  Globe,
  Layers,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: <Monitor className="w-6 h-6" />,
      color: "text-primary",
      skills: [
        {
          name: "HTML5 & CSS3",
          level: 95,
          icon: <Code2 className="w-5 h-5" />,
        },
        { name: "JavaScript", level: 88, icon: <Code2 className="w-5 h-5" /> },
        { name: "React.js", level: 90, icon: <Layers className="w-5 h-5" /> },
        {
          name: "Tailwind CSS",
          level: 92,
          icon: <Palette className="w-5 h-5" />,
        },
      ],
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      color: "text-accent",
      skills: [
        {
          name: "PHP & Laravel",
          level: 85,
          icon: <Globe className="w-5 h-5" />,
        },
        { name: "MySQL", level: 88, icon: <Database className="w-5 h-5" /> },
        { name: "MongoDB", level: 75, icon: <Database className="w-5 h-5" /> },
        {
          name: "API Development",
          level: 80,
          icon: <Layers className="w-5 h-5" />,
        },
      ],
    },
    {
      title: "Tools & Design",
      icon: <Palette className="w-6 h-6" />,
      color: "text-secondary",
      skills: [
        {
          name: "Git & GitHub",
          level: 90,
          icon: <GitBranch className="w-5 h-5" />,
        },
        { name: "VS Code", level: 95, icon: <Code2 className="w-5 h-5" /> },
        { name: "Figma", level: 70, icon: <Figma className="w-5 h-5" /> },
        { name: "Bootstrap", level: 85, icon: <Palette className="w-5 h-5" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-primary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern, scalable web
            applications from frontend to backend
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="p-8 bg-darker-surface border-border hover-scale transition-smooth"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div
                  className={`p-3 bg-gradient-accent rounded-xl ${category.color}`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3"
                    style={{
                      animationDelay: `${
                        categoryIndex * 0.2 + skillIndex * 0.1
                      }s`,
                    }}
                  >
                    <span className={category.color}>{skill.icon}</span>
                    <span className="font-medium text-foreground">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Skill highlights */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="text-center p-6 bg-card/30 rounded-2xl border border-border backdrop-blur-sm">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Programming Languages</div>
          </div>

          <div className="text-center p-6 bg-card/30 rounded-2xl border border-border backdrop-blur-sm">
            <div className="text-3xl font-bold text-accent mb-2">3+</div>
            <div className="text-muted-foreground">Frameworks & Tools</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
