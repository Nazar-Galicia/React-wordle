import {dictionaryAPI} from "../api/dictionaryAPI.js";
import {randomWordAPI} from "../api/randomWordAPI.js";

export const choseWord = () => {
    return randomWordAPI.getRandomWord()
        .then(res => {
            const word = res[0].toLowerCase();

            return dictionaryAPI.searchWord(word)
                .then(() => word)
                .catch(() => choseWord());
        });
}