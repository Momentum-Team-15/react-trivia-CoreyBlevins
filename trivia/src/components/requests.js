import axios from 'axios'

export const requestCategories = () => {
    const url = 'https://opentdb.com/api_category.php'

    const response = axios.get(url)
    return response
}
