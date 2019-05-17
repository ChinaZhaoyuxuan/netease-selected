import Mock from 'mockjs'
import category from './category'
import homeData from './homeData'
import categoryList from './categoryList'

Mock.mock('/category',{
  code:0,
  data:category
})
Mock.mock('/homeData',{
  code:0,
  data:homeData
})
Mock.mock('/categoryList',{
  code:0,
  data:categoryList
})

console.log('mockserver')

