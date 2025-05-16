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
      "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/labs/%D0%9B%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%201.pdf?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiBIfgJJ4aExGHnGlRtm4d5pOHK%2Be%2FCoRBFU4ubqk8OGuAIhAJFtRswyXKbDWRpk5HtRwFGozwU2deFkz6F4s9XxXEZ4KvkCCEAQABoMMzM2MzAwNTI1MzY3IgwA0Ekb3PGEBaCDO6Eq1gLpQERYmCMk%2Fpe%2FWqRGl1deNbO9V9A1X1%2BMn7ULNW49BTt%2Bks4QQbvxVHawxsie%2FrJN8KzloDZ%2F6SlP%2BI2ebAbcL9IXByHEj5jJhB5n38SxH0SlnV5cWI8X%2FW4n5HPs2MNynqU0ZjMLKjvfpNxhbZjdqG3OYH9NQ8amwEBBpY%2BQ3I9UjYtqL0%2FeanpBgzfMsWLoRW1xea56cw3jIgrclNMqks%2BeZGDEnsTtGgypjg5cHRdZt%2F4NHlm01jxfo4tAzoS5zM1r7cTzneVft8VVvjVJhxofz2uTpoMLmv78zqcJcYXrqil4Ky%2FtYBk8aXNQBf%2F2k%2FaAmKFIYGot7BNuUr1ti7nxQU8SZJ0oP2PvxVT%2BVOkLeYVSuhL2RxiE6paPVwf9n2flInmY4MEKNmw3Q%2Bl9xUxu90B%2FLDYLLUAGKyrZLCSXRAyJbWYQKS0318AhZyH5LE70gokwjqWbwQY6jwKH0WKMO%2BuH8qxaw37Gwqxz24tZeDCI6zTyMcJGbA71B5APjg%2B%2BFIzR2kJAl75zeumMCgWo2YvbRd6zL4CSfBUjLmqRIFib4HT0fyQ%2F4YoL6O%2FFhLYnzN2sMABjULPGTsp8ZP5uiJMr9wu0dKm1QA2OE6q4zx7aACB4Aoq2%2BUgGJFruwF36bI7KO162ANdm29K6xBUCxEQW7S0N%2BgltJ64FLgf2sBnhSnWVbAMM37nO%2BKDh%2FEUC1B04tSjQVXWHKpZ5LvJNrZNev%2BnCkl6XvTXMIn%2FhgwoSSaip1MfxYzIyEPxUxZANzIGX0Oa4yAoW9%2Bg%2FVe3Kq36m6S7rCPkkL0BLDsOQbUPh9yDQqNiP4Xfu&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAU4TISY43X76N4C53%2F20250516%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250516T070115Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=16d4150c38312cf9de220f33acfdd8703fc2790d2bf53467c190677eb32f8506",
    category: "setup",
  },
  {
    id: 2,
    title: "Лабораторная работа 2",
    description: "Sklearn и линейная регрессия",
    fileType: "pdf" as const,
    fileUrl:
      "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/labs/%D0%9B%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%202.pdf?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiBIfgJJ4aExGHnGlRtm4d5pOHK%2Be%2FCoRBFU4ubqk8OGuAIhAJFtRswyXKbDWRpk5HtRwFGozwU2deFkz6F4s9XxXEZ4KvkCCEAQABoMMzM2MzAwNTI1MzY3IgwA0Ekb3PGEBaCDO6Eq1gLpQERYmCMk%2Fpe%2FWqRGl1deNbO9V9A1X1%2BMn7ULNW49BTt%2Bks4QQbvxVHawxsie%2FrJN8KzloDZ%2F6SlP%2BI2ebAbcL9IXByHEj5jJhB5n38SxH0SlnV5cWI8X%2FW4n5HPs2MNynqU0ZjMLKjvfpNxhbZjdqG3OYH9NQ8amwEBBpY%2BQ3I9UjYtqL0%2FeanpBgzfMsWLoRW1xea56cw3jIgrclNMqks%2BeZGDEnsTtGgypjg5cHRdZt%2F4NHlm01jxfo4tAzoS5zM1r7cTzneVft8VVvjVJhxofz2uTpoMLmv78zqcJcYXrqil4Ky%2FtYBk8aXNQBf%2F2k%2FaAmKFIYGot7BNuUr1ti7nxQU8SZJ0oP2PvxVT%2BVOkLeYVSuhL2RxiE6paPVwf9n2flInmY4MEKNmw3Q%2Bl9xUxu90B%2FLDYLLUAGKyrZLCSXRAyJbWYQKS0318AhZyH5LE70gokwjqWbwQY6jwKH0WKMO%2BuH8qxaw37Gwqxz24tZeDCI6zTyMcJGbA71B5APjg%2B%2BFIzR2kJAl75zeumMCgWo2YvbRd6zL4CSfBUjLmqRIFib4HT0fyQ%2F4YoL6O%2FFhLYnzN2sMABjULPGTsp8ZP5uiJMr9wu0dKm1QA2OE6q4zx7aACB4Aoq2%2BUgGJFruwF36bI7KO162ANdm29K6xBUCxEQW7S0N%2BgltJ64FLgf2sBnhSnWVbAMM37nO%2BKDh%2FEUC1B04tSjQVXWHKpZ5LvJNrZNev%2BnCkl6XvTXMIn%2FhgwoSSaip1MfxYzIyEPxUxZANzIGX0Oa4yAoW9%2Bg%2FVe3Kq36m6S7rCPkkL0BLDsOQbUPh9yDQqNiP4Xfu&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAU4TISY43X76N4C53%2F20250516%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250516T070146Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=999782d668e375329b76e195cfaed7c17d964890e6a0ac4bf00ee73c812bd1eb",
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
