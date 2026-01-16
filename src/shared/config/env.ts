const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

if (!API_BASE_URL){
    throw new Error('Переменная окружения API_BASE_URL не найдена')
}

export const ENV = {
    API_BASE_URL
}