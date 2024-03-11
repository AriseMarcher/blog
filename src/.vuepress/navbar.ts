import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  {
    text: "前端",
    icon: "pen-to-square",
    prefix: "/",
    children: [
      {
        text: "基础",
        icon: "pen-to-square",
        prefix: "web/",
        children: [
          { text: "JavaScript", icon: "pen-to-square", link: "JavaScript/" },
          { text: "Css", icon: "pen-to-square", link: "Css/" },
        ],
      },
      {
        text: "框架",
        icon: "pen-to-square",
        prefix: "frame/",
        children: [
          { text: "Vue", icon: "pen-to-square", link: "Vue/" },
          { text: "React", icon: "pen-to-square", link: "React/" },
        ],
      },
      {
        text: "打包",
        icon: "pen-to-square",
        prefix: "pack/",
        children: [
          { text: "Gulp", icon: "pen-to-square", link: "Gulp/" },
        ],
      },
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
