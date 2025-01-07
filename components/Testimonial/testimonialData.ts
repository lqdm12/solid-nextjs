import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "João Luiz",
    designation: "Medicina UEA",
    image: image1,
    content:
      "Com as apostilas da Vunesp, consegui focar exatamente no que mais cai nas provas. Sem dúvidas, foi essencial para minha aprovação.",
  },
  {
    id: 2,
    name: "Ludmilla Santos",
    designation: "Direito UNESP",
    image: image2,
    content:
      "Estudar com as apostilas da Vunesp fez toda a diferença! Os exercícios e resumos me ajudaram a fixar o conteúdo e a ir mais confiante para o vestibular. Consegui minha vaga graças a esse material!",
  },
  {
    id: 3,
    name: "Lucas Vitoriano",
    designation: "Engenharia UEA",
    image: image1,
    content:
      "Consegui entender os assuntos mais complicados de maneira simples e prática. Estudei com foco, e o resultado foi a minha aprovação. Recomendo para todos que estão na jornada pelo vestibular.",
  },
  {
    id: 4,
    name: "Julia Almeida",
    designation: "Medicina FAMERP",
    image: image2,
    content:
      "O diferencial das apostilas da Vunesp está na organização do conteúdo. Senti que cada página foi feita para me ajudar a aprender mais rápido e com mais eficiência. Foi um divisor de águas nos meus estudos.",
  },
];
