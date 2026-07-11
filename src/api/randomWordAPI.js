const URL = 'https://random-word-api.herokuapp.com/word?length=5'

export const randomWordAPI = {
    getRandomWord: () => {
        return fetch(URL).then(res => res.json())
    }
}