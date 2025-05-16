"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-4">
          <BrainCircuit className="h-6 w-6" />
          <span className="font-bold text-xl">ML</span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/lectures" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  navigationMenuTriggerStyle(),
                  isActive("/lectures") && "bg-accent text-accent-foreground"
                )}>
                  Лекции
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/labs" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  navigationMenuTriggerStyle(),
                  isActive("/labs") && "bg-accent text-accent-foreground"
                )}>
                  Лабораторные работы
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/glossary" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  navigationMenuTriggerStyle(),
                  isActive("/glossary") && "bg-accent text-accent-foreground"
                )}>
                  Глоссарий
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex md:hidden flex-1 justify-end">
          <MobileNav />
        </div>
        <div className="hidden md:flex flex-1 items-center justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        asChild
      >
        <Link href="/lectures">
          <span className="sr-only">Лекции</span>
          <span>Лекции</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        asChild
      >
        <Link href="/labs">
          <span className="sr-only">Лабораторные</span>
          <span>Лабораторные</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        asChild
      >
        <Link href="/glossary">
          <span className="sr-only">Глоссарий</span>
          <span>Глоссарий</span>
        </Link>
      </Button>
      <ModeToggle />
    </div>
  );
}