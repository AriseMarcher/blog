import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  {
    text: "前端",
    prefix: "/",
    children: [
      {
        text: "基础",
        prefix: "web/",
        children: [
          { text: "JavaScript", icon: "pen-to-square", link: "JavaScript/" },
          { text: "TypeScript", icon: "pen-to-square", link: "Ts/" },
          { text: "Css", icon: "pen-to-square", link: "Css/" },
        ],
      },
      {
        text: "框架",
        prefix: "frame/",
        children: [
          { text: "Vue", icon: "pen-to-square", link: "Vue/" },
          { text: "React", icon: "pen-to-square", link: "React/" },
        ],
      },
      {
        text: "打包",
        prefix: "pack/",
        children: [
          { text: "Gulp", icon: "pen-to-square", link: "Gulp/" },
          { text: "Rollup", icon: "pen-to-square", link: "Rollup/" },
        ],
      },
    ],
  },
  {
    text: "日记",
    link: "/diary/",
  }
]);
