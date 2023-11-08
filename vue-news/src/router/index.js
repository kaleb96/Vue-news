import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView';
import ItemView from '../views/ItemView';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';
// import createListView from '../views/CreateListView.js';

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
            component: NewsView,
            beforeEnter: (to, from, next) => { //라우터 네비게이션 가드
                bus.$emit('start:spinner');
                setTimeout(() => {
                    store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log('News-fetched');
                        next();
                    })
                    .catch((error) => {
                    console.log(error);
                    });
                }, 3000);
            }
            // component: createListView('NewsView'),
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                setTimeout(() => {
                    store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log('Ask-fetched');
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                }, 3000)
            }
            // component: createListView('AskView'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            // component: createListView('JobView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                setTimeout(() => {
                    store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log('Jobs-fetched');
                        next();
                    })
                }, 3000);
            }
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