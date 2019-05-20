import Category from '../pages/Category/category'
import Home from '../pages/Home/home'
import Goshop from '../pages/GoShop/goshop'
import Konwthings from '../pages/KonwThings/konwthings'
import Personal from '../pages/Personal/personal'
import HomeNav from '../pages/Home/components/Nav/nav'


export default [
  {path: '/category', component: Category},
  {
    path: '/home',
    component: Home,
    children:[
      {path:'/home/nav',component:HomeNav}
    ],
    meta:{showFooter: true,showHeader:true}
  },
  {path: '/goshop', component: Goshop},
  {path: '/konwthings', component: Konwthings},
  {path: '/personal', component: Personal, meta:{showFooter: true}
  },
  {path:'/',redirect:'/home'}
]
