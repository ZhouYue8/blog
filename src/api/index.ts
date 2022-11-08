/*
 * @Description:
 * @Author: wss
 * @Date: 2022-07-23 15:07:56
 * @LastEditTime: 2022-09-13 22:03:11
 * @LastEditors: wss
 */

import axios, { type AxiosInstance } from 'axios';
import NProgress from 'nprogress'
//全局进度条的配置
NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 1000, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 更改启动时使用的最小百分比
  parent: 'body', //指定进度条的父容器
})
const BASE_URL = 'http://localhost:4000';
interface RootObject {
  id: number;
  path: string;
}
const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 2000,
});
instance.interceptors.request.use((config) => {
  NProgress.start()
  return config;
});
instance.interceptors.response.use((response) => {
  NProgress.done()
  return response;
});
const getImges = async () => {
  const { data } = await instance.get(`${BASE_URL}/swiper`);
  return data;
};
const getWebLog = async () => {
  const { data } = await instance.get(`${BASE_URL}/weblog`);
  return data.data;
};
const weblogLikeClick = (id: number) => {
  instance.get(`${BASE_URL}/weblog/` + id);
};

export { getImges, getWebLog, weblogLikeClick, BASE_URL };
