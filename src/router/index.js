// 引入vue
import Vue from 'vue'

import VueRouter from 'vue-router'
// 注册使用
Vue.use(VueRouter)
// // 底部的三个
import Box from '../box'
import Login from '../pages/login'
import Reg from '../pages/reg'
import PrivacyNumber from '../listpages/privacyNumber'
import Number from '../listpages/Number'
import VideoNumber from '../listpages/videoNumber'
import SmartNumber from '../listpages/smartNumber'
import Video from '../listpages/video'
import Ipcc from '../listpages/ipcc'
import Intelligent from '../listpages/intelligent'
import Iot from '../listpages/iot'
import AboutUs from '../listpages/aboutUs'
import Media from '../listpages/media'
import Company from '../listpages/company'
import Industry from '../listpages/industry'
import ConnectUs from '../listpages/connectUs'
import JoinUs from '../listpages/joinUs'
import Introduce from '../components/introduce'
import Advantage from '../components/advantage'
import Show from '../components/show'
import Resolve from '../components/resolve'
import Price from '../components/price'
import Abouts from '../listpages/aboutUs'
// 视频短信应用场景下边的tab切换
import BrandShow from '../videonumberTab/brandShow'
import Generalize from '../videonumberTab/generalize'
import Sell from '../videonumberTab/sell'
import ApplicationPromotion from '../videonumberTab/applicationPromotion'
import CustomerCare from '../videonumberTab/customerCare'
// IPCC下边的tab切换
import IPCC from '../ipccTab/ipccidea'
import ResolveIdea from '../ipccTab/resolve'
import Safe from '../ipccTab/safe'

// 隐私号下边的第一个tab切换
import CommonProblem from '../privacyTab/commonProblem'
import DetailInfo from '../privacyTab/detailInfo'
import Number1 from '../privacyTab/privacyNumber'
import Rules from '../privacyTab/rules'
import Start from '../privacyTab/start'
// 隐私号下边的第二个tab切换
import Car from '../privacyTab/car'
import Comp from '../privacyTab/company'
import Takeout from '../privacyTab/takeout'
import Middle from '../privacyTab/middle'

const router = new VueRouter({
  // mode: 'history',
  // base: __dirname,
  routes: [
    {
      // 首页
      path: '/homePage',
      name: 'home',
      component: Box,
      meta: {

        title: '中通网络'
      }
    },
    {
      // 跟组件路由
      path: '/login',
      name: 'login',
      component: Login,
    },
    // 跟组件路由
    {
      path: '/reg',
      name: 'reg',
      component: Reg,


    },
    {
      path: '/privacy',
      component: PrivacyNumber,
      children: [
        {
          path: 'privacyNumber',
          component: Car,
          meta: {

            title: '隐私号'
          }

        },
        {
          path: 'company',
          component: Comp,

        },
        {
          path: 'takeout',
          component: Takeout,

        },
        {
          path: 'middle',
          component: Middle,

        },
        {
          path: '/',
          redirect: to => {
            return '/privacy/privacyNumber'
          }
        }

      ]

    },
    {
      path: '/detailINfo',
      component: DetailInfo,

    },
    {
      path: '/rules',
      component: Rules,

    },
    {
      path: '/start',
      component: Start,
    },
    {
      path: '/commonProblem',
      component: CommonProblem,

    },
    {
      path: '/privacy',
      name: 'Number',
      component: Number,
      children: [
        {
          path: 'shortMessage',
          component: Introduce,
          meta: {

            title: '短信'
          }
        },
        {
          path: '/',
          redirect: to => {
            return '/privacy/shortMessage'
          }
        }

      ]

    },
    {
      path: '/privacy',
      name: 'videoNumber',
      component: VideoNumber,
      children: [
        {
          path: 'videoMessage',
          component: Generalize,
          meta: {

            title: '视频短信'
          }
        },
        {
          path: 'sell',
          component: Sell,

        },
        {
          path: 'applicationPromotion',
          component: ApplicationPromotion,

        },
        {
          path: 'customerCare',
          component: CustomerCare,

        },
        {
          path: 'brandShow',
          component: BrandShow,

        },
        {
          path: '/',
          redirect: to => {
            return '/videoNumber/generalize'
          }
        }

      ]

    },
    {
      path: '/privacy/SMS',
      name: 'smartNumber',
      component: SmartNumber,
      meta: {
        title: '5G短信'
      }
    },
    {
      path: '/solution/videoconFerencing',
      name: 'video',
      component: Video,
      meta: {
        title: '视频会议'
      }
    },
    {
      path: '/aboutUs',
      name: 'abouts',
      component: Abouts
    },
    {
      path: '/solution',
      name: 'ipcc',
      component: Ipcc,
      children: [

        {
          path: 'IPCC',
          component: ResolveIdea,
          meta: {
            title: 'IPCC'
          }
        },
        {
          path: 'ipccidea',
          component: IPCC,

        },
        {
          path: 'safe',
          component: Safe,

        },
        {
          path: '/',
          redirect: to => {
            return '/solution/IPCC'
          }
        }

      ]

    },
    {
      path: '/solution/intelligentPassage',
      name: 'intelligent',
      component: Intelligent,
      meta: {
        title: '智能通行'
      }
    },
    {
      path: '/',
      redirect: '/homePage'
    }

  ],




})


// router.beforeEach((to, from, next) => {
//   /* 路由发生变化修改页面title */
//   console.log(to,'hdshdjhsdh')
//   // if (to.meta.title) {
//   //   document.title = to.meta.title
//   // }
//   // next()
// })


router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = "https://www.sinocall.com/dist/index.html";
    return
  }
  next()
})
export default router
