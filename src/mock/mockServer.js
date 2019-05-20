import Mock from 'mockjs'
import category from './category'
import homeData from './homeData'
import categoryList from './categoryList'

Mock.mock('/mock/category',{
  code:0,
  data:category
})
Mock.mock('/mock/home',{
  code:0,
  data:homeData
})

Mock.mock('/mock/categoryList',{
  code:0,
  data:categoryList
})

console.log('mockserverOK')

