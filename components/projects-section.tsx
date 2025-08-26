"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Activity, Home, Github } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      title: "Flight Delay Prediction Model",
      description:
        "Advanced machine learning model that predicts flight delays using historical data and weather patterns. Built with Python and Flask framework for real-time predictions.",
      technologies: ["Python", "Machine Learning", "Flask", "Pandas", "Scikit-learn"],
      icon: Activity,
      liveUrl: "#",
      githubUrl: "https://github.com/MudassirMubeen/flight-delay-prediction",
      image: "/airplane-dashboard-with-flight-data-analytics-and-.png",
    },
    {
      title: "Breast Cancer Prediction System",
      description:
        "Real-time diagnostic system that analyzes user input to predict breast cancer risk using machine learning algorithms. Features an intuitive web interface for healthcare professionals.",
      technologies: ["Machine Learning", "HTML", "CSS", "Python", "Data Analysis"],
      icon: Brain,
      liveUrl: "#",
      githubUrl: "https://github.com/mudassirmubeen/breast-cancer-prediction",
      image: "/medical-ai-interface-with-diagnostic-charts-and-he.png",
    },
    {
      title: "House Price Index Analysis",
      description:
        "Comprehensive data analysis project that provides insights into housing market trends using machine learning and advanced visualization techniques for market predictions.",
      technologies: ["Python", "Machine Learning", "Data Visualization", "Matplotlib", "Seaborn"],
      icon: Home,
      liveUrl: "#",
      githubUrl: "https://github.com/MudassirMubeen/House-Price-Index-Analysis",
      image: "/real-estate-market-dashboard-with-price-trend-grap.png",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-secondary to-accent rounded-full filter blur-3xl animate-float animate-hologram-flicker"></div>
        <div
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-primary to-secondary rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-data-stream opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              width: "300px",
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-orbitron holographic-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-inter leading-relaxed animate-glow-text">
            Explore my portfolio of machine learning and data science projects that demonstrate practical applications
            of AI in solving real-world challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon

            return (
              <div
                key={index}
                className={`interactive-card glass-card group rounded-2xl overflow-hidden transition-all duration-500 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>

                  {hoveredProject === index && (
                    <div className="absolute inset-0">
                      <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line"></div>
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center shadow-lg animate-pulse-neon">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold font-orbitron text-white group-hover:text-primary transition-colors duration-300 holographic-text">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground mb-4 font-inter text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="font-inter text-xs bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 hover:scale-105 transition-all duration-300 animate-pulse-neon"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="cyber-button font-inter text-xs px-3 py-2 h-8 flex items-center gap-2 transition-all duration-300 relative overflow-hidden"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="h-3 w-3" />
                      View Project
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "600ms" }}
        >
          <div className="glass-card p-8 rounded-2xl interactive-card">
            <h3 className="text-2xl font-bold mb-6 font-orbitron gradient-text">Project Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2 holographic-text">3+</div>
                <div className="text-sm text-muted-foreground font-inter">ML Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2 holographic-text">90%</div>
                <div className="text-sm text-muted-foreground font-inter">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2 holographic-text">100%</div>
                <div className="text-sm text-muted-foreground font-inter">Open Source</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
