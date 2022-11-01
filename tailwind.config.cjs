/*
 * @Author: Weiss0828 1848680690@qq.com
 * @Date: 2022-07-23 15:10:43
 * @LastEditors: Weiss0828 1848680690@qq.com
 * @LastEditTime: 2022-07-23 20:17:34
 * @FilePath: \blog\tailwind.config.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'),],
  darkMode: "class",
};
