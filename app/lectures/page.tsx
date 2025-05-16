import { Metadata } from "next";
import FileCard from "@/components/file-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Лекции | ML - Обучение машинному обучению",
  description: "Теоретические материалы по машинному обучению",
};

// Моковые данные для лекций
const lectures = [
  {
    id: 1,
    title: "Введение в машинное обучение",
    description: "Основные понятия, история развития и области применения машинного обучения",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+1.+%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5+%D0%B2+%D0%9C%D0%B0%D1%88%D0%B8%D0%BD%D0%BD%D0%BE%D0%B5+%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5.pdf",
    category: "basics"
  },
  {
    id: 2,
    title: "Линейная регрессия",
    description: "Математические основы, градиентный спуск, оценка качества модели",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+2.%D0%9B%D0%B8%D0%BD%D0%B5%D0%B8%CC%86%D0%BD%D0%B0%D1%8F+%D1%80%D0%B5%D0%B3%D1%80%D0%B5%D1%81%D1%81%D0%B8%D1%8F%2C+%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8+%D0%BF%D0%BE%D1%82%D0%B5%D1%80%D1%8C.pdf",
    category: "basics"
  },
  {
    id: 3,
    title: "Обобщающая способность, градиентные методы обучения",
    description: "Переобучение, Оценивание качества моделей, Обучение линейной регрессии",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+3+%D0%9E%D0%B1%D0%BE%D0%B1%D1%89%D0%B0%D1%8E%D1%89%D0%B0%D1%8F+%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%BD%D0%BE%D1%81%D1%82%D1%8C%2C+%D0%B3%D1%80%D0%B0%D0%B4%D0%B8%D0%B5%D0%BD%D1%82%D0%BD%D1%8B%D0%B5+%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%8B+%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F.pdf",
    category: "basics"
  },
  {
    id: 4,
    title: "Градиен методы.",
    description: "Регуляризация, гиперпараметры, разреженные модели",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+4.+%D0%93%D1%80%D0%B0%D0%B4%D0%B8%D0%B5%D0%BD+%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%8B.pdf", 
    category: "basics"
  },
  {
    id: 5,
    title: "Линейная классификация",
    description: "Логистическая регрессия, SVM, Softmax, KNN",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+5.+%D0%9B%D0%B8%D0%BD%D0%B5%D0%B8%CC%86%D0%BD+%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F.pdf",
    category: "neural"
  },
  {
    id: 6,
    title: "Логистическая регрессия",
    description: "Архитектура CNN, свертки, пулинг и применение в компьютерном зрении",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+6.+%D0%9B%D0%BE%D0%B3%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F+%D1%80%D0%B5%D0%B3%D1%80%D0%B5%D1%81%D1%81%D0%B8%D1%8F.pdf",
    category: "neural"
  },
  {
    id: 7,
    title: "Полиномиальная регрессия",
    description: "Полиномиальная регрессия, регуляризация, переобучение и недообучение",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+7.+%D0%9F%D0%BE%D0%BB%D0%B8%D0%BD%D0%BE%D0%BC%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F+%D1%80%D0%B5%D0%B3%D1%80%D0%B5%D1%81%D1%81%D0%B8%D1%8F..pdf",
    category: "neural"
  },
  {
    id: 8,
    title: "Многоклассовая классификация",
    description: "Softmax, SVM, KNN, многоклассовая логистическая регрессия",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+8.+%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BE%D0%B2%D0%B0%D1%8F+%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F.pdf",
    category: "neural"
  },
  {
    id: 9,
    title: "Решающие деревья",
    description: "Определение решающего дерева, Построение деревьев, Критерии информативности",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+9.++%D0%A0%D0%B5%D1%88%D0%B0%D1%8E%D1%89%D0%B8%D0%B5+%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D1%8F.pdf",
    category: "advanced"
  },
  {
    id: 10,
    title: "Бэггинг, случайные леса",
    description: "Бутстрап,  Bias-Variance decomposition, Минимум среднеквадратичного ри",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+10+.%D0%91%D1%8D%D0%B3%D0%B3%D0%B8%D0%BD%D0%B3%2C+%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B8%CC%86%D0%BD%D1%8B%D0%B5+%D0%BB%D0%B5%D1%81%D0%B0.pdf",
    category: "advanced"
  },
  {
    id: 11,
    title: "Градиентный бустинг",
    description: "Бустинг в задаче регрессии, Градиентный бустинг",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+11.+%D0%93%D1%80%D0%B0%D0%B4%D0%B8%D0%B5%D0%BD%D1%82%D0%BD%D1%8B%D0%B8%CC%86+%D0%B1%D1%83%D1%81%D1%82%D0%B8%D0%BD%D0%B3.pdf",
    category: "advanced"
  },
  {
    id: 12,
    title: "Градиентный бустинг",
    description: "Бустинг в задаче регрессии, Градиентный бустинг",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+12.+%D0%93%D1%80%D0%B0%D0%B4%D0%B8%D0%B5%D0%BD%D1%82%D0%BD%D1%8B%D0%B8%CC%86+%D0%B1%D1%83%D1%81%D1%82%D0%B8%D0%BD%D0%B3.pdf",
    category: "advanced"
  },
  {
    id: 13,
    title: "Бустинг и случайные леса",
    description: "Линейные композиции, бустинг и случайные леса",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+13.+%D0%B1%D1%83%D1%81%D1%82%D0%B8%D0%BD%D0%B3+%D0%B8+%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B8%CC%86%D0%BD%D1%8B%D0%B5+%D0%BB%D0%B5%D1%81%D0%B0..pdf",
    category: "advanced"
  },
  {
    id: 14,
    title: "Класстеризация . Обучение без учителя",
    description: "Кластеризация, Метрики качества кластеризации, Алгоритм k-means",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+14.+%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D1%82%D0%B5%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F+.+%D0%9E%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5+%D0%B1%D0%B5%D0%B7+%D1%83%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8F.pdf",
    category: "advanced"
  },
];

