import axios from 'axios';

const apiService = axios.create({
    baseURL: ``
});
const login = (params) => {
    return apiService.post(`login`, params).then(({ data }: { data }) => {
        return data;
    });
};

const register = (params) => {
    return apiService.post(`users`, params).then(({ data }: { data }) => {
        return data;
    });
};

const forgotPassword = (params) => {
    return apiService.post(`reset_password`, params).then(({ data }: { data }) => {
        return data;
    });
};

const changePassword = (params) => {
    return apiService.post(`change_password`, params).then(({ data }: { data }) => {
        return data;
    });
};

const UserService = {
    login,
    register,
    forgotPassword,
    changePassword
};

export default UserService;
