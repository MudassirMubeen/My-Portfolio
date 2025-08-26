"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsVisible(false), 800)
          return 100
        }
        return prev + Math.random() * 12
      })
    }, 120)

    const createMatrixChar = () => {
      const particle = document.createElement("div")
      const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
      particle.textContent = chars[Math.floor(Math.random() * chars.length)]
      particle.className = "matrix-char animate-matrix-rain"
      particle.style.left = Math.random() * 100 + "%"
      particle.style.animationDelay = Math.random() * 8 + "s"
      particle.style.animationDuration = Math.random() * 5 + 8 + "s"
      particle.style.fontSize = Math.random() * 8 + 8 + "px"
      particle.style.color = `hsl(${180 + Math.random() * 60}, 70%, 60%)`
      document.querySelector(".loading-matrix-bg")?.appendChild(particle)

      setTimeout(() => {
        particle.remove()
      }, 15000)
    }

    const createDataStream = () => {
      const stream = document.createElement("div")
      stream.className =
        "absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-data-stream opacity-60"
      stream.style.top = Math.random() * 100 + "%"
      stream.style.width = "150px"
      document.querySelector(".loading-data-streams")?.appendChild(stream)

      setTimeout(() => {
        stream.remove()
      }, 3000)
    }

    const matrixInterval = setInterval(createMatrixChar, 150)
    const streamInterval = setInterval(createDataStream, 1200)

    return () => {
      clearInterval(interval)
      clearInterval(matrixInterval)
      clearInterval(streamInterval)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 transition-opacity duration-800">
      <div className="absolute inset-0 overflow-hidden">
        <div className="loading-matrix-bg absolute inset-0"></div>
        <div className="loading-data-streams absolute inset-0 pointer-events-none"></div>

        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="loading-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
            <rect width="100%" height="100%" fill="url(#loading-circuit)" />
          </svg>
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400 to-transparent rounded-full mix-blend-screen filter blur-3xl animate-float animate-hologram-flicker"></div>
          <div
            className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-transparent rounded-full mix-blend-screen filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-transparent rounded-full mix-blend-screen filter blur-3xl animate-float animate-hologram-flicker"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-line opacity-30"></div>
        </div>
      </div>

      {/* Loading content */}
      <div className="relative z-10 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-2">
            <span className="holographic-text">MUDASSIR MUBEEN</span>
          </h1>
          <p className="text-cyan-300/80 text-lg font-inter tracking-wider animate-glow-text">AI/ML ENGINEER</p>
        </div>

        <div className="relative w-64 h-64 mx-auto mb-8">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-spin-slow glass-card">
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-cyan-400/50 animate-pulse-neon" />
          </div>

          {/* Middle ring */}
          <div className="absolute inset-4 rounded-full border-2 border-purple-500/30 animate-spin-reverse glass-card">
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-purple-400/50 animate-pulse-neon" />
          </div>

          {/* Inner ring */}
          <div className="absolute inset-8 rounded-full border-2 border-blue-500/30 animate-spin glass-card">
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-blue-400/50 animate-pulse-neon" />
          </div>

          <div className="absolute inset-1/2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse-neon shadow-lg shadow-cyan-400/50 animate-hologram-flicker" />
        </div>

        <div className="w-80 mx-auto">
          <div className="flex justify-between text-sm text-cyan-300/60 mb-2 font-inter">
            <span className="animate-glow-text">Initializing Portfolio</span>
            <span className="animate-glow-text">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-slate-800/30 rounded-full h-2 backdrop-blur-sm border border-cyan-500/20 glass-card">
            <div
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 h-2 rounded-full transition-all duration-300 ease-out shadow-lg shadow-cyan-400/30 animate-pulse-neon"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-6 text-cyan-300/60 text-sm font-inter">
          <div className="flex items-center justify-center space-x-1">
            <span className="animate-glow-text">Loading Experience</span>
            <div className="flex space-x-1">
              <div
                className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce animate-pulse-neon"
                style={{ animationDelay: "0ms" }}
              />
              <div
                className="w-1 h-1 bg-purple-400 rounded-full animate-bounce animate-pulse-neon"
                style={{ animationDelay: "150ms" }}
              />
              <div
                className="w-1 h-1 bg-blue-400 rounded-full animate-bounce animate-pulse-neon"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
