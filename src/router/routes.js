import Category from '../pages/Category/category'
import Home from '../pages/Home/home'
import Goshop from '../pages/GoShop/goshop'
import Konwthings from '../pages/KonwThings/konwthings'
import Personal from '../pages/Personal/personal'
import HomeNav from '../pages/Home/components/Nav/nav'
import Register from '../pages/Personal/components/Register/register'
import Login from '../pages/Personal/components/Login/login'
import PhoneLogin from '../pages/Personal/components/PhoneLogin/phonelogin'
import EmailLogin from '../pages/Personal/components/EmailLogin/emaillogin'
import Discover from '../pages/KonwThings/Discover/discover'
import Choose from '../pages/KonwThings/Choose/choose'
import  Selecttings from '../pages/Category/components/selecttings'
export default [
  {
    path: '/category',
    component: Category,
    meta: {showFooter: true},
    children:[
      {
        path:'/category/selecttings',
        component:Selecttings,
        meta: {showFooter: false,showHeader: false},
      }
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/nav',
        component: HomeNav
      }
    ],
    meta: {showFooter: true, showHeader: true}
  },
  {
    path: '/goshop',
    component: Goshop,
    meta: {showFooter: true}
  },
  {
    path: '/konwthings',
    component: Konwthings,
    meta: {showFooter: true},
    children:[
      {path:'/konwthings/discover',component:Discover,meta: {showFooter: true}},
      {path:'/konwthings/choose',component:Choose,meta: {showFooter: true}},
      {path:'/konwthings',redirect:'/konwthings/discover'}
      ]
  },
  {
    path: '/personal',
    component: Personal,
    children: [
      {path: '/personal/register', component: Register, meta: {personalNavShow: true}},
      {path: '/personal/login', component: Login, meta: {personalNavShow: true}},
      {path: '/personal/phonelogin', component: PhoneLogin, meta: {personalNavShow: true}},
      {path:'/personal/emaillogin',component:EmailLogin,meta:{personalNavShow:true}},
      {path: '/personal', redirect: '/personal/login'},
    ]
  },
  {path: '/', redirect: '/home'}
]
