import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Início",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Apostilas",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },
  {
    id: 2.3,
    title: "Preços",
    newTab: false,
    path: "/pricing",
  },
  {
    id: 3,
    title: "Páginas",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Blog Grid",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Entrar",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Criar conta",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Suporte",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },

  {
    id: 4,
    title: "Suporte",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
