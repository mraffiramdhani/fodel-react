import storage from '../redux/store';

const { store, persistor } = storage()

export const APP_URL = "http://localhost:4040"
export const USER_TOKEN = { headers: { "Authorization": `Bearer ${store.getState().auth.data.token}` } }