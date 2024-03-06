import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "御神",
  description: "世事如落花 心境自空明",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
