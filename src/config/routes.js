import App from '../App.vue'
import home from '../pages/index/index.vue'

// const home = r => require.ensure([], () => r(require('../pages/index/index.vue')), 'home') //考虑home为首页,因此不选择懒加载,否则会导致加载时间过长
const page = r => require.ensure([], () => r(require('../pages/page/index.vue')), 'page')
const NotFoundComponent = r => require.ensure([], () => r(require('../component/NotFoundComponent.vue')), 'page')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        {//地址为空时跳转内容首页，而不是App.vue
            path: '',
            redirect: '/home'
        },
        {//项目首页
            path: '/home',
            component: home
        },
        {//page页
            path: '/page',
            component: page
        },
        {//路径错误时转到404错误页
            path: '*', component: NotFoundComponent
        }
    ]
}]