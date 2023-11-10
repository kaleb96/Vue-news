import { fetchNewsList, fetchJobsList ,fetchAskList, fetchUserInfo, fetchItemInfo, fetchList  } from '../api/index'

export default {

    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },
    async FETCH_JOBS({ commit }) {
        try {
            const response = await fetchJobsList();
            commit('SET_JOBS', response.data);
            return response;
        } catch (error) {
            console.log(error);
        } 
    },
    async FETCH_ASK({ commit }) {
        const response = await fetchAskList();
        commit('SET_ASK', response.data);
        return response;
    },
    async FETCH_USER({ commit }, userName) {
        const response = await fetchUserInfo(userName);
        commit('SET_USER', response.data);
        return response;
    },
    async FETCH_ITEM({ commit }, userId) {
        const response = await fetchItemInfo(userId);
        commit('SET_ITEM', response.data);
        return response;
    },
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data);
        return response;
    }

    // FETCH_NEWS(context) {
    //     fetchNewsList()
    //         .then(response => {
    //             // console.log(response)
    //             context.commit('SET_NEWS', response.data);
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         });
    // },
    // FETCH_JOBS(context) {
    //     fetchJobsList()
    //         .then(response => {
    //             // console.log(response)
    //             context.commit('SET_JOBS', response.data);
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         });
    // },
    // FETCH_ASK(context) {
    //     fetchAskList()
    //     .then(response => {
    //         // console.log(response)
    //         context.commit('SET_ASK', response.data);
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     });
    // },
        // promise 방식
    // FETCH_USER({ commit }, userName) {
    //     fetchUserInfo(userName)
    //     .then(({ data }) => {
    //         commit('SET_USER', data);
    //     })
    //     .catch();
    // },

    // FETCH_ITEM({ commit }, userId) {
    //     fetchItemInfo(userId)
    //     .then(({ data }) => {
    //         commit('SET_ITEM', data);
    //     })
    //     .catch();
    // },
    // FETCH_LIST({ commit }, pageName) {
    //     return fetchList(pageName)
    //     .then( response => {
    //         commit('SET_LIST', response.data);
    //         return response;
    //     })
    //     .catch();
    // }
}