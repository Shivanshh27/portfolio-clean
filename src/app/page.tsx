"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X as XIcon } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [activeProject, setActiveProject] = useState<any>(null);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-2">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none text-black dark:text-transparent dark:bg-gradient-to-r dark:from-cyan-400 dark:via-blue-400 dark:to-purple-500 dark:bg-clip-text pb-1"
                yOffset={8}
                text={DATA.name}
              />
              <BlurFadeText
                className="max-w-[600px] text-muted-foreground md:text-xl font-medium tracking-tight"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.02)]">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="availability">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="rounded-xl border bg-card/40 backdrop-blur-md px-4 py-3 text-center shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_-2px_rgba(255,255,255,0.01)] transition-all duration-300 hover:bg-card/75 hover:border-emerald-500/20">
            <div className="flex items-center justify-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span className="text-foreground font-bold">{DATA.availability.status}</span> — {DATA.availability.message}
              </p>
            </div>
          </div>
        </BlurFade>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 9 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 11 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                category: "Languages",
                skills: ["C++", "Python", "JavaScript", "TypeScript"],
                gradient: "from-blue-500/10 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-400/5",
                border: "hover:border-blue-500/30"
              },
              {
                category: "Frontend",
                skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
                gradient: "from-purple-500/10 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-400/5",
                border: "hover:border-purple-500/30"
              },
              {
                category: "Backend",
                skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
                gradient: "from-emerald-500/10 to-teal-500/5 dark:from-emerald-500/10 dark:to-teal-400/5",
                border: "hover:border-emerald-500/30"
              },
              {
                category: "Databases",
                skills: ["PostgreSQL", "MongoDB", "Redis"],
                gradient: "from-indigo-500/10 to-violet-500/5 dark:from-indigo-500/10 dark:to-violet-400/5",
                border: "hover:border-indigo-500/30"
              },
              {
                category: "Tools & Platforms",
                skills: ["Git", "GitHub", "Postman", "Cloudinary", "Render", "Vercel"],
                gradient: "from-amber-500/10 to-orange-500/5 dark:from-amber-500/10 dark:to-orange-400/5",
                border: "hover:border-amber-500/30"
              },
              {
                category: "Core CS",
                skills: [
                  "Data Structures and Algorithms",
                  "Object-Oriented Programming (OOP)",
                  "Database Management Systems (DBMS)",
                  "Operating Systems"
                ],
                gradient: "from-rose-500/10 to-red-500/5 dark:from-rose-500/10 dark:to-red-400/5",
                border: "hover:border-rose-500/30"
              }
            ].map((cat, id) => (
              <BlurFade
                key={cat.category}
                delay={BLUR_FADE_DELAY * 13 + id * 0.05}
              >
                <div className={`p-5 rounded-xl border bg-card/20 backdrop-blur-sm transition-all duration-300 ${cat.border} hover:bg-card/40 hover:-translate-y-1 hover:shadow-md relative overflow-hidden`}>
                  {/* Subtle color blob behind card */}
                  <div className={`absolute -right-10 -bottom-10 size-24 rounded-full bg-gradient-to-br ${cat.gradient} blur-2xl pointer-events-none`} />
                  
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-3 relative z-10">
                    {cat.category}
                  </h3>
                  
                  <div className="flex flex-wrap gap-1.5 relative z-10">
                    {cat.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="text-xs bg-secondary/40 backdrop-blur-sm border hover:bg-secondary/70 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.pprojects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 15 + id * 0.05}
              >
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                  onClick={() => setActiveProject(project)}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="collaboration" className="py-6">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="relative rounded-2xl border border-border/80 bg-card/30 backdrop-blur-md p-6 sm:p-10 text-center overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.01)]">
            {/* Glowing Accent Ring inside the card */}
            <div className="absolute -right-20 -top-20 size-40 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 size-40 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="inline-block rounded-full bg-primary/10 text-primary border border-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider">
                Freelance & Collaboration
              </div>

              <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
                Want to Build Something Impactful?
              </h2>

              <p className="mx-auto max-w-lg text-sm text-muted-foreground leading-relaxed">
                I help build AI-powered applications, scalable full-stack
                platforms, and modern digital products. Whether you need an
                end-to-end system, backend architecture, or an AI integration,
                I’m open to collaborating and bringing your ideas to life.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
                <Button asChild size="lg" className="w-full sm:w-auto shadow-md transition-all duration-300 hover:scale-105 active:scale-95">
                  <Link href="tel:+917049949474" title="+91 70499 49474">
                    Call Now
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto hover:bg-primary/5 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <Link
                    href={`mailto:${DATA.contact.email}?subject=Project Inquiry`}
                    title={DATA.contact.email}
                  >
                    Send an Email
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            {/* Backdrop click to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 cursor-pointer"
              onClick={() => setActiveProject(null)}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card/90 backdrop-blur-xl p-6 shadow-2xl flex flex-col md:flex-row gap-6 max-h-[85vh] md:max-h-none overflow-y-auto md:overflow-visible z-50"
            >
              {/* Glowing decorative ring inside modal */}
              <div className="absolute -right-20 -top-20 size-40 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full border bg-secondary/85 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-200 z-50 shadow-sm"
              >
                <XIcon className="size-4" />
              </button>

              {/* Left Column: Image / Video Preview */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="relative rounded-xl overflow-hidden border bg-muted flex items-center justify-center w-full aspect-video md:h-52">
                  {activeProject.video ? (
                    <video
                      src={activeProject.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="size-full object-cover object-top"
                    />
                  ) : activeProject.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="size-full object-cover object-top"
                    />
                  ) : (
                    <div className="text-muted-foreground text-xs">No preview available</div>
                  )}
                </div>

                {/* Tags */}
                {activeProject.technologies && (
                  <div className="mt-4 flex flex-wrap gap-1">
                    {activeProject.technologies.map((tag: string) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[10px] px-1.5 py-0.5"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Title & Description Bullet Points */}
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-foreground pr-8">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 mb-4 font-sans">{activeProject.dates}</p>

                  <div className="max-w-full text-xs text-muted-foreground font-sans leading-relaxed space-y-3">
                    {/* Check if description contains bullet points or needs to be split */}
                    {activeProject.description.split(" • ").length > 1 ? (
                      <ul className="list-disc pl-4 space-y-2">
                        {activeProject.description.split(" • ").map((bullet: string, i: number) => (
                          <li key={i}>{bullet.trim()}</li>
                        ))}
                      </ul>
                    ) : activeProject.description.split(". ").length > 1 ? (
                      <ul className="list-disc pl-4 space-y-2">
                        {activeProject.description.split(". ").filter((s: string) => s.trim().length > 0).map((bullet: string, i: number) => (
                          <li key={i}>{bullet.trim() + (bullet.endsWith(".") ? "" : ".")}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{activeProject.description}</p>
                    )}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex gap-3 pt-6 mt-auto">
                  {activeProject.links && activeProject.links.map((lnk: any, idx: number) => (
                    <a
                      key={idx}
                      href={lnk.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 border ${
                        lnk.type === "Website" 
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 border-primary" 
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/90 border-border"
                      }`}
                    >
                      {lnk.icon}
                      <span>View {lnk.type}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
