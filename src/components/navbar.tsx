import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-gradient-to-t from-background/15 to-transparent backdrop-blur-sm pointer-events-none"></div>
      {/* Decorative ambient glow under dock */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-48 h-8 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 blur-xl rounded-full pointer-events-none z-10" />
      
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-2 bg-background/20 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-2xl dark:[box-shadow:0_-20px_80px_-20px_#ffffff05_inset] rounded-full transition-all duration-300">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full transition-all duration-300 hover:-translate-y-1 hover:text-primary hover:bg-primary/10 active:scale-95"
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full bg-border/40" />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full transition-all duration-300 hover:-translate-y-1 hover:text-primary hover:bg-primary/10 active:scale-95"
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        <Separator orientation="vertical" className="h-full py-2 bg-border/40" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="transition-all duration-300 hover:-translate-y-1 active:scale-95">
                <ModeToggle />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
