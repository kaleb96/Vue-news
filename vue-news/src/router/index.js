import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView';
import ItemView from '../views/ItemView';
import createListView from '../views/CreateListView.js';

Vue.use(VueRouter);

// 라우터 사용을 위한 객체 생성
export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            // path: url 주소 */
            path: '/news',
            name: 'news',
            component: createListView('NewsView'),
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListView('AskView'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListView('JobView'),
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView
        }    
    ]
});