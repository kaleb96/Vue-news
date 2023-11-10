import axios from 'axios';

// HTTP request, response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수 정리
async function fetchNewsList() { // NewsList
    // return axios.get(config.baseUrl + 'news/1.json');
    try {
        const response = await axios.get(`${config.baseUrl}news/1.json`);
        return response;
    } catch(error) {
        console.log(error);
    }
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

async function fetchAskList() {
    try {
        // return await axios.get(`${config.baseUrl}ask/1.json`);
        const response = await axios.get(`${config.baseUrl}ask/1.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function fetchUserInfo(userName) {
    try {
        return await axios.get(`${config.baseUrl}user/${userName}.json`);
    } catch (error) {
        
    }
 
}

async function fetchItemInfo(userId) {
    try {
        const response = await axios.get(`${config.baseUrl}item/${userId}.json`);
        return response;
    } catch (error) {
        console.log(error)
    }
}

async function fetchList(pageName) {
    try {
      const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
      return response;  
    } catch (error) {
        console.log(error);
    }
}

export { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo, fetchList }