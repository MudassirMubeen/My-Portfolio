"use client"
import { GraduationCap, Brain, Code, Target } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description: "Specializing in Machine Learning algorithms, data analysis, and intelligent systems",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building modern web applications with Flask, HTML, CSS, and JavaScript",
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Pursuing B.E. in CSE with ML specialization",
    },
    {
      icon: Target,
      title: "Innovation Focus",
      description: "Passionate about creating data-driven solutions and predictive models",
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
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-primary to-secondary rounded-full filter blur-3xl animate-float animate-hologram-flicker"></div>
        <div
          className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-accent to-primary rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path
                d="M 30,30 L 90,30 M 30,90 L 90,90 M 30,30 L 30,90 M 90,30 L 90,90 M 60,30 L 60,90"
                stroke="#00d4ff"
                strokeWidth="0.5"
                className="animate-circuit-pulse"
              />
              <circle cx="30" cy="30" r="2" fill="#00d4ff" className="animate-pulse" />
              <circle
                cx="90"
                cy="30"
                r="2"
                fill="#8b5cf6"
                className="animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <circle cx="60" cy="60" r="2" fill="#06ffa5" className="animate-pulse" style={{ animationDelay: "1s" }} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-circuit)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-orbitron holographic-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-inter leading-relaxed animate-glow-text">
            A passionate Computer Science Engineering student specializing in Machine Learning, driven by curiosity to
            solve real-world problems through innovative AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <h3 className="text-3xl font-bold mb-6 font-orbitron gradient-text">My Journey</h3>
            <p className="text-muted-foreground mb-4 font-inter leading-relaxed">
              Currently pursuing Bachelor of Engineering in Computer Science and Engineering with specialization in
              Machine Learning. My academic journey is complemented by hands-on experience in building intelligent
              systems and data-driven applications.
            </p>
            <p className="text-muted-foreground mb-4 font-inter leading-relaxed">
              I have a strong foundation in Python, Machine Learning, Data Science, and Web Development. My passion lies
              in creating predictive models that can solve complex real-world challenges, from healthcare diagnostics to
              financial forecasting.
            </p>
            <p className="text-muted-foreground font-inter leading-relaxed">
              As an aspiring AI/ML Engineer, I'm committed to continuous learning and staying at the forefront of
              technological innovation. My goal is to contribute to the advancement of artificial intelligence and make
              a meaningful impact in the tech industry.
            </p>
          </div>

          <div
            className={`relative transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "300ms" }}
          >
            <div className="interactive-card glass-card p-8 rounded-3xl neon-glow relative overflow-hidden">
              <div className="text-center relative z-10">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 animate-pulse-neon">
                  <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden relative">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/211669099.jpg-TROyhDXISK2O8f7Lccm5nV5taUIb3X.jpeg"
                      alt="Mudassir Mubeen"
                      className="w-full h-full object-cover rounded-full animate-hologram-flicker"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>
                </div>
                <h4 className="text-2xl font-bold font-orbitron holographic-text mb-2">Mudassir Mubeen</h4>
                <p className="text-lg font-inter text-primary animate-glow-text">AI/ML Engineering Student</p>
                <p className="text-sm font-inter text-muted-foreground mt-2"></p>
              </div>

              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-data-stream"></div>
                <div
                  className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-secondary to-transparent animate-data-stream"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`interactive-card glass-card p-6 text-center group transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${400 + index * 100}ms` }}
              onMouseEnter={() => setActiveHighlight(index)}
              onMouseLeave={() => setActiveHighlight(null)}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center group-hover:animate-pulse-neon relative overflow-hidden">
                <highlight.icon className="h-8 w-8 text-white relative z-10" />
                {activeHighlight === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-data-stream"></div>
                )}
              </div>
              <h4 className="text-lg font-semibold mb-2 font-orbitron text-primary group-hover:text-accent transition-colors duration-300">
                {highlight.title}
              </h4>
              <p className="text-muted-foreground text-sm font-inter group-hover:text-foreground transition-colors duration-300">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
