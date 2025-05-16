import { BrainCircuit } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t flex flex-col items-center border-border/40 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Link href="/" className="flex items-center gap-2">
            <BrainCircuit className="h-6 w-6" />
            <span className="font-bold text-xl">ML</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Образовательный портал по машинному обучению. <br />
            Все материалы предоставлены для учебных целей.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <nav className="flex flex-col items-center gap-2 md:items-end">
            <Link href="/lectures" className="hover:underline">
              Лекции
            </Link>
            <Link href="/labs" className="hover:underline">
              Лабораторные работы
            </Link>
            <Link href="/glossary" className="hover:underline">
              Глоссарий
            </Link>
          </nav>
        </div>
      </div>
      <div className="container border-t border-border/40 py-6 text-center text-sm text-muted-foreground">
        <p>© 2025 ML - Машинное обучение. Все права защищены.</p>
      </div>
    </footer>
  );
}