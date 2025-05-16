import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Lightbulb, Beaker, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 w-full md:py-28 overflow-hidden bg-[url('https://pixelz.cc/wp-content/uploads/2023/12/machine-learning-artificial-intelligence-uhd-4k-wallpaper.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
        <div className="container relative z-10 flex flex-col items-center text-center">
          <h1 className="text-white animate-fade-up text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
            Машинное обучение <span className="text-primary text-white">ML</span>
          </h1>
          <p className="mt-4 text-white animate-fade-up text-muted-foreground delay-150 md:text-xl/relaxed lg:text-center lg:text-2xl/relaxed xl:text-center">
            Учебный портал по искусственному интеллекту и машинному обучению
          </p>
          <div className="mt-8 flex animate-fade-up flex-wrap justify-center gap-4 delay-300">
            <Button asChild size="lg">
              <Link href="/lectures">Начать обучение</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a target="_blank" href="https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/labs/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B0%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0%20%D0%9A%D1%83%D1%80%D1%81%D0%B0.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAU4TISY43TKE3DYBA%2F20250516%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250516T063620Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEAtOTj4nLg0O2f9vBLykfw5xxviVBGiXAWb5xxWAQR3AsCIQDyczSEwd%2B4fqhnMHNC1enPWPu0ds79SE%2BqiA05VJbNCyqZAghAEAAaDDMzNjMwMDUyNTM2NyIM2FBZd0a2u1in8HC6KvYBT6oeihdsw88BClL4MCOIb0mO6T%2FbAb2u4mZFtdTK3ZPiFyrYBjtIDKvdQeOPe0D2hdGMtbN8GiRuuYFRPLVVIk5NFhf%2Bfu%2BPIxS2mWfcyC6BtT42cCQTXxhbiNhfgz4U29fG32hjYFGYPniWYPcqz0jOURsNZlbdQyUclDd52YkHyCzv1oLjrtR0G%2Fo6x2FHUrcWLdJZNVb50q2qM8zBd9bqYPYOhB5pYkf%2FjfD3sF8ESESdUZMhED8QR0TLgK7fti10HQDm8pOHAnFJ1eOPZXPKbmfLQ5l0HiO82E2V8dLYdWHSpq5WaGfbeF6injCdCEkqp16OMI6lm8EGOt4Bnh2dhhNaVcVcTGQQPSCSEPh%2Bm3C3aG8fA5EAHk1dWJwKpfhZtnmoRejhOqlC9XU6KWbB%2BiJGlM7cimixykp%2FOK07UtGzI%2B2PzPJj2eoPThWBEfKUXkX1KIR8XGiHJNU6ruRfxtqva4o9Tgk4z75KdlCn6UgQL%2B1XFATZ8HCeGgqbX%2BXd04mv%2FqktAEzMMyqmO%2FxiP1JI4Xtq3tI%2B5TrvJuG%2BL40YNBbVxxxxjhCaVweSnzdOu2uYM1nMFSAc6HzZ%2FeSSrLzUjbF3rJMA2OZK2KHXLjfBc%2FD9%2Fw%2Bvn9Eu&X-Amz-Signature=da65eb41fd093f839ebf3bdde02584da9c67fb73be025f4bf1978bfa5b79838a&X-Amz-SignedHeaders=host&response-content-disposition=inline">Программа курса</a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Sections */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Разделы курса
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <BookOpen className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Лекции</CardTitle>
                <CardDescription>Теоретические материалы по ML</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>Полный комплект лекций по машинному обучению, охватывающий фундаментальные концепции, алгоритмы и современные подходы.</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/lectures">Перейти к лекциям</Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <Beaker className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Лабораторные работы</CardTitle>
                <CardDescription>Практические задания</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>Практические задания для закрепления теоретических знаний и развития навыков программирования в области машинного обучения.</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/labs">Перейти к лабораторным</Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <Lightbulb className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Глоссарий</CardTitle>
                <CardDescription>Термины и определения</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>Подробный словарь терминов и понятий в области искусственного интеллекта и машинного обучения для быстрого доступа к определениям.</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/glossary">Перейти к глоссарию</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      
      {/* Feature section */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Особенности нашего курса
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-8 w-8"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Актуальные материалы</h3>
              <p className="text-muted-foreground">Постоянно обновляемый контент, соответствующий последним достижениям в области ML</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-8 w-8"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 2v5"/><path d="M8 2v5"/><path d="M3 10h18"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Структурированный подход</h3>
              <p className="text-muted-foreground">Логическая последовательность материалов от основ до продвинутых тем</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-8 w-8"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Практический подход</h3>
              <p className="text-muted-foreground">Лабораторные работы с реальными примерами и задачами из индустрии</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}