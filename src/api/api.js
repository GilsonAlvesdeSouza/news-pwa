const params = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application-json',
    }
};

const URL = 'http://localhost:3001/api';

function getNews(subject) {
    return fetch(`${URL}/${subject}`, params)
        .then((response) => response.json())
        .catch((error) => console.log('Ocorreu um Erro => ', error));
}

function getNewsById(subject, id) {
    return fetch(`${URL}/${subject}/${id}`, params)
        .then((response) => response.json())
        .catch((error) => console.log('Ocorreu um Erro => ', error));
}

const Api = {
    getNews,
    getNewsById,
};

export default Api;