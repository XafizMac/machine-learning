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
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%201.%20%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B2%20%D0%9C%D0%B0%D1%88%D0%B8%D0%BD%D0%BD%D0%BE%D0%B5%20%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5.pdf?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiBIfgJJ4aExGHnGlRtm4d5pOHK%2Be%2FCoRBFU4ubqk8OGuAIhAJFtRswyXKbDWRpk5HtRwFGozwU2deFkz6F4s9XxXEZ4KvkCCEAQABoMMzM2MzAwNTI1MzY3IgwA0Ekb3PGEBaCDO6Eq1gLpQERYmCMk%2Fpe%2FWqRGl1deNbO9V9A1X1%2BMn7ULNW49BTt%2Bks4QQbvxVHawxsie%2FrJN8KzloDZ%2F6SlP%2BI2ebAbcL9IXByHEj5jJhB5n38SxH0SlnV5cWI8X%2FW4n5HPs2MNynqU0ZjMLKjvfpNxhbZjdqG3OYH9NQ8amwEBBpY%2BQ3I9UjYtqL0%2FeanpBgzfMsWLoRW1xea56cw3jIgrclNMqks%2BeZGDEnsTtGgypjg5cHRdZt%2F4NHlm01jxfo4tAzoS5zM1r7cTzneVft8VVvjVJhxofz2uTpoMLmv78zqcJcYXrqil4Ky%2FtYBk8aXNQBf%2F2k%2FaAmKFIYGot7BNuUr1ti7nxQU8SZJ0oP2PvxVT%2BVOkLeYVSuhL2RxiE6paPVwf9n2flInmY4MEKNmw3Q%2Bl9xUxu90B%2FLDYLLUAGKyrZLCSXRAyJbWYQKS0318AhZyH5LE70gokwjqWbwQY6jwKH0WKMO%2BuH8qxaw37Gwqxz24tZeDCI6zTyMcJGbA71B5APjg%2B%2BFIzR2kJAl75zeumMCgWo2YvbRd6zL4CSfBUjLmqRIFib4HT0fyQ%2F4YoL6O%2FFhLYnzN2sMABjULPGTsp8ZP5uiJMr9wu0dKm1QA2OE6q4zx7aACB4Aoq2%2BUgGJFruwF36bI7KO162ANdm29K6xBUCxEQW7S0N%2BgltJ64FLgf2sBnhSnWVbAMM37nO%2BKDh%2FEUC1B04tSjQVXWHKpZ5LvJNrZNev%2BnCkl6XvTXMIn%2FhgwoSSaip1MfxYzIyEPxUxZANzIGX0Oa4yAoW9%2Bg%2FVe3Kq36m6S7rCPkkL0BLDsOQbUPh9yDQqNiP4Xfu&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAU4TISY43X76N4C53%2F20250516%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250516T070247Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=7eef9f56239acd6e6bb33359733d19e529aaab3bbacf0e13ad17e15619e925b0",
    category: "basics"
  },
  {
    id: 2,
    title: "Линейная регрессия",
    description: "Математические основы, градиентный спуск, оценка качества модели",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%202.%D0%9B%D0%B8%D0%BD%D0%B5%D0%B8%CC%86%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D0%B3%D1%80%D0%B5%D1%81%D1%81%D0%B8%D1%8F%2C%20%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%20%D0%BF%D0%BE%D1%82%D0%B5%D1%80%D1%8C.pdf?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiBIfgJJ4aExGHnGlRtm4d5pOHK%2Be%2FCoRBFU4ubqk8OGuAIhAJFtRswyXKbDWRpk5HtRwFGozwU2deFkz6F4s9XxXEZ4KvkCCEAQABoMMzM2MzAwNTI1MzY3IgwA0Ekb3PGEBaCDO6Eq1gLpQERYmCMk%2Fpe%2FWqRGl1deNbO9V9A1X1%2BMn7ULNW49BTt%2Bks4QQbvxVHawxsie%2FrJN8KzloDZ%2F6SlP%2BI2ebAbcL9IXByHEj5jJhB5n38SxH0SlnV5cWI8X%2FW4n5HPs2MNynqU0ZjMLKjvfpNxhbZjdqG3OYH9NQ8amwEBBpY%2BQ3I9UjYtqL0%2FeanpBgzfMsWLoRW1xea56cw3jIgrclNMqks%2BeZGDEnsTtGgypjg5cHRdZt%2F4NHlm01jxfo4tAzoS5zM1r7cTzneVft8VVvjVJhxofz2uTpoMLmv78zqcJcYXrqil4Ky%2FtYBk8aXNQBf%2F2k%2FaAmKFIYGot7BNuUr1ti7nxQU8SZJ0oP2PvxVT%2BVOkLeYVSuhL2RxiE6paPVwf9n2flInmY4MEKNmw3Q%2Bl9xUxu90B%2FLDYLLUAGKyrZLCSXRAyJbWYQKS0318AhZyH5LE70gokwjqWbwQY6jwKH0WKMO%2BuH8qxaw37Gwqxz24tZeDCI6zTyMcJGbA71B5APjg%2B%2BFIzR2kJAl75zeumMCgWo2YvbRd6zL4CSfBUjLmqRIFib4HT0fyQ%2F4YoL6O%2FFhLYnzN2sMABjULPGTsp8ZP5uiJMr9wu0dKm1QA2OE6q4zx7aACB4Aoq2%2BUgGJFruwF36bI7KO162ANdm29K6xBUCxEQW7S0N%2BgltJ64FLgf2sBnhSnWVbAMM37nO%2BKDh%2FEUC1B04tSjQVXWHKpZ5LvJNrZNev%2BnCkl6XvTXMIn%2FhgwoSSaip1MfxYzIyEPxUxZANzIGX0Oa4yAoW9%2Bg%2FVe3Kq36m6S7rCPkkL0BLDsOQbUPh9yDQqNiP4Xfu&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAU4TISY43X76N4C53%2F20250516%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250516T070338Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=29d2bcf72016f009f4fc807bde8063569c2daedc6af3665d40d5e199ffc8a9ba",
    category: "basics"
  },
  {
    id: 3,
    title: "Обобщающая способность, градиентные методы обучения",
    description: "Переобучение, Оценивание качества моделей, Обучение линейной регрессии",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%203%20%D0%9E%D0%B1%D0%BE%D0%B1%D1%89%D0%B0%D1%8E%D1%89%D0%B0%D1%8F%20%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%BD%D0%BE%D1%81%D1%82%D1%8C%2C%20%D0%B3%D1%80%D0%B0%D0%B4%D0%B8%D0%B5%D0%BD%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%8B%20%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAU4TISY43WQQXGTMG%2F20250516%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250516T061455Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEAuwvoog1YtQggPI9dkGsZJFjw7oKkkjsdY4H7H%2B5hI00CIQDqLtUndPlC8%2BGU3vxwJck6QnRi1opZOh3fu4s1CqT0ziqZAgg%2FEAAaDDMzNjMwMDUyNTM2NyIM0ifWgkXCkj0fbx3aKvYBeHdZJbZrbstidoRBplh3JhUdcj7F1PSoXg%2Fqs1mizor68dPcmJuoRcUkV8WfYnan2YESK4j6pzFIm5vcMzFohK7RwPZS1xDPHWMiPRGwamApOG6NXB2AeCqR2WBuLT8pmEUEkUCKqIZhQdjoqWkHReLvfYLHkNO4zdYMO%2Frc0gReYsif9nSfuSHP70o8I1bS%2BKC0b8jhJnQuDGKwzea4YXX0iVj6vakLAHeozT7wkO3Q5PADwjeNTg2LBArJaOvsdNyUIDPBW3NHWQm8UhmiyFFdST8pIMOGZifM2we7airZ3L5JiAZlwCUx%2F6CMCt%2FdM7toJA%2BuMI6lm8EGOt4ByJLbujmeLM4ssX%2FnySlJ5qvaDA%2BsFj7ZHpMlSXtfGImRLMHlFjTQOaMLLzBXU0nqQeOQoPvE1nUdU7xkwf2c%2Fo3SIvd27vM5ToP8YI06qNaEFVOgM1eBFuWApgwsnVK4t1dKBDJiEieN9voXpHtaW4GVVYOQl0xv4bcCUq%2BQHjmOtGkorTKbCzpf00rpbHkvMLhRTUywL7a0CeaQjU3YtNXZlecZtM%2BHjGDJAKBqqGnhX0SLSn%2FOQXBspGgC1XcRv%2Bd59p3jg3mrt5ntCyxDMV1upsmluQDjx1IwX6r0&X-Amz-Signature=0bdbfd4392f9e692481fd31cd477253c9bc56c4c3e8f8e7accbeaffeafc10545&X-Amz-SignedHeaders=host&response-content-disposition=inline",
    category: "basics"
  },
  {
    id: 4,
    title: "Градиен методы.",
    description: "Регуляризация, гиперпараметры, разреженные модели",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%204.%20%D0%93%D1%80%D0%B0%D0%B4%D0%B8%D0%B5%D0%BD%20%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%8B.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAU4TISY43WQQXGTMG%2F20250516%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250516T061621Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEAuwvoog1YtQggPI9dkGsZJFjw7oKkkjsdY4H7H%2B5hI00CIQDqLtUndPlC8%2BGU3vxwJck6QnRi1opZOh3fu4s1CqT0ziqZAgg%2FEAAaDDMzNjMwMDUyNTM2NyIM0ifWgkXCkj0fbx3aKvYBeHdZJbZrbstidoRBplh3JhUdcj7F1PSoXg%2Fqs1mizor68dPcmJuoRcUkV8WfYnan2YESK4j6pzFIm5vcMzFohK7RwPZS1xDPHWMiPRGwamApOG6NXB2AeCqR2WBuLT8pmEUEkUCKqIZhQdjoqWkHReLvfYLHkNO4zdYMO%2Frc0gReYsif9nSfuSHP70o8I1bS%2BKC0b8jhJnQuDGKwzea4YXX0iVj6vakLAHeozT7wkO3Q5PADwjeNTg2LBArJaOvsdNyUIDPBW3NHWQm8UhmiyFFdST8pIMOGZifM2we7airZ3L5JiAZlwCUx%2F6CMCt%2FdM7toJA%2BuMI6lm8EGOt4ByJLbujmeLM4ssX%2FnySlJ5qvaDA%2BsFj7ZHpMlSXtfGImRLMHlFjTQOaMLLzBXU0nqQeOQoPvE1nUdU7xkwf2c%2Fo3SIvd27vM5ToP8YI06qNaEFVOgM1eBFuWApgwsnVK4t1dKBDJiEieN9voXpHtaW4GVVYOQl0xv4bcCUq%2BQHjmOtGkorTKbCzpf00rpbHkvMLhRTUywL7a0CeaQjU3YtNXZlecZtM%2BHjGDJAKBqqGnhX0SLSn%2FOQXBspGgC1XcRv%2Bd59p3jg3mrt5ntCyxDMV1upsmluQDjx1IwX6r0&X-Amz-Signature=49f9a63949aaef7b0c32bb76160496324e54050bbe08ff050affbfe3e3b41b6b&X-Amz-SignedHeaders=host&response-content-disposition=inline", 
    category: "basics"
  },
  {
    id: 5,
    title: "Линейная классификация",
    description: "Логистическая регрессия, SVM, Softmax, KNN",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%205.%20%D0%9B%D0%B8%D0%BD%D0%B5%D0%B8%CC%86%D0%BD%20%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAU4TISY43WQQXGTMG%2F20250516%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250516T061736Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEAuwvoog1YtQggPI9dkGsZJFjw7oKkkjsdY4H7H%2B5hI00CIQDqLtUndPlC8%2BGU3vxwJck6QnRi1opZOh3fu4s1CqT0ziqZAgg%2FEAAaDDMzNjMwMDUyNTM2NyIM0ifWgkXCkj0fbx3aKvYBeHdZJbZrbstidoRBplh3JhUdcj7F1PSoXg%2Fqs1mizor68dPcmJuoRcUkV8WfYnan2YESK4j6pzFIm5vcMzFohK7RwPZS1xDPHWMiPRGwamApOG6NXB2AeCqR2WBuLT8pmEUEkUCKqIZhQdjoqWkHReLvfYLHkNO4zdYMO%2Frc0gReYsif9nSfuSHP70o8I1bS%2BKC0b8jhJnQuDGKwzea4YXX0iVj6vakLAHeozT7wkO3Q5PADwjeNTg2LBArJaOvsdNyUIDPBW3NHWQm8UhmiyFFdST8pIMOGZifM2we7airZ3L5JiAZlwCUx%2F6CMCt%2FdM7toJA%2BuMI6lm8EGOt4ByJLbujmeLM4ssX%2FnySlJ5qvaDA%2BsFj7ZHpMlSXtfGImRLMHlFjTQOaMLLzBXU0nqQeOQoPvE1nUdU7xkwf2c%2Fo3SIvd27vM5ToP8YI06qNaEFVOgM1eBFuWApgwsnVK4t1dKBDJiEieN9voXpHtaW4GVVYOQl0xv4bcCUq%2BQHjmOtGkorTKbCzpf00rpbHkvMLhRTUywL7a0CeaQjU3YtNXZlecZtM%2BHjGDJAKBqqGnhX0SLSn%2FOQXBspGgC1XcRv%2Bd59p3jg3mrt5ntCyxDMV1upsmluQDjx1IwX6r0&X-Amz-Signature=3e118f8145ffc717f156a282aeebfa57bc42cca1c43745ed5b665869b7af1ef7&X-Amz-SignedHeaders=host&response-content-disposition=inline",
    category: "neural"
  },
  {
    id: 6,
    title: "Логистическая регрессия",
    description: "Архитектура CNN, свертки, пулинг и применение в компьютерном зрении",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%206.%20%D0%9B%D0%BE%D0%B3%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F%20%D1%80%D0%B5%D0%B3%D1%80%D0%B5%D1%81%D1%81%D0%B8%D1%8F.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAU4TISY433TONS2NV%2F20250516%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250516T061856Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiAi1ddwGSuX5wyxdv%2Fnzpml1q0YJdE3M3ReTY4cvAwGoAIhAMSYFbfKUgc5iq%2Bvj05pZJvQtgrFHbFfxCwOttCEvRThKpkCCD8QABoMMzM2MzAwNTI1MzY3Igy654UyXs3HUEVsv%2FYq9gE0mAX9uQZdXK4ngu4FOosn1o0cQLEe5EgXHv76P7GTgGxG14laADAC%2Fspfp2eWksgK5vTfU41p3jUviyUyEJJEdR1XRKj5cNpbdNwqYjUImuQI%2Fv%2FD%2FFSPr4MdQ51Ml%2FP3FWddKgwJXjMohx80mqFyD3kkM8nXCRfxoRMg4xMoCCHCUGaCPbQ%2BHj9NmRGi3SjxE%2FHnwhaPIEvA4S8Z8blTIvj7KNHZcrdZHdxeKbr4E6co1XheXl8EG31xuNX9URiY54DhK5Yxse2cxVtChVL3rsu4llChVHqZ%2BCtzvSemRGWxWn5OUNK1XZ%2BMt8v%2BoUewhYB3nBswjqWbwQY63wGpGhvNSIVrB0YbnOHOMuGCJST6QLVNc7BIrNnEKK%2F1UK3C93fVYBNP2C4xeXyaNIahVc9GhQjV1GeOpOI7o%2FMnQwHMypwnEWVoo0XeA5YQyej%2FOMGYSoZCGD44u1X9tNhBag2iSNUjYMr4iMTuT0gJPbHNjDH618FqQWrjNs1PZpArlnA8VCxGeWQGTZUvFI2XH9GxVeFXeQ%2Bu7oU7f3gAPIpJgkJcxhXjc61j4DdHmORw4LMfKgJzw6hZ4XZ9HIlEcILe3LXlEz7dUkRClOZDRgVeSb0e9RE60MaJMVhN&X-Amz-Signature=972659498a3ef0331001f93ab0e55cfff41ad50cbbb57b395ecb415bd1f4b85e&X-Amz-SignedHeaders=host&response-content-disposition=inline",
    category: "neural"
  },
  {
    id: 7,
    title: "Полиномиальная регрессия",
    description: "Полиномиальная регрессия, регуляризация, переобучение и недообучение",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%207.%20%D0%9F%D0%BE%D0%BB%D0%B8%D0%BD%D0%BE%D0%BC%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D0%B3%D1%80%D0%B5%D1%81%D1%81%D0%B8%D1%8F..pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAU4TISY433TONS2NV%2F20250516%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250516T061947Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiAi1ddwGSuX5wyxdv%2Fnzpml1q0YJdE3M3ReTY4cvAwGoAIhAMSYFbfKUgc5iq%2Bvj05pZJvQtgrFHbFfxCwOttCEvRThKpkCCD8QABoMMzM2MzAwNTI1MzY3Igy654UyXs3HUEVsv%2FYq9gE0mAX9uQZdXK4ngu4FOosn1o0cQLEe5EgXHv76P7GTgGxG14laADAC%2Fspfp2eWksgK5vTfU41p3jUviyUyEJJEdR1XRKj5cNpbdNwqYjUImuQI%2Fv%2FD%2FFSPr4MdQ51Ml%2FP3FWddKgwJXjMohx80mqFyD3kkM8nXCRfxoRMg4xMoCCHCUGaCPbQ%2BHj9NmRGi3SjxE%2FHnwhaPIEvA4S8Z8blTIvj7KNHZcrdZHdxeKbr4E6co1XheXl8EG31xuNX9URiY54DhK5Yxse2cxVtChVL3rsu4llChVHqZ%2BCtzvSemRGWxWn5OUNK1XZ%2BMt8v%2BoUewhYB3nBswjqWbwQY63wGpGhvNSIVrB0YbnOHOMuGCJST6QLVNc7BIrNnEKK%2F1UK3C93fVYBNP2C4xeXyaNIahVc9GhQjV1GeOpOI7o%2FMnQwHMypwnEWVoo0XeA5YQyej%2FOMGYSoZCGD44u1X9tNhBag2iSNUjYMr4iMTuT0gJPbHNjDH618FqQWrjNs1PZpArlnA8VCxGeWQGTZUvFI2XH9GxVeFXeQ%2Bu7oU7f3gAPIpJgkJcxhXjc61j4DdHmORw4LMfKgJzw6hZ4XZ9HIlEcILe3LXlEz7dUkRClOZDRgVeSb0e9RE60MaJMVhN&X-Amz-Signature=77bbcb314129944253142d45a7ef5b6595a48fb0612527847009b13720db1c67&X-Amz-SignedHeaders=host&response-content-disposition=inline",
    category: "neural"
  },
  {
    id: 8,
    title: "Многоклассовая классификация",
    description: "Softmax, SVM, KNN, многоклассовая логистическая регрессия",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%208.%20%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAU4TISY433TONS2NV%2F20250516%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250516T062054Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiAi1ddwGSuX5wyxdv%2Fnzpml1q0YJdE3M3ReTY4cvAwGoAIhAMSYFbfKUgc5iq%2Bvj05pZJvQtgrFHbFfxCwOttCEvRThKpkCCD8QABoMMzM2MzAwNTI1MzY3Igy654UyXs3HUEVsv%2FYq9gE0mAX9uQZdXK4ngu4FOosn1o0cQLEe5EgXHv76P7GTgGxG14laADAC%2Fspfp2eWksgK5vTfU41p3jUviyUyEJJEdR1XRKj5cNpbdNwqYjUImuQI%2Fv%2FD%2FFSPr4MdQ51Ml%2FP3FWddKgwJXjMohx80mqFyD3kkM8nXCRfxoRMg4xMoCCHCUGaCPbQ%2BHj9NmRGi3SjxE%2FHnwhaPIEvA4S8Z8blTIvj7KNHZcrdZHdxeKbr4E6co1XheXl8EG31xuNX9URiY54DhK5Yxse2cxVtChVL3rsu4llChVHqZ%2BCtzvSemRGWxWn5OUNK1XZ%2BMt8v%2BoUewhYB3nBswjqWbwQY63wGpGhvNSIVrB0YbnOHOMuGCJST6QLVNc7BIrNnEKK%2F1UK3C93fVYBNP2C4xeXyaNIahVc9GhQjV1GeOpOI7o%2FMnQwHMypwnEWVoo0XeA5YQyej%2FOMGYSoZCGD44u1X9tNhBag2iSNUjYMr4iMTuT0gJPbHNjDH618FqQWrjNs1PZpArlnA8VCxGeWQGTZUvFI2XH9GxVeFXeQ%2Bu7oU7f3gAPIpJgkJcxhXjc61j4DdHmORw4LMfKgJzw6hZ4XZ9HIlEcILe3LXlEz7dUkRClOZDRgVeSb0e9RE60MaJMVhN&X-Amz-Signature=bfd622371d637eb0297dd1555dafcb6e4a4d148571137e4928dd84af339ab121&X-Amz-SignedHeaders=host&response-content-disposition=inline",
    category: "neural"
  },
  {
    id: 9,
    title: "Решающие деревья",
    description: "Определение решающего дерева, Построение деревьев, Критерии информативности",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%209.%20%20%D0%A0%D0%B5%D1%88%D0%B0%D1%8E%D1%89%D0%B8%D0%B5%20%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D1%8F.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAU4TISY433TONS2NV%2F20250516%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250516T062131Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiAi1ddwGSuX5wyxdv%2Fnzpml1q0YJdE3M3ReTY4cvAwGoAIhAMSYFbfKUgc5iq%2Bvj05pZJvQtgrFHbFfxCwOttCEvRThKpkCCD8QABoMMzM2MzAwNTI1MzY3Igy654UyXs3HUEVsv%2FYq9gE0mAX9uQZdXK4ngu4FOosn1o0cQLEe5EgXHv76P7GTgGxG14laADAC%2Fspfp2eWksgK5vTfU41p3jUviyUyEJJEdR1XRKj5cNpbdNwqYjUImuQI%2Fv%2FD%2FFSPr4MdQ51Ml%2FP3FWddKgwJXjMohx80mqFyD3kkM8nXCRfxoRMg4xMoCCHCUGaCPbQ%2BHj9NmRGi3SjxE%2FHnwhaPIEvA4S8Z8blTIvj7KNHZcrdZHdxeKbr4E6co1XheXl8EG31xuNX9URiY54DhK5Yxse2cxVtChVL3rsu4llChVHqZ%2BCtzvSemRGWxWn5OUNK1XZ%2BMt8v%2BoUewhYB3nBswjqWbwQY63wGpGhvNSIVrB0YbnOHOMuGCJST6QLVNc7BIrNnEKK%2F1UK3C93fVYBNP2C4xeXyaNIahVc9GhQjV1GeOpOI7o%2FMnQwHMypwnEWVoo0XeA5YQyej%2FOMGYSoZCGD44u1X9tNhBag2iSNUjYMr4iMTuT0gJPbHNjDH618FqQWrjNs1PZpArlnA8VCxGeWQGTZUvFI2XH9GxVeFXeQ%2Bu7oU7f3gAPIpJgkJcxhXjc61j4DdHmORw4LMfKgJzw6hZ4XZ9HIlEcILe3LXlEz7dUkRClOZDRgVeSb0e9RE60MaJMVhN&X-Amz-Signature=a778eb6aa41cd892ed252eaa00bf6002dbeaf9162a8058891a009d209de154d5&X-Amz-SignedHeaders=host&response-content-disposition=inline",
    category: "advanced"
  },
  {
    id: 10,
    title: "Бэггинг, случайные леса",
    description: "Бутстрап,  Bias-Variance decomposition, Минимум среднеквадратичного ри",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%2010%20.%D0%91%D1%8D%D0%B3%D0%B3%D0%B8%D0%BD%D0%B3%2C%20%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B8%CC%86%D0%BD%D1%8B%D0%B5%20%D0%BB%D0%B5%D1%81%D0%B0.pdf?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiBIfgJJ4aExGHnGlRtm4d5pOHK%2Be%2FCoRBFU4ubqk8OGuAIhAJFtRswyXKbDWRpk5HtRwFGozwU2deFkz6F4s9XxXEZ4KvkCCEAQABoMMzM2MzAwNTI1MzY3IgwA0Ekb3PGEBaCDO6Eq1gLpQERYmCMk%2Fpe%2FWqRGl1deNbO9V9A1X1%2BMn7ULNW49BTt%2Bks4QQbvxVHawxsie%2FrJN8KzloDZ%2F6SlP%2BI2ebAbcL9IXByHEj5jJhB5n38SxH0SlnV5cWI8X%2FW4n5HPs2MNynqU0ZjMLKjvfpNxhbZjdqG3OYH9NQ8amwEBBpY%2BQ3I9UjYtqL0%2FeanpBgzfMsWLoRW1xea56cw3jIgrclNMqks%2BeZGDEnsTtGgypjg5cHRdZt%2F4NHlm01jxfo4tAzoS5zM1r7cTzneVft8VVvjVJhxofz2uTpoMLmv78zqcJcYXrqil4Ky%2FtYBk8aXNQBf%2F2k%2FaAmKFIYGot7BNuUr1ti7nxQU8SZJ0oP2PvxVT%2BVOkLeYVSuhL2RxiE6paPVwf9n2flInmY4MEKNmw3Q%2Bl9xUxu90B%2FLDYLLUAGKyrZLCSXRAyJbWYQKS0318AhZyH5LE70gokwjqWbwQY6jwKH0WKMO%2BuH8qxaw37Gwqxz24tZeDCI6zTyMcJGbA71B5APjg%2B%2BFIzR2kJAl75zeumMCgWo2YvbRd6zL4CSfBUjLmqRIFib4HT0fyQ%2F4YoL6O%2FFhLYnzN2sMABjULPGTsp8ZP5uiJMr9wu0dKm1QA2OE6q4zx7aACB4Aoq2%2BUgGJFruwF36bI7KO162ANdm29K6xBUCxEQW7S0N%2BgltJ64FLgf2sBnhSnWVbAMM37nO%2BKDh%2FEUC1B04tSjQVXWHKpZ5LvJNrZNev%2BnCkl6XvTXMIn%2FhgwoSSaip1MfxYzIyEPxUxZANzIGX0Oa4yAoW9%2Bg%2FVe3Kq36m6S7rCPkkL0BLDsOQbUPh9yDQqNiP4Xfu&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAU4TISY43X76N4C53%2F20250516%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250516T070305Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=81d209c97cf65461d40fc22d9d4012265eaa763c1628bf5e3830b1cd4c1b65c3",
    category: "advanced"
  },
  {
    id: 11,
    title: "Градиентный бустинг",
    description: "Бустинг в задаче регрессии, Градиентный бустинг",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%2011.%20%D0%93%D1%80%D0%B0%D0%B4%D0%B8%D0%B5%D0%BD%D1%82%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B1%D1%83%D1%81%D1%82%D0%B8%D0%BD%D0%B3.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAU4TISY433TONS2NV%2F20250516%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250516T062343Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiAi1ddwGSuX5wyxdv%2Fnzpml1q0YJdE3M3ReTY4cvAwGoAIhAMSYFbfKUgc5iq%2Bvj05pZJvQtgrFHbFfxCwOttCEvRThKpkCCD8QABoMMzM2MzAwNTI1MzY3Igy654UyXs3HUEVsv%2FYq9gE0mAX9uQZdXK4ngu4FOosn1o0cQLEe5EgXHv76P7GTgGxG14laADAC%2Fspfp2eWksgK5vTfU41p3jUviyUyEJJEdR1XRKj5cNpbdNwqYjUImuQI%2Fv%2FD%2FFSPr4MdQ51Ml%2FP3FWddKgwJXjMohx80mqFyD3kkM8nXCRfxoRMg4xMoCCHCUGaCPbQ%2BHj9NmRGi3SjxE%2FHnwhaPIEvA4S8Z8blTIvj7KNHZcrdZHdxeKbr4E6co1XheXl8EG31xuNX9URiY54DhK5Yxse2cxVtChVL3rsu4llChVHqZ%2BCtzvSemRGWxWn5OUNK1XZ%2BMt8v%2BoUewhYB3nBswjqWbwQY63wGpGhvNSIVrB0YbnOHOMuGCJST6QLVNc7BIrNnEKK%2F1UK3C93fVYBNP2C4xeXyaNIahVc9GhQjV1GeOpOI7o%2FMnQwHMypwnEWVoo0XeA5YQyej%2FOMGYSoZCGD44u1X9tNhBag2iSNUjYMr4iMTuT0gJPbHNjDH618FqQWrjNs1PZpArlnA8VCxGeWQGTZUvFI2XH9GxVeFXeQ%2Bu7oU7f3gAPIpJgkJcxhXjc61j4DdHmORw4LMfKgJzw6hZ4XZ9HIlEcILe3LXlEz7dUkRClOZDRgVeSb0e9RE60MaJMVhN&X-Amz-Signature=2e68194e310d774aa684abdabbb87eae48d87bd1628e5af77839a714eb9a7d12&X-Amz-SignedHeaders=host&response-content-disposition=inline",
    category: "advanced"
  },
  {
    id: 12,
    title: "Градиентный бустинг",
    description: "Бустинг в задаче регрессии, Градиентный бустинг",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%2012.%20%D0%93%D1%80%D0%B0%D0%B4%D0%B8%D0%B5%D0%BD%D1%82%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B1%D1%83%D1%81%D1%82%D0%B8%D0%BD%D0%B3.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAU4TISY433TONS2NV%2F20250516%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250516T062444Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiAi1ddwGSuX5wyxdv%2Fnzpml1q0YJdE3M3ReTY4cvAwGoAIhAMSYFbfKUgc5iq%2Bvj05pZJvQtgrFHbFfxCwOttCEvRThKpkCCD8QABoMMzM2MzAwNTI1MzY3Igy654UyXs3HUEVsv%2FYq9gE0mAX9uQZdXK4ngu4FOosn1o0cQLEe5EgXHv76P7GTgGxG14laADAC%2Fspfp2eWksgK5vTfU41p3jUviyUyEJJEdR1XRKj5cNpbdNwqYjUImuQI%2Fv%2FD%2FFSPr4MdQ51Ml%2FP3FWddKgwJXjMohx80mqFyD3kkM8nXCRfxoRMg4xMoCCHCUGaCPbQ%2BHj9NmRGi3SjxE%2FHnwhaPIEvA4S8Z8blTIvj7KNHZcrdZHdxeKbr4E6co1XheXl8EG31xuNX9URiY54DhK5Yxse2cxVtChVL3rsu4llChVHqZ%2BCtzvSemRGWxWn5OUNK1XZ%2BMt8v%2BoUewhYB3nBswjqWbwQY63wGpGhvNSIVrB0YbnOHOMuGCJST6QLVNc7BIrNnEKK%2F1UK3C93fVYBNP2C4xeXyaNIahVc9GhQjV1GeOpOI7o%2FMnQwHMypwnEWVoo0XeA5YQyej%2FOMGYSoZCGD44u1X9tNhBag2iSNUjYMr4iMTuT0gJPbHNjDH618FqQWrjNs1PZpArlnA8VCxGeWQGTZUvFI2XH9GxVeFXeQ%2Bu7oU7f3gAPIpJgkJcxhXjc61j4DdHmORw4LMfKgJzw6hZ4XZ9HIlEcILe3LXlEz7dUkRClOZDRgVeSb0e9RE60MaJMVhN&X-Amz-Signature=bf13aae8616a54c65f754eee0554e22f890f1fbc1d054e64f090669ec66e495e&X-Amz-SignedHeaders=host&response-content-disposition=inline",
    category: "advanced"
  },
  {
    id: 13,
    title: "Бустинг и случайные леса",
    description: "Линейные композиции, бустинг и случайные леса",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%2013.%20%D0%B1%D1%83%D1%81%D1%82%D0%B8%D0%BD%D0%B3%20%D0%B8%20%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B8%CC%86%D0%BD%D1%8B%D0%B5%20%D0%BB%D0%B5%D1%81%D0%B0..pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAU4TISY433TONS2NV%2F20250516%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250516T062551Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiAi1ddwGSuX5wyxdv%2Fnzpml1q0YJdE3M3ReTY4cvAwGoAIhAMSYFbfKUgc5iq%2Bvj05pZJvQtgrFHbFfxCwOttCEvRThKpkCCD8QABoMMzM2MzAwNTI1MzY3Igy654UyXs3HUEVsv%2FYq9gE0mAX9uQZdXK4ngu4FOosn1o0cQLEe5EgXHv76P7GTgGxG14laADAC%2Fspfp2eWksgK5vTfU41p3jUviyUyEJJEdR1XRKj5cNpbdNwqYjUImuQI%2Fv%2FD%2FFSPr4MdQ51Ml%2FP3FWddKgwJXjMohx80mqFyD3kkM8nXCRfxoRMg4xMoCCHCUGaCPbQ%2BHj9NmRGi3SjxE%2FHnwhaPIEvA4S8Z8blTIvj7KNHZcrdZHdxeKbr4E6co1XheXl8EG31xuNX9URiY54DhK5Yxse2cxVtChVL3rsu4llChVHqZ%2BCtzvSemRGWxWn5OUNK1XZ%2BMt8v%2BoUewhYB3nBswjqWbwQY63wGpGhvNSIVrB0YbnOHOMuGCJST6QLVNc7BIrNnEKK%2F1UK3C93fVYBNP2C4xeXyaNIahVc9GhQjV1GeOpOI7o%2FMnQwHMypwnEWVoo0XeA5YQyej%2FOMGYSoZCGD44u1X9tNhBag2iSNUjYMr4iMTuT0gJPbHNjDH618FqQWrjNs1PZpArlnA8VCxGeWQGTZUvFI2XH9GxVeFXeQ%2Bu7oU7f3gAPIpJgkJcxhXjc61j4DdHmORw4LMfKgJzw6hZ4XZ9HIlEcILe3LXlEz7dUkRClOZDRgVeSb0e9RE60MaJMVhN&X-Amz-Signature=d2a75531d28c85e62847d9acd4df5a45447903f85096ced2661fe68abd18915a&X-Amz-SignedHeaders=host&response-content-disposition=inline",
    category: "advanced"
  },
  {
    id: 14,
    title: "Класстеризация . Обучение без учителя",
    description: "Кластеризация, Метрики качества кластеризации, Алгоритм k-means",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%2014.%20%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D1%82%D0%B5%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F%20.%20%D0%9E%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B1%D0%B5%D0%B7%20%D1%83%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8F.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAU4TISY433TONS2NV%2F20250516%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250516T062657Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiAi1ddwGSuX5wyxdv%2Fnzpml1q0YJdE3M3ReTY4cvAwGoAIhAMSYFbfKUgc5iq%2Bvj05pZJvQtgrFHbFfxCwOttCEvRThKpkCCD8QABoMMzM2MzAwNTI1MzY3Igy654UyXs3HUEVsv%2FYq9gE0mAX9uQZdXK4ngu4FOosn1o0cQLEe5EgXHv76P7GTgGxG14laADAC%2Fspfp2eWksgK5vTfU41p3jUviyUyEJJEdR1XRKj5cNpbdNwqYjUImuQI%2Fv%2FD%2FFSPr4MdQ51Ml%2FP3FWddKgwJXjMohx80mqFyD3kkM8nXCRfxoRMg4xMoCCHCUGaCPbQ%2BHj9NmRGi3SjxE%2FHnwhaPIEvA4S8Z8blTIvj7KNHZcrdZHdxeKbr4E6co1XheXl8EG31xuNX9URiY54DhK5Yxse2cxVtChVL3rsu4llChVHqZ%2BCtzvSemRGWxWn5OUNK1XZ%2BMt8v%2BoUewhYB3nBswjqWbwQY63wGpGhvNSIVrB0YbnOHOMuGCJST6QLVNc7BIrNnEKK%2F1UK3C93fVYBNP2C4xeXyaNIahVc9GhQjV1GeOpOI7o%2FMnQwHMypwnEWVoo0XeA5YQyej%2FOMGYSoZCGD44u1X9tNhBag2iSNUjYMr4iMTuT0gJPbHNjDH618FqQWrjNs1PZpArlnA8VCxGeWQGTZUvFI2XH9GxVeFXeQ%2Bu7oU7f3gAPIpJgkJcxhXjc61j4DdHmORw4LMfKgJzw6hZ4XZ9HIlEcILe3LXlEz7dUkRClOZDRgVeSb0e9RE60MaJMVhN&X-Amz-Signature=d132b8bd8fcca13abec71ec02b3ddec487e650b903233f3d150f7b9f668556a5&X-Amz-SignedHeaders=host&response-content-disposition=inline",
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
          </div>
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