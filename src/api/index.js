import ajax from './ajax'

const BASE = './api'
const prefix = process.env.NODE_ENV === 'development' ? '/api' : 'http://m.you.163.com';
export const reqhomeData = () => ajax('/mock/home')
export const reqcategoryData = () => ajax('/mock/category')
export const reqRecommendData = () => ajax(`${prefix}/topic/v1/find/recManual.json`);

