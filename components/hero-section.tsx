"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const texts = ["AI/ML Engineer", "Data Scientist", "Full-Stack Developer", "Innovation Enthusiast"]

  useEffect(() => {
    setIsVisible(true)

    const createParticle = () => {
      const particle = document.createElement("div")
      const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
      particle.textContent = chars[Math.floor(Math.random() * chars.length)]
      particle.className = "matrix-char animate-matrix-rain"
      particle.style.left = Math.random() * 100 + "%"
      particle.style.animationDelay = Math.random() * 8 + "s"
      particle.style.animationDuration = Math.random() * 5 + 8 + "s"
      particle.style.fontSize = Math.random() * 10 + 10 + "px"
      document.querySelector(".matrix-bg")?.appendChild(particle)

      setTimeout(() => {
        particle.remove()
      }, 15000)
    }

    const createDataStream = () => {
      const stream = document.createElement("div")
      stream.className =
        "absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-data-stream"
      stream.style.top = Math.random() * 100 + "%"
      stream.style.width = "200px"
      document.querySelector(".data-streams")?.appendChild(stream)

      setTimeout(() => {
        stream.remove()
      }, 3000)
    }

    const typeText = () => {
      const currentText = texts[currentTextIndex]
      let charIndex = 0

      const typeInterval = setInterval(() => {
        setTypedText(currentText.slice(0, charIndex + 1))
        charIndex++

        if (charIndex === currentText.length) {
          clearInterval(typeInterval)
          setTimeout(() => {
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
            setTypedText("")
          }, 2000)
        }
      }, 100)
    }

    const particleInterval = setInterval(createParticle, 200)
    const streamInterval = setInterval(createDataStream, 1500)
    const typeInterval = setInterval(typeText, 4000)

    // Start typing immediately
    typeText()

    return () => {
      clearInterval(particleInterval)
      clearInterval(streamInterval)
      clearInterval(typeInterval)
    }
  }, [currentTextIndex])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="matrix-bg"></div>
      <div className="data-streams absolute inset-0 pointer-events-none"></div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line opacity-30"></div>
      </div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary to-transparent rounded-full mix-blend-screen filter blur-3xl animate-float animate-hologram-flicker"></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-secondary to-transparent rounded-full mix-blend-screen filter blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-r from-accent to-transparent rounded-full mix-blend-screen filter blur-3xl animate-float animate-hologram-flicker"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M 10,30 L 90,30 M 30,10 L 30,90 M 70,10 L 70,90"
                stroke="#00d4ff"
                strokeWidth="0.5"
                className="animate-circuit-pulse"
              />
              <circle cx="30" cy="30" r="2" fill="#00d4ff" opacity="0.6" />
              <circle cx="70" cy="30" r="2" fill="#8b5cf6" opacity="0.6" />
              <circle cx="30" cy="70" r="2" fill="#06ffa5" opacity="0.6" />
              <circle cx="70" cy="70" r="2" fill="#ff006e" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 animate-pulse-neon interactive-card">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/211669099.jpg-TROyhDXISK2O8f7Lccm5nV5taUIb3X.jpeg"
                  alt="Mudassir Mubeen"
                  className="w-full h-full object-cover rounded-full animate-hologram-flicker"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-orbitron">
            <span className="holographic-text">MUDASSIR MUBEEN</span>
          </h1>

          <div className="text-2xl md:text-3xl text-primary mb-4 font-orbitron font-medium h-12 flex items-center justify-center">
            <span className="mr-2">Aspiring</span>
            <span className="animate-typing min-w-[300px] text-left">{typedText}</span>
          </div>

          <p className="text-lg text-accent mb-2 font-inter animate-glow-text">
            Passionate Innovator | Lifelong Learner
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto font-inter leading-relaxed">
            Driven by curiosity and innovation, I specialize in Machine Learning, Data Science, and Web Development.
            Currently pursuing Computer Science Engineering with ML specialization, building intelligent solutions for
            tomorrow's challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="cyber-button interactive-card font-inter text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
              onClick={() => window.open("mailto:mudassirmubeen814@gmail.com", "_blank")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="cyber-button interactive-card font-inter text-lg px-8 py-4 border-primary/50 hover:border-primary hover:scale-105 transition-all duration-300 bg-transparent"
              asChild
            >
              <a
                href="/mudassir-mubeen-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Mudassir_Mubeen_Resume.pdf"
              >
                <Download className="mr-2 h-5 w-5" />
                View CV
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-8">
            <Button
              variant="ghost"
              size="icon"
              className="interactive-card w-14 h-14 hover:text-primary transition-all duration-300 hover:scale-110 glass-card"
              onClick={() => window.open("https://github.com/MudassirMubeen", "_blank")}
            >
              <Github className="h-7 w-7" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="interactive-card w-14 h-14 hover:text-primary transition-all duration-300 hover:scale-110 glass-card"
              onClick={() => window.open("https://www.linkedin.com/in/mudassir-mubeen-0567a6209", "_blank")}
            >
              <Linkedin className="h-7 w-7" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="interactive-card w-14 h-14 hover:text-primary transition-all duration-300 hover:scale-110 glass-card"
              onClick={() => window.open("mailto:mudassirmubeen814@gmail.com", "_blank")}
            >
              <Mail className="h-7 w-7" />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="interactive-card glass-card p-3 rounded-full animate-pulse-neon">
            <ArrowDown className="h-6 w-6 text-primary animate-glow-text" />
          </div>
        </div>
      </div>
    </section>
  )
}
