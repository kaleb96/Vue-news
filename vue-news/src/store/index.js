import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsList } from '../api/index'
import { fetchJobsList } from '../api/index'
import { fetchAskList } from '../api/index'

Vue.use(Vuex);

export const store = new Vuex.Store({
   
    state: {
        news: [],
        jobs: [],
        ask:[]
    },
    mutations : {
        SET_NEWS(state, data) {
            state.news = data;
        },

        SET_JOBS(state, data) {
            state.jobs = data;
        },

        SET_ASK(state, data) {
            state.ask = data;
        }

    },
    actions: {

        FETCH_NEWS(context) {
            fetchNewsList()
                .then(response => {
                    // console.log(response)
                    context.commit('SET_NEWS', response.data);
                })
                .catch(error => {
                    console.log(error)
                });
        },

        FETCH_JOBS(context) {
            fetchJobsList()
                .then(response => {
                    // console.log(response)
                    context.commit('SET_JOBS', response.data);
                })
                .catch(error => {
                    console.log(error)
                });
        },

        FETCH_ASK(context) {
            fetchAskList()
            .then(response => {
                // console.log(response)
                context.commit('SET_ASK', response.data);
            })
            .catch(error => {
                console.log(error)
            });
        }
    }
});