import axios from 'axios'

export const requestCategories = () => {
    const url = 'https://opentdb.com/api_category.php'

    const response = axios.get(url)
    return response
}

export const requestQuestions = (anything) => {
    const url = `https://opentdb.com/api.php?amount=10&category=${anything}`

    const response = axios.get(url)
    return response
}