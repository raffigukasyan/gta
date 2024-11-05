import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

// Базовый URL для вашего API
const apiUrl = `${import.meta.env.VITE_BACKEND_URL}/api`; // Замените на ваш реальный URL API
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
    // Получение списка ресурсов (READ)
    
    getList: (resource, params) => {
        const adminUser = JSON.parse(localStorage.getItem('adminUser'));
        const accessLvl = +adminUser.access_level;
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;

        const query = {
            sort: JSON.stringify([field, order]),
            page: page,
            perPage: perPage,
            filter: JSON.stringify(params.filter),
            accessLvl
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url, {user: {token: `Bearer ${localStorage.getItem('adminToken')}`}}).then(({ json }) => {
            return {
                data: json.data, // Данные из ответа API
                total: json.total, // Общее количество записей
            };
        });
    },

    // Получение одной записи (READ)
    getOne: (resource, params) => {
        
        const url = `${apiUrl}/${resource}/${params.id}`;
        return httpClient(url, {user: {token: `Bearer ${localStorage.getItem('adminToken')}`}}).then(({ json }) => {
            return {
                data: json,
            }
        });
    },

    // Создание новой записи (CREATE)
    create: (resource, params) => {
        return httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
            user: {token: `Bearer ${localStorage.getItem('adminToken')}`}
        }).then(({ json }) => ({
            data: json.data,
        }));
    },

    // Обновление записи (UPDATE)
    update: (resource, params) => {
        return httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
            user: {token: `Bearer ${localStorage.getItem('adminToken')}`}
        }).then(({ json }) => ({
            data: json,
        }));
    },

    // Удаление записи (DELETE)
    delete: (resource, params) => {
        const adminUser = JSON.parse(localStorage.getItem('adminUser'));
        if(+adminUser.access_level < 12) {
            return Promise.reject('Недостаточно прав!')
        }
        return httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
            user: {token: `Bearer ${localStorage.getItem('adminToken')}`}
        }).then(() => ({
            data: params.previousData,
        }));
    },

    // Получение списка записей через ссылку (для связей)
    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url, {user: {token: `Bearer ${localStorage.getItem('adminToken')}`}}).then(({ json }) => ({
            data: json.data,
        }));
    },

    // Получение записей для референсного поля
    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;

        const query = {
            sort: JSON.stringify([field, order]),
            page: page,
            perPage: perPage,
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url, {user: {token: `Bearer ${localStorage.getItem('adminToken')}`}}).then(({ json }) => ({
            data: json.data,
            total: json.total,
        }));
    },
};

export default dataProvider;
