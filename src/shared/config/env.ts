const API_BASE_URL = process.env.REACT_APP_API_BASE_URL ?? ''

const AUTH_LOGIN = process.env.REACT_APP_AUTH_LOGIN ?? ''
const AUTH_PASSWORD = process.env.REACT_APP_AUTH_PASSWORD ?? ''

if (!API_BASE_URL) {
  throw new Error('Переменная окружения API_BASE_URL не найдена')
}

if (!AUTH_LOGIN) {
  throw new Error('Переменная окружения AUTH_LOGIN не найдена')
}

if (!AUTH_PASSWORD) {
  throw new Error('Переменная окружения AUTH_PASSWORD не найдена')
}

export const ENV = {
  API_BASE_URL,
  AUTH_LOGIN,
  AUTH_PASSWORD,
}
