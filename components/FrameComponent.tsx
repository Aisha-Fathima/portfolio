"use client"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

interface FrameComponentProps {
  video: string
  width: number | string
  height: number | string
  className?: string
  corner: string
  edgeHorizontal: string
  edgeVertical: string
  mediaSize: number
  borderThickness: number
  borderSize: number
  onMediaSizeChange: (value: number) => void
  onBorderThicknessChange: (value: number) => void
  onBorderSizeChange: (value: number) => void
  showControls: boolean
  label: string
  showFrame: boolean
  autoplayMode: "all" | "hover"
  isHovered: boolean
  projectInfo?: {
    title: string
    description: string
    techStack: string[]
    link?: string
    github?: string
  }
}

export function FrameComponent({
  video,
  width,
  height,
  className = "",
  mediaSize,
  autoplayMode,
  isHovered,
  projectInfo,
}: FrameComponentProps) {
  const imageRef = useRef<HTMLImageElement>(null)

  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
      }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            zIndex: 1,
            transition: "all 0.3s ease-in-out",
          }}
        >
          <div
            className="w-full h-full overflow-hidden"
            style={{
              transform: `scale(${mediaSize})`,
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <div className="relative w-full h-full">
              <img
                ref={imageRef}
                className="w-full h-full object-cover"
                src={video || "/placeholder.svg"}
                alt={projectInfo?.title || "Project"}
                loading="lazy"
              />

              {/* Overlay with project info that appears on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                {projectInfo && (
                  <div className="space-y-3">
                    <h3 className="text-white text-2xl font-bold">{projectInfo.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{projectInfo.description}</p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {projectInfo.techStack.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-white/20 text-white border-white/30 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-3">
                      {projectInfo.link && (
                        <Button
                          asChild
                          size="sm"
                          className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 rounded-full px-6 py-2 font-medium"
                        >
                          <Link href={projectInfo.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Link>
                        </Button>
                      )}
                      {projectInfo.github && (
                        <Button
                          asChild
                          size="sm"
                          className="bg-transparent text-white rounded-full px-6 py-2 font-medium border border-white/40"
                        >
                          <Link href={projectInfo.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
