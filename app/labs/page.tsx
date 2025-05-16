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
      "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/labs/%D0%9B%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F+%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0+1.pdf",
    category: "setup",
  },
  {
    id: 2,
    title: "Лабораторная работа 2",
    description: "Sklearn и линейная регрессия",
    fileType: "pdf" as const,
    fileUrl:
      "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/labs/%D0%9B%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F+%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0+2.pdf",
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
