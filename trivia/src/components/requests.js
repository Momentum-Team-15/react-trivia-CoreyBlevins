import axios from 'axios'

export const requestCategories = () => {
    const url = 'https://opentdb.com/api_category.php'

    const response = axios.get(url)
    return response
}

export const requestQuestions = (id) => {
    const url = `https://opentdb.com/api.php?amount=11&category=${id}`

    const response = axios.get(url)
    return response
}
