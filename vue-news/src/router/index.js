import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';

Vue.use(VueRouter);

// 라우터 사용을 위한 객체 생성
export const router = new VueRouter({
    routes: [
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
        }    
    ]
});