export default function LecturesPage() {
  // Группируем лекции по категориям
  const basicLectures = lectures.filter(lecture => lecture.category === "basics");
  const neuralLectures = lectures.filter(lecture => lecture.category === "neural");
  const advancedLectures = lectures.filter(lecture => lecture.category === "advanced");
  
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Лекции</h1>
        <p className="text-muted-foreground text-lg">
          Теоретические материалы по машинному обучению, алгоритмам и нейронным сетям
        </p>
      </div>
      
      <Tabs defaultValue="all" className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">Все лекции</TabsTrigger>
            <TabsTrigger value="basics">Основы ML</TabsTrigger>
            <TabsTrigger value="neural">Нейронные сети</TabsTrigger>
            <TabsTrigger value="advanced">Продвинутые темы</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="all" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lectures.map((lecture) => (
              <FileCard
                key={lecture.id}
                number={lecture.id}
                title={lecture.title}
                description={lecture.description}
                fileType={lecture.fileType}
                fileUrl={lecture.fileUrl}
              />
            ))}
          </div>``
        </TabsContent>
      
        <TabsContent value="basics" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {basicLectures.map((lecture) => (
              <FileCard
                key={lecture.id}
                number={lecture.id}
                title={lecture.title}
                description={lecture.description}
                fileType={lecture.fileType}
                fileUrl={lecture.fileUrl}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="neural" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neuralLectures.map((lecture) => (
              <FileCard
                key={lecture.id}
                number={lecture.id}
                title={lecture.title}
                description={lecture.description}
                fileType={lecture.fileType}
                fileUrl={lecture.fileUrl}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="advanced" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedLectures.map((lecture) => (
              <FileCard
                key={lecture.id}
                number={lecture.id}
                title={lecture.title}
                description={lecture.description}
                fileType={lecture.fileType}
                fileUrl={lecture.fileUrl}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}