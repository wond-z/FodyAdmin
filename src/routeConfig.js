import loadable from './utils/loadable';

const routeConfig = [
    {
        path: '/',
		name: '首页',
		icon: 'plus-square-o',
        component: loadable(() => import('./pages/home'))
	}, {
		path: '/userManagement',
		name: '用户管理',
		icon: 'user-o',
        children: [
            {
                path: '/userManagement/management',
        		name: '管理用户',
        		icon: 'user-o',
                component: loadable(() => import('./pages/userManagement'))
            }, {
                path: '/userManagement/auth',
        		name: '权限管理',
        		icon: 'user-o',
                component: loadable(() => import('./pages/auth'))
            }
        ]
	}, {
        path: '/about',
		name: '关于',
		icon: 'minus-square-o',
        component: loadable(() => import('./pages/about'))
	}
];

export default routeConfig;
