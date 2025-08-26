"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text font-playfair mb-4">Mudassir Mubeen</h3>
            <p className="text-muted-foreground font-source-sans">Full-Stack Developer & Data Science Enthusiast</p>
          </div>

          <div className="flex justify-center space-x-4 mb-8">
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary transition-colors"
              onClick={() => window.open("https://github.com/MudassirMubeen", "_blank")}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary transition-colors"
              onClick={() => window.open("https://www.linkedin.com/in/mudassir-mubeen-0567a6209", "_blank")}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary transition-colors"
              onClick={() => window.open("mailto:mudassirmubeen814@gmail.com", "_blank")}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground font-source-sans">© 2024 All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
