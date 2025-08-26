"use client"
import { Brain, Code, Database, Wrench } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({})
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: Brain,
      skills: [
        { name: "Python", level: 90 },
        { name: "Machine Learning", level: 85 },
        { name: "Data Science", level: 88 },
        { name: "NLP", level: 75 },
      ],
    },
    {
      title: "Web Development",
      icon: Code,
      skills: [
        { name: "Flask Framework", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "Web APIs", level: 78 },
      ],
    },
    {
      title: "Data & Analytics",
      icon: Database,
      skills: [
        { name: "Data Analysis", level: 88 },
        { name: "Data Visualization", level: 85 },
        { name: "Statistical Analysis", level: 82 },
        { name: "Pandas/NumPy", level: 90 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "CI/CD", level: 75 },
        { name: "Jupyter Notebooks", level: 90 },
        { name: "Model Deployment", level: 80 },
      ],
    },
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)

            skillCategories.forEach((category, categoryIndex) => {
              category.skills.forEach((skill, skillIndex) => {
                const delay = isMobile ? categoryIndex * 100 + skillIndex * 50 : categoryIndex * 200 + skillIndex * 100
                setTimeout(() => {
                  setAnimatedSkills((prev) => ({
                    ...prev,
                    [`${categoryIndex}-${skillIndex}`]: skill.level,
                  }))
                }, delay)
              })
            })
          }
        })
      },
      { threshold: isMobile ? 0.1 : 0.3 }, // Lower threshold for mobile
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])

  return (
    <section ref={sectionRef} id="skills" className="py-12 md:py-20 relative overflow-hidden">
      {!isMobile && (
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="skill-circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path
                  d="M 20,20 L 60,20 M 20,60 L 60,60 M 20,20 L 20,60 M 60,20 L 60,60"
                  stroke="#00d4ff"
                  strokeWidth="0.5"
                  className="animate-circuit-pulse"
                />
                <circle cx="20" cy="20" r="1.5" fill="#00d4ff" className="animate-pulse" />
                <circle
                  cx="60"
                  cy="20"
                  r="1.5"
                  fill="#8b5cf6"
                  className="animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <circle
                  cx="20"
                  cy="60"
                  r="1.5"
                  fill="#06ffa5"
                  className="animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <circle
                  cx="60"
                  cy="60"
                  r="1.5"
                  fill="#ff006e"
                  className="animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#skill-circuit)" />
          </svg>
        </div>
      )}

      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: isMobile ? 5 : 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-particle-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-orbitron holographic-text">
            Skills & Expertise
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-4xl mx-auto font-inter leading-relaxed animate-glow-text px-4">
            A comprehensive overview of my technical proficiency across Machine Learning, Data Science, and Web
            Development domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`interactive-card glass-card p-6 md:p-8 rounded-2xl group transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              } ${isMobile ? "active:scale-95" : "hover:scale-105"}`} // Touch-friendly interactions
              style={{ animationDelay: `${categoryIndex * (isMobile ? 100 : 200)}ms` }}
            >
              <div className="flex items-center justify-center mb-6">
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center ${!isMobile ? "group-hover:animate-pulse-neon" : ""} relative overflow-hidden`}
                >
                  <category.icon className="h-6 w-6 md:h-8 md:w-8 text-white relative z-10" />
                  {!isMobile && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-data-stream"></div>
                  )}
                </div>
              </div>

              <h3
                className={`text-xl md:text-2xl font-semibold mb-6 md:mb-8 font-orbitron text-center gradient-text ${!isMobile ? "group-hover:animate-glow-text" : ""}`}
              >
                {category.title}
              </h3>

              <div className="space-y-4 md:space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const skillKey = `${categoryIndex}-${skillIndex}`
                  const animatedLevel = animatedSkills[skillKey] || 0

                  return (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between mb-2 md:mb-3">
                        <span
                          className={`font-medium font-inter text-foreground text-sm md:text-base ${!isMobile ? "group-hover/skill:text-primary" : ""} transition-colors duration-300`}
                        >
                          {skill.name}
                        </span>
                        <span className="text-primary font-inter font-semibold holographic-text text-sm md:text-base">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="skill-bar relative">
                        <div
                          className="skill-progress relative overflow-hidden"
                          style={{
                            width: `${animatedLevel}%`,
                            transition: isMobile
                              ? "width 1.5s ease-out"
                              : "width 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Faster animations on mobile
                          }}
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent ${!isMobile ? "animate-hologram-flicker" : ""}`}
                          ></div>
                        </div>

                        <div
                          className="absolute top-0 w-2 h-2 md:w-3 md:h-3 bg-primary rounded-full -translate-y-0.5 transition-all duration-1500 md:duration-2000 shadow-lg shadow-primary/50"
                          style={{
                            left: `${animatedLevel}%`,
                            transform: `translateX(-50%) translateY(-50%)`,
                            boxShadow: `0 0 ${isMobile ? "5px" : "10px"} rgba(0, 212, 255, 0.8)`, // Reduced glow on mobile
                          }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 md:mt-16 text-center transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: isMobile ? "400ms" : "800ms" }}
        >
          <div className="glass-card p-6 md:p-8 rounded-2xl interactive-card">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 font-orbitron gradient-text">
              Technical Proficiency
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2 holographic-text">90%</div>
                <div className="text-xs md:text-sm text-muted-foreground font-inter">Python & ML</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary mb-1 md:mb-2 holographic-text">85%</div>
                <div className="text-xs md:text-sm text-muted-foreground font-inter">Web Development</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1 md:mb-2 holographic-text">88%</div>
                <div className="text-xs md:text-sm text-muted-foreground font-inter">Data Science</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2 holographic-text">82%</div>
                <div className="text-xs md:text-sm text-muted-foreground font-inter">Tools & Tech</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
