import axios, { Axios } from "axios"

import jsonResponse from 'axios-jsonp';

const instance = new Axios({
    withXSRFToken: true,
    withCredentials: true,
    transformRequest: [...axios.defaults.transformRequest],
    xsrfCookieName: localStorage.getItem('token'),
    xsrfHeaderName: 'X-XSRF-TOKEN',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        xDatabase: localStorage.getItem('server')
    },
    data: {
        server: localStorage.getItem('server') ?? 1
    }
    }
);

const url = import.meta.env.VITE_BACKEND_URL;

export const getToken = async () => {
    try {
        const res = await instance.get(`${url}/sanctum/csrf-cookie`);
        return res;
    } catch(err) {
        return err;
    }
}

export const getUser = async (token, server) => {
    try {
        const res = await instance.get(`${url}/api/user`, {headers: {Authorization: `Bearer ${token}`, xDatabase: server}});
        return JSON.parse(res.data);
    } catch(err) {
        return err;
    }
}

export const authentificate = async ( login, password, server) => {
    try {
        const res = await instance.post(`${url}/api/login`, {login, password, server});
        const data = JSON.parse(res.data);
        console.log(instance.defaults.headers.Authorization)
        instance.defaults.headers['Authorization'] = `Bearer ${data.token}`
        instance.defaults.headers['xDatabase'] = `${server}`
        return data;
    } catch(err) {
        return err;
    }
}

export const getForbesList = async () => {
    try {
        const res = await instance.get(`${url}/api/forbes`);
        return JSON.parse(res.data)
    } catch(err) {
        return err;
    }
}

export const getNews = async () => {
    const wall_id = "-212744239";
    
    const count = "3";
    const token = "9b3a7da39b3a7da39b3a7da37c9822ba9599b3a9b3a7da3fd49961ac9c8c03f252ce8b8";
    const api_url = `https://api.vk.com/api.php?oauth=1&method=wall.get&owner_id=${wall_id}&count=${count}&v=5.131&access_token=${token}`;
    try {
        const news = await axios.get(api_url, {adapter: jsonResponse});
        
        return news.data.response.items;
    } catch(err) {
        return err;
    }
}

export const getServerOnline = async () => {
    const ip1 = `s1.zheki444.com:22005`;
    /* const ip2 = */
    const data = await axios.get(`https://cdn.rage.mp/master`);
    return data.data[ip1].players;
}

export const changeEmail = async (email) => {
    try {
        const res = await instance.post(`${url}/api/changeEmail`, {email});
        console.log(res, 'res')
        return JSON.parse(res.data);
    }
    catch (e) {
        console.log('ERROR', e)
        return  e;
    }
}

export const changePassword = async (password, newPassword) => {
    try {
        const res = await instance.post(`${url}/api/changePassword`, {
            old_password: password,
            new_password: newPassword
        });
        return JSON.parse(res.data);
    }
    catch (e) {
        console.log(e, 'ERROR')
        return  e;
    }
}

export const createAppeal = async (data) => {
    try {
        const res = await instance.post(`${url}/api/createAppeal`, {
            ...data
        });
        
        return JSON.parse(res.data);
    } 
    catch(e) {
        console.log(e, 'ERROR');
        return e;
    }
}

export const addFileToAppeal = async (data, id) => {
    try {
        const res = await instance.post(`${url}/api/appeal/${id}/addFiles`, data, 
            {headers: {"Content-Type": "multipart/form-data"}});

        return res;
    } 
    catch(e) {
        console.log(e, 'ERROR');
        return e;
    }
}

export const getAppeal = async (search, filters) => {
    try {
        const res = await instance.get(`${url}/api/getAppeals?search=${search}&filters=${filters}`);

        return JSON.parse(res.data);
    } 
    catch(e) {
        console.log(e, 'ERROR');
        return e;
    }
}

export const getAppealById = async (id) => {
    try {
        const res = await instance.get(`${url}/api/getAppeal/${id}`);
        return JSON.parse(res.data);
    } 
    catch(e) {
        console.log(e, 'ERROR');
        return e;
    }
}

export const adminAuth = async (login, password) => {
    try {
        const res = await instance.post(`${url}/api/adminAuth`, {login, password});
        return JSON.parse(res.data);
    } catch(err) {
        console.error(err);
        return err
    }
}

export const getAdminUser = async (token) => {
    try {
        const res = await axios.get(`${url}/api/adminUser`, {headers: {Authorization: `Bearer ${localStorage.getItem('adminToken') ?? token}`}});
        return res.data;
    } catch(err) {
        console.error(err);
        return err;
    }
}

export const fetchMessages = async (id) => {
    const response = await instance.get(`${url}/api/appeal/${id}/messages`);
    return JSON.parse(response.data);
};

export const sendMessage = async (id, content, user_id, username) => {
    const response = await instance.post(`${url}/api/appeal/${id}/message`, {content, user_id, username});
    return JSON.parse(response.data);
};

export const adminSendMessage = async (id, content, admin_id) => {
    const response = await instance.post(`${url}/api/adminAppeal/${id}/message`, {content, admin_id});
    return JSON.parse(response.data);
};

export const checkIp = async () => {
    const response = await instance.get(`${url}/api/checkIp`);
    if(response.status === 403) {
        return false;
    }
    return response.data;
}

export const unitPay = async (data) => {
    const response = await instance.post(`${url}/api/unitpay/pay`, {...data});
    return JSON.parse(response.data).url;
}

export const freeKassa = async (data) => {
    const response = await instance.post(`${url}/api/freekassa/pay`, {...data});
    return JSON.parse(response.data).url;
}