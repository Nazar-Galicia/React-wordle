const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en'

export const dictionaryAPI = {
    searchWord: (word) => {
        return fetch(`${URL}/${word}`).then(res => {
            if (res.status === 404 &&  res.ok === false) {
                throw new Error('word is not exists')
            } else {
                return res.json()
            }
        })
    }
}