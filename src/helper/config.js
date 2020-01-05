export const APP_URL = "http://localhost:4040"
export const USER_TOKEN = { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } }