import { create } from 'apisauce';

const api = create({
    baseURL: 'http://localhost:3000/',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

api.addResponseTransform((response) => {
    response.isSuccess = response.ok;
    response.data = response.data || {};
});

export default api;
