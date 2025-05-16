import { Metadata } from "next";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Глоссарий | ML - Обучение машинному обучению",
  description: "Словарь терминов и определений по машинному обучению",
};

// Словарь терминов
const glossaryItems = [
  {
    term: "Машинное обучение",
    definition:
      "Раздел искусственного интеллекта, изучающий методы построения алгоритмов, способных обучаться на данных.",
    category: "basic",
  },
  {
    term: "AI Agent/ Интеллектуальный агент",
    definition:
      "Бот, используемый при решении задач искусственным интеллектом.",
    category: "basic",
  },
  {
    term: "Алгоритм",
    definition:
      "Конечная последовательность точно определённых действий, исполнение которых приводит к решению поставленной задачи.",
    category: "basic",
  },
  {
    term: "Artificial Intelligence (AI) / Искусственный интеллект (ИИ)",
    definition:
      "Искусственный интеллект (ИИ), по определению профессора Эндрю Мура, — это наука и технология разработки компьютеров, выполняющих функции, которые до недавнего времени считались прерогативой человеческого интеллекта.",
    category: "neural",
  },
  {
    term: "Autonomous / Автономный",
    definition:
      "Автономным называется устройство или инструмент, работающий без непосредственного управления человеком",
    category: "neural",
  },
  {
    term: "Сверточная нейронная сеть (CNN)",
    definition:
      "Специальная архитектура нейронных сетей, предложенная для эффективного распознавания изображений.",
    category: "neural",
  },
  {
    term: "Рекуррентная нейронная сеть (RNN)",
    definition:
      "Вид нейронных сетей, где связи между элементами образуют направленную последовательность, что позволяет обрабатывать последовательные данные.",
    category: "neural",
  },
  {
    term: "Градиентный спуск",
    definition:
      "Метод нахождения локального минимума функции с помощью движения вдоль градиента.",
    category: "method",
  },
  {
    term: "Переобучение",
    definition:
      "Явление, когда модель хорошо работает на обучающих данных, но плохо обобщает новые примеры.",
    category: "method",
  },
  {
    term: "Недообучение",
    definition:
      "Явление, когда модель не может уловить структуру данных и показывает плохие результаты как на тренировочных, так и на тестовых данных.",
    category: "method",
  },
  {
    term: "Функция потерь",
    definition:
      "Мера того, насколько прогноз модели отличается от фактического значения.",
    category: "method",
  },
  {
    term: "Метрика качества",
    definition:
      "Способ оценки эффективности модели машинного обучения на конкретной задаче.",
    category: "method",
  },
  {
    term: "Обучение с учителем",
    definition:
      "Тип машинного обучения, когда алгоритм обучается на размеченных данных.",
    category: "basic",
  },
  {
    term: "Обучение без учителя",
    definition:
      "Тип машинного обучения, когда алгоритм обучается на неразмеченных данных.",
    category: "basic",
  },
  {
    term: "Обучение с подкреплением",
    definition:
      "Область машинного обучения, где агент учится взаимодействовать с окружающей средой, получая вознаграждения за правильные действия.",
    category: "advanced",
  },
  {
    term: "Трансформер",
    definition:
      "Архитектура нейронной сети, основанная на механизме внимания, используемая для задач обработки естественного языка.",
    category: "advanced",
  },
  {
    term: "GPT (Generative Pre-trained Transformer)",
    definition:
      "Семейство языковых моделей, основанных на архитектуре трансформер, обученных генерировать текст, похожий на человеческий.",
    category: "advanced",
  },
  {
    term: "Эмбеддинги",
    definition:
      "Представление категориальных данных, таких как слова или предложения, в виде векторов в многомерном пространстве.",
    category: "advanced",
  },
  {
    term: "Тензор",
    definition:
      "Многомерный массив, обобщение матриц на произвольное число измерений.",
    category: "basic",
  },
  {
    term: "Gated Recurrent Unit (GRU)",
    definition:
      "Разновидность рекуррентных нейронных сетей, предназначенная для решения проблемы исчезающего градиента.",
    category: "neural",
  },
  {
    term: "Long Short-Term Memory (LSTM)",
    definition:
      "Особая разновидность архитектуры рекуррентных нейронных сетей, способная запоминать значения как на короткие, так и на длинные промежутки времени.",
    category: "neural",
  },
  {
    term: "Батч-нормализация",
    definition:
      "Метод, используемый для ускорения обучения нейронных сетей и повышения их стабильности путем нормализации входных данных каждого слоя.",
    category: "method",
  },
];

export default function GlossaryPage() {
  // Сортируем термины по алфавиту
  const sortedGlossary = [...glossaryItems].sort((a, b) =>
    a.term.localeCompare(b.term, "ru-RU")
  );

  // Фильтруем термины по категории
  // const filterGlossary = (category: string) => {
  //   return glossaryItems.filter((item) => item.category === category);
  // };
  
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-3xl text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Глоссарий</h1>
        <p className="text-muted-foreground text-lg">
          Словарь ключевых терминов и понятий в области машинного обучения и
          искусственного интеллекта
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            className="pl-10"
            placeholder="Найти термин..."
            id="search-glossary"
            // onChange={(e) => filterGlossary(e.target.value)}
          />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          В глоссарии содержится {glossaryItems.length} терминов и определений.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead className="w-1/3">Термин</TableHead>
              <TableHead>Определение</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedGlossary.map((item, index) => (
              <TableRow
                key={index}
                className="hover:bg-muted/30 transition-colors"
              >
                <TableCell className="font-medium">{item.term}</TableCell>
                <TableCell>{item.definition}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
