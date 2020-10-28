import loadable from './utils/loadable';

const routeConfig = [
    {
        path: '/',
		name: '概览',
		icon: 'plus-square-o',
        component: loadable(() => import('./pages/Home'))
	}, {
		path: '/userManagement',
		name: '用户管理',
		icon: 'user-o',
        children: [
            {
                path: '/userManagement/management',
        		name: '管理用户',
        		icon: 'user-o',
                component: loadable(() => import('./pages/UserManagement'))
            }, {
                path: '/userManagement/auth',
        		name: '权限管理',
        		icon: 'user-o',
                component: loadable(() => import('./pages/Detail'))
            }
        ]
	}, {
        path: '/iOS',
		name: '其它',
		icon: 'minus-square-o',
        component: loadable(() => import('./pages/Detail'))
	}
];

export default routeConfig;
