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
              <a target="_blank" href="https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/labs/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B0%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0%20%D0%9A%D1%83%D1%80%D1%81%D0%B0.pdf?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiBIfgJJ4aExGHnGlRtm4d5pOHK%2Be%2FCoRBFU4ubqk8OGuAIhAJFtRswyXKbDWRpk5HtRwFGozwU2deFkz6F4s9XxXEZ4KvkCCEAQABoMMzM2MzAwNTI1MzY3IgwA0Ekb3PGEBaCDO6Eq1gLpQERYmCMk%2Fpe%2FWqRGl1deNbO9V9A1X1%2BMn7ULNW49BTt%2Bks4QQbvxVHawxsie%2FrJN8KzloDZ%2F6SlP%2BI2ebAbcL9IXByHEj5jJhB5n38SxH0SlnV5cWI8X%2FW4n5HPs2MNynqU0ZjMLKjvfpNxhbZjdqG3OYH9NQ8amwEBBpY%2BQ3I9UjYtqL0%2FeanpBgzfMsWLoRW1xea56cw3jIgrclNMqks%2BeZGDEnsTtGgypjg5cHRdZt%2F4NHlm01jxfo4tAzoS5zM1r7cTzneVft8VVvjVJhxofz2uTpoMLmv78zqcJcYXrqil4Ky%2FtYBk8aXNQBf%2F2k%2FaAmKFIYGot7BNuUr1ti7nxQU8SZJ0oP2PvxVT%2BVOkLeYVSuhL2RxiE6paPVwf9n2flInmY4MEKNmw3Q%2Bl9xUxu90B%2FLDYLLUAGKyrZLCSXRAyJbWYQKS0318AhZyH5LE70gokwjqWbwQY6jwKH0WKMO%2BuH8qxaw37Gwqxz24tZeDCI6zTyMcJGbA71B5APjg%2B%2BFIzR2kJAl75zeumMCgWo2YvbRd6zL4CSfBUjLmqRIFib4HT0fyQ%2F4YoL6O%2FFhLYnzN2sMABjULPGTsp8ZP5uiJMr9wu0dKm1QA2OE6q4zx7aACB4Aoq2%2BUgGJFruwF36bI7KO162ANdm29K6xBUCxEQW7S0N%2BgltJ64FLgf2sBnhSnWVbAMM37nO%2BKDh%2FEUC1B04tSjQVXWHKpZ5LvJNrZNev%2BnCkl6XvTXMIn%2FhgwoSSaip1MfxYzIyEPxUxZANzIGX0Oa4yAoW9%2Bg%2FVe3Kq36m6S7rCPkkL0BLDsOQbUPh9yDQqNiP4Xfu&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAU4TISY43X76N4C53%2F20250516%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250516T065949Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=44a49ed200861f35160dc68fe95ff9f053a99006b8f64efd3e63ced26ac6d1a7">Программа курса</a>
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