import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    base: '/',
    routes: [{
        path: '/',
        redirect: '/index'
    }, {
        path: '/index',
        name: 'index',
        component: function (resolve) {
            return require(['@/views/Index'], resolve);
        }
    }, {
        path: '/here',
        name: 'here',
        component: function (resolve) {
            return require(['@/views/Here'], resolve);
        }
    }, {
        path: '/there',
        name: 'there',
        component: function (resolve) {
            return require(['@/views/There'], resolve);
        }
    }, {
        path: '/error',
        name: 'error',
        component: function (resolve) {
            return require(['@/views/Error'], resolve);
        }
    }, {
        path: '*',
        redirect: '/error'
    }]
});

/*router.beforeEach(function (to, from, next) {
    let isLogin = AuthUtil.auth();
    // console.log('--路由验证:', to.fullPath, to.meta.isnNeedAuth, isLogin);
    if (to.meta.isnNeedAuth && !isLogin) {
        // console.log('--路由验证不通过，请登录');
        let forwardUrl = to.fullPath ? to.fullPath : '/index';
        next({
            path: '/login',
            // replace: true,
            query: {
                redirect: forwardUrl
            }
        });
    } else {
        // console.log('--路由放行:', to.fullPath);
        next();
    }
});*/

export default router;
