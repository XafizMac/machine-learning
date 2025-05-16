import { Metadata } from "next";
import FileCard from "@/components/file-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Лабораторные работы | ML - Обучение машинному обучению",
  description: "Практические задания по машинному обучению",
};

// Моковые данные для лабораторных работ
const labs = [
  {
    id: 1,
    title: "Лабораторная работа 1",
    description: "Работа с табличными данными и Рandas",
    fileType: "pdf" as const,
    fileUrl:
      "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/labs/%D0%9B%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%201.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAU4TISY43TKE3DYBA%2F20250516%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250516T062950Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEAtOTj4nLg0O2f9vBLykfw5xxviVBGiXAWb5xxWAQR3AsCIQDyczSEwd%2B4fqhnMHNC1enPWPu0ds79SE%2BqiA05VJbNCyqZAghAEAAaDDMzNjMwMDUyNTM2NyIM2FBZd0a2u1in8HC6KvYBT6oeihdsw88BClL4MCOIb0mO6T%2FbAb2u4mZFtdTK3ZPiFyrYBjtIDKvdQeOPe0D2hdGMtbN8GiRuuYFRPLVVIk5NFhf%2Bfu%2BPIxS2mWfcyC6BtT42cCQTXxhbiNhfgz4U29fG32hjYFGYPniWYPcqz0jOURsNZlbdQyUclDd52YkHyCzv1oLjrtR0G%2Fo6x2FHUrcWLdJZNVb50q2qM8zBd9bqYPYOhB5pYkf%2FjfD3sF8ESESdUZMhED8QR0TLgK7fti10HQDm8pOHAnFJ1eOPZXPKbmfLQ5l0HiO82E2V8dLYdWHSpq5WaGfbeF6injCdCEkqp16OMI6lm8EGOt4Bnh2dhhNaVcVcTGQQPSCSEPh%2Bm3C3aG8fA5EAHk1dWJwKpfhZtnmoRejhOqlC9XU6KWbB%2BiJGlM7cimixykp%2FOK07UtGzI%2B2PzPJj2eoPThWBEfKUXkX1KIR8XGiHJNU6ruRfxtqva4o9Tgk4z75KdlCn6UgQL%2B1XFATZ8HCeGgqbX%2BXd04mv%2FqktAEzMMyqmO%2FxiP1JI4Xtq3tI%2B5TrvJuG%2BL40YNBbVxxxxjhCaVweSnzdOu2uYM1nMFSAc6HzZ%2FeSSrLzUjbF3rJMA2OZK2KHXLjfBc%2FD9%2Fw%2Bvn9Eu&X-Amz-Signature=578be823927990987435d4f696374420ba098cc8e3735e73adcba9ff0dbccb7f&X-Amz-SignedHeaders=host&response-content-disposition=inline",
    category: "setup",
  },
  {
    id: 2,
    title: "Лабораторная работа 2",
    description: "Sklearn и линейная регрессия",
    fileType: "pdf" as const,
    fileUrl:
      "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/labs/%D0%9B%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%202.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAU4TISY43TKE3DYBA%2F20250516%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250516T063049Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEAtOTj4nLg0O2f9vBLykfw5xxviVBGiXAWb5xxWAQR3AsCIQDyczSEwd%2B4fqhnMHNC1enPWPu0ds79SE%2BqiA05VJbNCyqZAghAEAAaDDMzNjMwMDUyNTM2NyIM2FBZd0a2u1in8HC6KvYBT6oeihdsw88BClL4MCOIb0mO6T%2FbAb2u4mZFtdTK3ZPiFyrYBjtIDKvdQeOPe0D2hdGMtbN8GiRuuYFRPLVVIk5NFhf%2Bfu%2BPIxS2mWfcyC6BtT42cCQTXxhbiNhfgz4U29fG32hjYFGYPniWYPcqz0jOURsNZlbdQyUclDd52YkHyCzv1oLjrtR0G%2Fo6x2FHUrcWLdJZNVb50q2qM8zBd9bqYPYOhB5pYkf%2FjfD3sF8ESESdUZMhED8QR0TLgK7fti10HQDm8pOHAnFJ1eOPZXPKbmfLQ5l0HiO82E2V8dLYdWHSpq5WaGfbeF6injCdCEkqp16OMI6lm8EGOt4Bnh2dhhNaVcVcTGQQPSCSEPh%2Bm3C3aG8fA5EAHk1dWJwKpfhZtnmoRejhOqlC9XU6KWbB%2BiJGlM7cimixykp%2FOK07UtGzI%2B2PzPJj2eoPThWBEfKUXkX1KIR8XGiHJNU6ruRfxtqva4o9Tgk4z75KdlCn6UgQL%2B1XFATZ8HCeGgqbX%2BXd04mv%2FqktAEzMMyqmO%2FxiP1JI4Xtq3tI%2B5TrvJuG%2BL40YNBbVxxxxjhCaVweSnzdOu2uYM1nMFSAc6HzZ%2FeSSrLzUjbF3rJMA2OZK2KHXLjfBc%2FD9%2Fw%2Bvn9Eu&X-Amz-Signature=c663b692a5cb6e9ebc8e83354de3f3f6171e225bafeeed5cea10b4df4ade22eb&X-Amz-SignedHeaders=host&response-content-disposition=inline",
    category: "setup",
  },
];

export default function LabsPage() {
  // Группируем лабораторные по категориям
  const setupLabs = labs.filter((lab) => lab.category === "setup");
  const basicLabs = labs.filter((lab) => lab.category === "basic");
  const advancedLabs = labs.filter((lab) => lab.category === "advanced");
  const researchLabs = labs.filter((lab) => lab.category === "research");

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Лабораторные работы
        </h1>
        <p className="text-muted-foreground text-lg">
          Практические задания для закрепления теоретических знаний в области
          машинного обучения
        </p>
      </div>

      <Tabs defaultValue="all" className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">Все работы</TabsTrigger>
            <TabsTrigger value="setup">Установка</TabsTrigger>
            <TabsTrigger value="basic">Базовые</TabsTrigger>
            <TabsTrigger value="advanced">Продвинутые</TabsTrigger>
            <TabsTrigger value="research">Исследовательские</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labs.map((lab) => (
              <FileCard
                key={lab.id}
                number={lab.id}
                title={lab.title}
                description={lab.description}
                fileType={lab.fileType}
                fileUrl={lab.fileUrl}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="setup" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {setupLabs.map((lab) => (
              <FileCard
                key={lab.id}
                number={lab.id}
                title={lab.title}
                description={lab.description}
                fileType={lab.fileType}
                fileUrl={lab.fileUrl}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="basic" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {basicLabs.map((lab) => (
              <FileCard
                key={lab.id}
                number={lab.id}
                title={lab.title}
                description={lab.description}
                fileType={lab.fileType}
                fileUrl={lab.fileUrl}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedLabs.map((lab) => (
              <FileCard
                key={lab.id}
                number={lab.id}
                title={lab.title}
                description={lab.description}
                fileType={lab.fileType}
                fileUrl={lab.fileUrl}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="research" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchLabs.map((lab) => (
              <FileCard
                key={lab.id}
                number={lab.id}
                title={lab.title}
                description={lab.description}
                fileType={lab.fileType}
                fileUrl={lab.fileUrl}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
