import { fetchNewsList, fetchJobsList ,fetchAskList  } from '../api/index'

export default {
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