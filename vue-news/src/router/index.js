import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';
import UserView from '../views/UserView';
import ItemView from '../views/ItemView';

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
            // components: url 주소로 갔을 때 표시될 컴포넌트 */
            component: NewsView,
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JobsView,
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