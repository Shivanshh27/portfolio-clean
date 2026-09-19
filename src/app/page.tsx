"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Check,
  Code2,
  Copy,
  ExternalLink,
  FileText,
  Mail,
  Sparkles,
  Trophy,
  Users,
  X as XIcon,
} from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

const PROJECT_CATEGORIES = [
  "All",
  "AI & Agents",
  "Systems & Backend",
  "Full-Stack",
] as const;

export default function Page() {
  const [activeProject, setActiveProject] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const filteredProjects =
    selectedCategory === "All"
      ? DATA.pprojects
      : DATA.pprojects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-12">
      {/* Hero Section */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-6">
          <div className="gap-4 flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center">
            <div className="flex-col flex flex-1 space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary border border-primary/20">
                  <Sparkles className="size-3.5 text-primary animate-pulse" />
                  Software Engineer & AI Builder
                </span>
              </div>
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none text-black dark:text-transparent dark:bg-gradient-to-r dark:from-cyan-400 dark:via-blue-400 dark:to-purple-500 dark:bg-clip-text pb-1"
                yOffset={8}
                text={DATA.name}
              />
              <BlurFadeText
                className="max-w-[600px] text-muted-foreground md:text-lg font-medium tracking-tight leading-relaxed"
                delay={BLUR_FADE_DELAY * 2}
                text={DATA.description}
              />

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <Button
                  onClick={handleCopyEmail}
                  variant="outline"
                  size="sm"
                  className="rounded-full text-xs gap-1.5 shadow-sm hover:bg-secondary/80 transition-all duration-200"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="size-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5 text-muted-foreground" />
                      <span>Copy Email</span>
                    </>
                  )}
                </Button>

                <Button
                  asChild
                  size="sm"
                  variant="secondary"
                  className="rounded-full text-xs gap-1.5 shadow-sm transition-all duration-200"
                >
                  <Link href="/resume.pdf" target="_blank">
                    <FileText className="size-3.5" />
                    <span>View Resume</span>
                  </Link>
                </Button>

                <Button
                  asChild
                  size="sm"
                  className="rounded-full text-xs gap-1.5 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <Link href="#collaboration">
                    <Mail className="size-3.5" />
                    <span>Get in Touch</span>
                  </Link>
                </Button>
              </div>
            </div>

            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 sm:size-32 border-2 border-border shadow-[0_4px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_24px_rgba(255,255,255,0.02)] ring-4 ring-primary/5">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover" />
                <AvatarFallback className="text-xl font-bold">{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Availability Banner */}
      <section id="availability">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="rounded-xl border bg-card/40 backdrop-blur-md px-4 py-3 text-center shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_-2px_rgba(255,255,255,0.01)] transition-all duration-300 hover:bg-card/75 hover:border-emerald-500/30">
            <div className="flex items-center justify-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span className="text-foreground font-bold">{DATA.availability.status}</span> —{" "}
                {DATA.availability.message}
              </p>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* About Section */}
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold tracking-tight">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2 leading-relaxed">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tight">Technical Skills</h2>
              <span className="text-xs text-muted-foreground font-mono">Expertise & Stack</span>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {DATA.skillsCategories.map((cat, id) => (
              <BlurFade
                key={cat.category}
                delay={BLUR_FADE_DELAY * 8 + id * 0.04}
              >
                <div
                  className={`p-4 rounded-xl border bg-card/25 backdrop-blur-sm transition-all duration-300 ${cat.border} hover:bg-card/50 hover:-translate-y-0.5 hover:shadow-sm relative overflow-hidden h-full flex flex-col justify-between`}
                >
                  {/* Subtle color blob */}
                  <div
                    className={`absolute -right-8 -bottom-8 size-20 rounded-full bg-gradient-to-br ${cat.gradient} blur-xl pointer-events-none`}
                  />

                  <div>
                    <h3 className="text-xs font-bold tracking-wider uppercase text-muted-foreground/90 mb-2.5 relative z-10 flex items-center justify-between">
                      <span>{cat.category}</span>
                      <span className="text-[10px] font-mono text-muted-foreground/60">
                        {cat.skills.length}
                      </span>
                    </h3>

                    <div className="flex flex-wrap gap-1.5 relative z-10">
                      {cat.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-[11px] font-medium bg-secondary/40 backdrop-blur-sm border border-border/50 hover:bg-secondary/80 transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="space-y-8 w-full py-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                <Code2 className="size-3.5" />
                Featured Engineering Work
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tighter">
                Crafted with Precision & Scale
              </h2>
              <p className="text-muted-foreground text-sm max-w-lg leading-relaxed">
                From sub-millisecond caching engines to explainable AI pipelines and multi-modal fraud detection systems.
              </p>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
                {PROJECT_CATEGORIES.map((category) => {
                  const isSelected = selectedCategory === category;
                  const count =
                    category === "All"
                      ? DATA.pprojects.length
                      : DATA.pprojects.filter((p) => p.category === category)
                          .length;

                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                        isSelected
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-secondary/40 hover:bg-secondary/80 text-muted-foreground hover:text-foreground border border-border/50"
                      }`}
                    >
                      <span>{category}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isSelected
                            ? "bg-primary-foreground/20 text-primary-foreground"
                            : "bg-background/80 text-muted-foreground"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </BlurFade>

          {/* Project Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[850px] mx-auto"
          >
            <AnimatePresence>
              {filteredProjects.map((project, id) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={project.title}
                >
                  <BlurFade
                    key={project.title}
                    delay={BLUR_FADE_DELAY * 10 + id * 0.04}
                  >
                    <ProjectCard
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
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold tracking-tight">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 12 + id * 0.04}
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

      {/* Honors & Achievements Section */}
      <section id="achievements">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex items-center gap-2">
              <Trophy className="size-5 text-amber-500" />
              <h2 className="text-xl font-bold tracking-tight">Honors & Achievements</h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {DATA.achievements.map((achievement, id) => (
              <BlurFade
                key={achievement.title}
                delay={BLUR_FADE_DELAY * 14 + id * 0.04}
              >
                <div className="p-4 rounded-xl border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:bg-card/60 hover:-translate-y-0.5 hover:border-amber-500/30 hover:shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-sm font-bold text-foreground">
                        {achievement.title}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="text-[10px] bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 shrink-0"
                      >
                        {achievement.badge}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground/75 mt-3 pt-2 border-t border-border/40 font-mono">
                    <span>{achievement.organization}</span>
                    <span>{achievement.date}</span>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Mentorship Section */}
      <section id="leadership">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="flex items-center gap-2">
              <Users className="size-5 text-blue-500" />
              <h2 className="text-xl font-bold tracking-tight">Leadership & Community</h2>
            </div>
          </BlurFade>

          {DATA.leadership.map((item, id) => (
            <BlurFade
              key={item.organization}
              delay={BLUR_FADE_DELAY * 16 + id * 0.04}
            >
              <ResumeCard
                key={item.organization}
                logoUrl={item.logoUrl}
                altText={item.organization}
                title={item.organization}
                subtitle={item.role}
                badges={item.badges}
                period={item.period}
                description={item.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <h2 className="text-xl font-bold tracking-tight">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 18 + id * 0.04}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                description={education.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Collaboration / Contact CTA Section */}
      <section id="collaboration" className="py-4">
        <BlurFade delay={BLUR_FADE_DELAY * 19}>
          <div className="relative rounded-2xl border border-border/80 bg-card/30 backdrop-blur-md p-6 sm:p-8 text-center overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.01)]">
            {/* Glowing Accent Rings */}
            <div className="absolute -right-20 -top-20 size-44 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 size-44 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="inline-block rounded-full bg-primary/10 text-primary border border-primary/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider">
                Let&apos;s Build Together
              </div>

              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Ready to Create Impactful Software?
              </h2>

              <p className="mx-auto max-w-lg text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Whether you are exploring high-throughput backend architecture, agentic AI integration, or full-stack platform engineering, I am open to exciting opportunities and collaborations.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-3">
                <Button
                  onClick={handleCopyEmail}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto shadow-sm gap-2 transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="size-4 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-4" />
                      <span>{DATA.contact.email}</span>
                    </>
                  )}
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <Link href={`mailto:${DATA.contact.email}?subject=Project Inquiry / Opportunity`}>
                    <Mail className="size-4 mr-2" />
                    Send an Email
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <Link href={`tel:${DATA.contact.tel}`}>
                    Call Directly
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Interactive Project Modal */}
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
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-xl p-6 shadow-2xl flex flex-col md:flex-row gap-6 max-h-[88vh] md:max-h-none overflow-y-auto md:overflow-visible z-50"
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
              <div className="w-full md:w-1/2 flex flex-col justify-start">
                <div className="relative rounded-xl overflow-hidden border bg-muted flex items-center justify-center w-full aspect-video md:h-48 shadow-sm">
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
                  <div className="mt-3 flex flex-wrap gap-1">
                    {activeProject.technologies.map((tag: string) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[10px] px-1.5 py-0.5 bg-secondary/60"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Title & Description */}
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-[10px] px-2 py-0 border-primary/30 text-primary">
                      {activeProject.category}
                    </Badge>
                    <span className="text-[11px] text-muted-foreground font-mono">
                      {activeProject.dates}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-foreground pr-6">
                    {activeProject.title}
                  </h3>

                  <div className="max-w-full text-xs text-muted-foreground font-sans leading-relaxed space-y-2.5 mt-3">
                    {activeProject.description.split(" • ").length > 1 ? (
                      <ul className="list-disc pl-4 space-y-1.5">
                        {activeProject.description.split(" • ").map((bullet: string, i: number) => (
                          <li key={i}>{bullet.trim()}</li>
                        ))}
                      </ul>
                    ) : activeProject.description.split(". ").length > 1 ? (
                      <ul className="list-disc pl-4 space-y-1.5">
                        {activeProject.description
                          .split(". ")
                          .filter((s: string) => s.trim().length > 0)
                          .map((bullet: string, i: number) => (
                            <li key={i}>{bullet.trim() + (bullet.endsWith(".") ? "" : ".")}</li>
                          ))}
                      </ul>
                    ) : (
                      <p>{activeProject.description}</p>
                    )}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex flex-wrap gap-2 pt-5 mt-auto">
                  {activeProject.links &&
                    activeProject.links.map((lnk: any, idx: number) => (
                      <a
                        key={idx}
                        href={lnk.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 border ${
                          lnk.type === "Website"
                            ? "bg-primary text-primary-foreground hover:bg-primary/90 border-primary"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/90 border-border"
                        }`}
                      >
                        {lnk.icon}
                        <span>{lnk.type === "Website" ? "Live Demo" : "View Source"}</span>
                        <ExternalLink className="size-3 opacity-75" />
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
