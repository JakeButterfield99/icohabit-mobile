import axios, { AxiosResponse } from 'axios';

import { API_URL } from './config';
import storageService from './services/storage.service';

const defaultOptions = {
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
}

export const newAxios = axios.create(defaultOptions);
const authAxios = axios.create(defaultOptions);

authAxios.interceptors.request.use(
    async (request: any) => {
        const token = await storageService.GetData('access_token');
        request.headers.Authorization = `Bearer ${token}`
        return request;
    }
);

authAxios.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async (error) => {
        const { response } = error;
        if (response.status === 401) {
            await storageService.RemoveData('access_token');
        }
        return response;
    }
)

export default authAxios;