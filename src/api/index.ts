/*
 * @Description:
 * @Author: wss
 * @Date: 2022-07-23 15:07:56
 * @LastEditTime: 2022-09-13 22:03:11
 * @LastEditors: wss
 */
import axios, { type AxiosInstance } from "axios";
interface RootObject {
  id: number;
  path: string;
}
const getImges = async () => {
  const { data } = await axios.get("http://localhost:4000/swiper");
  return data;
};
const getWebLog = async () => {
  const { data } = await axios.get("http://localhost:4000/weblog");
  return data.data;
};
const weblogLikeClick = (id: number) => {
  axios.get("http://localhost:4000/weblog/" + id);
};

export { getImges, getWebLog, weblogLikeClick };
