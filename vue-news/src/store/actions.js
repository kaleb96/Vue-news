import { fetchNewsList, fetchJobsList ,fetchAskList, fetchUserInfo, fetchItemInfo, fetchList  } from '../api/index'

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                // console.log(response)
                context.commit('SET_NEWS', response.data);
                return response;
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
    },

    FETCH_USER({ commit }, userName) {
        fetchUserInfo(userName)
        .then(({ data }) => {
            commit('SET_USER', data);
        })
        .catch();
    },

    FETCH_ITEM({ commit }, userId) {
        fetchItemInfo(userId)
        .then(({ data }) => {
            commit('SET_ITEM', data);
        })
        .catch();
    },

    FETCH_LIST({ commit }, pageName) {
        fetchList(pageName)
        .then(({ data }) => {
            commit('SET_LIST', data);
        })
        .catch();
    }
}