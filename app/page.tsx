"use client"
import { useState } from "react"
import type React from "react"

import DynamicFrameLayout from "../components/DynamicFrameLayout"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ExternalLink,
  ChevronDown,
  Code,
  Brain,
  Heart,
  Award,
  Calendar,
  MapPin,
  Zap,
} from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Portfolio Contact")
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    const mailtoLink = `mailto:aishafathimamohammed@gmail.com?subject=${subject}&body=${body}`

    // Open email client
    window.location.href = mailtoLink

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const projects = [
    {
      id: 1,
      title: "EmpowHER",
      subtitle: "Health & Wellness Platform",
      description: "AI-powered women's health assistant with smart chatbot and cycle tracking",
      tech: ["React", "Node.js", "PostgreSQL", "ML"],
      category: "AI/ML",
      status: "Completed",
      impact: "Boosted user engagement through personalized health tips",
      github: "https://github.com/Aisha-Fathima/project-empowher-women-health-assisstant",
      demo: "https://project-empowher-women-health-assisstant.vercel.app/",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Breifly",
      subtitle: "AI Summarizer Tool",
      description: "AI summarizer that cuts reading time by 60%",
      tech: ["React", "Node.js", "NLP"],
      category: "AI/ML",
      status: "Completed",
      impact: "Enhanced productivity by cutting reading time by 60%",
      github: "https://github.com/Aisha-Fathima/AI-Summarizer",
      demo: "https://ai-summarizer-alpha-rose.vercel.app/",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
    },
    {
      id: 3,
      title: "UNIX Shell Replica",
      subtitle: "System Programming",
      description: "Full-featured shell with piping and I/O redirection",
      tech: ["C", "UNIX/Linux", "System Calls"],
      category: "Systems",
      status: "Completed",
      impact: "Deep understanding of operating system internals",
      github: "https://github.com/Aisha-Fathima/unix-replica",
      demo: "#",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=500&h=300&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-white/90 text-xl font-bold">
            Aisha<span className="text-emerald-400">.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-sm ${activeSection === "home" ? "text-white" : "text-white/60 hover:text-white/90"} transition-colors`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-sm ${activeSection === "about" ? "text-white" : "text-white/60 hover:text-white/90"} transition-colors`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`text-sm ${activeSection === "projects" ? "text-white" : "text-white/60 hover:text-white/90"} transition-colors`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("research")}
              className={`text-sm ${activeSection === "research" ? "text-white" : "text-white/60 hover:text-white/90"} transition-colors`}
            >
              Research
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-sm ${activeSection === "contact" ? "text-white" : "text-white/60 hover:text-white/90"} transition-colors`}
            >
              Contact
            </button>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/Aisha-Fathima"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/60 hover:text-white/90 hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              <Github size={18} />
            </Link>
            <Link
              href="https://linkedin.com/in/aisha-fathima-mohammed"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/60 hover:text-white/90 hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              <Linkedin size={18} />
            </Link>
            <Button
              asChild
              size="sm"
              className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full"
              onClick={() => scrollToSection("contact")}
            >
              <button>Contact</button>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-24 pb-16 px-8 flex items-center">
        <div className="w-full h-full flex flex-col lg:flex-row items-start gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="w-full lg:w-[320px] flex-shrink-0 flex flex-col justify-center h-full">
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`font-playfair text-5xl lg:text-6xl font-light text-white/90 tracking-tight leading-[110%]`}
                >
                  Aisha
                  <br />
                  Fathima
                  <br />
                  Mohammed
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-3 text-white/60">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="font-inter text-sm font-light">Available for opportunities</span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                <p className="font-inter text-white/70 text-sm leading-relaxed max-w-[300px]">
                  Hey there! I'm Aisha — a curious coder, creative thinker, and coffee-fueled problem solver. Whether
                  I'm building sleek UIs, diving into data, or brainstorming the next big idea, I love bringing tech to
                  life with a touch of fun and flair. Always learning, always experimenting — let's make something
                  awesome!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center gap-3"
              >
                <Link
                  href="https://github.com/Aisha-Fathima"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-white/60 hover:text-white/90 hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  <Github size={20} />
                </Link>
                <Link
                  href="https://linkedin.com/in/aisha-fathima-mohammed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-white/60 hover:text-white/90 hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=aishafathimamohammed@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-white/60 hover:text-white/90 hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  <Mail size={20} />
                </Link>
                <Link
                  href="https://drive.google.com/file/d/1tzAZYQqiwQf5cYhjNmAQ4X5suLaf-6UQ/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-white/60 hover:text-white/90 hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  <FileText size={20} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="space-y-3"
              >
                <Button
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white border-0 rounded-xl py-6 font-medium"
                  onClick={() => scrollToSection("contact")}
                >
                  Let's Connect
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button asChild className="w-full bg-gray-800 text-white border-0 rounded-xl py-6 font-medium">
                  <Link href="https://github.com/Aisha-Fathima" target="_blank" rel="noopener noreferrer">
                    <Code className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Right Content - Dynamic Frame Layout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:flex-grow h-[70vh] lg:h-[85vh]"
          >
            <DynamicFrameLayout />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <span className="text-white/40 text-xs mb-2">Scroll to explore</span>
          <ChevronDown className="h-4 w-4 text-white/40" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-8 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-light italic text-white/90 mb-4">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <div className="space-y-6">
              <div className="p-4 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 flex items-center justify-center">
                <Code className="h-12 w-12 text-emerald-400" />
              </div>
              <h3 className="text-white/90 text-xl font-bold">Developer</h3>
              <p className="text-white/60 leading-relaxed">
                Full-stack developer with expertise in React.js, Node.js, and Next.js. Passionate about creating
                intuitive, responsive applications.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                <Brain className="h-12 w-12 text-emerald-400" />
              </div>
              <h3 className="text-white/90 text-xl font-bold">Researcher</h3>
              <p className="text-white/60 leading-relaxed">
                Published researcher in machine learning with focus on customer churn prediction and AI for social good.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                <Heart className="h-12 w-12 text-emerald-400" />
              </div>
              <h3 className="text-white/90 text-xl font-bold">Community Builder</h3>
              <p className="text-white/60 leading-relaxed">
                Active member of Mathematics Club and volunteer at NGO. Committed to using technology for social impact.
              </p>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-white/90 text-2xl font-bold">Education</h3>
              <div className="space-y-4">
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-white/90 font-bold">B.M.S College of Engineering</h4>
                        <p className="text-emerald-400 text-sm">Information Science & Engineering</p>
                      </div>
                      <div className="text-right">
                        <span className="text-white/60 text-sm">2022 – 2026</span>
                        <p className="text-white/90 font-medium">CGPA: 9.32/10</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-white/90 font-bold">Kendriya Vidyalaya – IISc</h4>
                        <p className="text-emerald-400 text-sm">Grade 12th (Senior Secondary)</p>
                      </div>
                      <div className="text-right">
                        <span className="text-white/60 text-sm">Graduated 2022</span>
                        <p className="text-white/90 font-medium">Percentage: 90%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-white/90 font-bold">Vidyanjali Academy for Learning</h4>
                        <p className="text-emerald-400 text-sm">Grade 10th</p>
                      </div>
                      <div className="text-right">
                        <span className="text-white/60 text-sm">Graduated 2020</span>
                        <p className="text-white/90 font-medium">Percentage: 96.6%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-white/90 text-2xl font-bold">Achievements</h3>
              <div className="space-y-4">
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Award className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white/90 font-bold">Published Research Paper</h4>
                        <p className="text-white/60 text-sm">Customer Churn Prediction (Jan 2025)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Award className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white/90 font-bold">HackAI Challenge</h4>
                        <p className="text-white/60 text-sm">Dell & NVIDIA - EmpowHER Platform</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-light italic text-white/90 mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <CardHeader className="space-y-4">
                  <div className="w-full h-48 rounded-lg overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                      {project.category}
                    </Badge>
                    <CardTitle className="text-white/90 text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-white/60">{project.subtitle}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-inter text-white/70 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-white/20 text-white/60 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-4">
                    <Button asChild size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Demo
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white/70 hover:bg-white/5"
                    >
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-3 w-3" />
                        Code
                      </Link>
                    </Button>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-white/50">
                      <Zap className="h-3 w-3" />
                      <span>{project.impact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Section */}
          <div className="pt-16 border-t border-white/10">
            <h3 className="font-playfair text-3xl font-light italic text-white/90 mb-8">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-3">
                <h4 className="text-white/80 font-medium">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {["C++", "Java", "Python", "C", "JavaScript"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-white/20 text-white/60">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-white/80 font-medium">Web Development</h4>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Node.js", "Next.js", "HTML5", "CSS3"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-white/20 text-white/60">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-white/80 font-medium">Databases</h4>
                <div className="flex flex-wrap gap-2">
                  {["MongoDB", "MySQL", "PostgreSQL"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-white/20 text-white/60">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-white/80 font-medium">Tools & Others</h4>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Vercel", "Supabase", "UNIX/Linux", "Socket.IO"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-white/20 text-white/60">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-24 px-8 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-light italic text-white/90 mb-4">
              Research & Publications
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-white/90 text-2xl font-bold">Published Research</h3>
              <Card className="bg-white/5 border-white/10 hover:border-emerald-500/30 transition-all duration-300">
                <div className="w-full h-48 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
                    alt="Research Publication"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-white/90 text-xl">Customer Churn Prediction</CardTitle>
                      <CardDescription className="text-emerald-400 text-sm">
                        Journal of Information and Computational Science
                      </CardDescription>
                    </div>
                    <span className="text-white/60 text-sm">Jan 2025</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/70 leading-relaxed">
                    Advanced machine learning models including Random Forest and XGBoost for predicting customer churn
                    with high accuracy.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Machine Learning", "Random Forest", "XGBoost", "Business Analytics"].map((keyword) => (
                      <Badge key={keyword} variant="outline" className="border-white/20 text-white/60 text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full">
                    <Link href="https://drive.google.com/file/d/1tzAZYQqiwQf5cYhjNmAQ4X5suLaf-6UQ/view" target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Read Publication
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h3 className="text-white/90 text-2xl font-bold">Research Interests</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { area: "Machine Learning", desc: "Predictive modeling and ensemble methods" },
                  { area: "Natural Language Processing", desc: "Text summarization and conversational AI" },
                  { area: "AI for Social Good", desc: "Leveraging AI to address social challenges" },
                ].map((interest, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 border-white/10 hover:border-emerald-500/30 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <h4 className="text-white/90 font-bold mb-2">{interest.area}</h4>
                      <p className="text-white/60 text-sm">{interest.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-light italic text-white/90 mb-4">Let's Connect</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Email Card */}
              <Card className="bg-white/5 border-white/10 hover:border-emerald-500/30 transition-all duration-300 group cursor-pointer">
                <Link
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=aishafathimamohammed@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardContent className="p-8 text-center">
                    <div className="p-4 bg-emerald-500/20 rounded-full w-fit mx-auto mb-4 group-hover:bg-emerald-500/30 transition-colors">
                      <Mail className="h-8 w-8 text-emerald-400" />
                    </div>
                    <h3 className="text-white/90 font-bold text-lg mb-2">Email</h3>
                    <p className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors">
                      aishafathimamohammed@gmail.com
                    </p>
                    <p className="text-white/60 text-xs mt-2">Click to compose email</p>
                  </CardContent>
                </Link>
              </Card>

              {/* LinkedIn Card */}
              <Card className="bg-white/5 border-white/10 hover:border-blue-500/30 transition-all duration-300 group cursor-pointer">
                <Link href="https://linkedin.com/in/aisha-fathima-mohammed" target="_blank" rel="noopener noreferrer">
                  <CardContent className="p-8 text-center">
                    <div className="p-4 bg-blue-500/20 rounded-full w-fit mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
                      <Linkedin className="h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="text-white/90 font-bold text-lg mb-2">LinkedIn</h3>
                    <p className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                      /in/aisha-fathima-mohammed
                    </p>
                    <p className="text-white/60 text-xs mt-2">Let's connect professionally</p>
                  </CardContent>
                </Link>
              </Card>

              {/* GitHub Card */}
              <Card className="bg-white/5 border-white/10 hover:border-gray-500/30 transition-all duration-300 group cursor-pointer">
                <Link href="https://github.com/Aisha-Fathima" target="_blank" rel="noopener noreferrer">
                  <CardContent className="p-8 text-center">
                    <div className="p-4 bg-gray-500/20 rounded-full w-fit mx-auto mb-4 group-hover:bg-gray-500/30 transition-colors">
                      <Github className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-white/90 font-bold text-lg mb-2">GitHub</h3>
                    <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors">/Aisha-Fathima</p>
                    <p className="text-white/60 text-xs mt-2">Check out my code</p>
                  </CardContent>
                </Link>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center space-y-4">
              <div className="flex items-center justify-center gap-3 text-white/60">
                <MapPin className="h-4 w-4" />
                <span className="font-inter text-sm">Bengaluru, India</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-white/60">
                <Calendar className="h-4 w-4" />
                <span className="font-inter text-sm">Available for internships and collaborations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-white/60 text-sm">© 2024 Aisha Fathima Mohammed. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/Aisha-Fathima"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/60 hover:text-white/90 hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                <Github size={18} />
              </Link>
              <Link
                href="https://linkedin.com/in/aisha-fathima-mohammed"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/60 hover:text-white/90 hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="mailto:aishafathimamohammed@gmail.com"
                className="p-2 text-white/60 hover:text-white/90 hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                <Mail size={18} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
