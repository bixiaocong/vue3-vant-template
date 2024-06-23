import axios, { AxiosRequestConfig } from 'axios';

// 定义请求参数类型
interface RequestParams {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    data?: any;
    headers?: any;
}
// 封装axios请求
const request = async (params: RequestParams): Promise<any> => {
    try {
        const { url, method = 'GET', data, headers = {} } = params;
        headers['PersonalAuth'] = 'Bearer ' + localStorage.getItem('token') || '';
        const config: AxiosRequestConfig = {
            baseURL: '/api',
            url,
            method,
            data,
            headers,
        };

        const response = await axios(config);
        if (+response.data.code !== 200 && response.data.msg.indexOf('Login') !== -1){
            // 登录失效
            localStorage.removeItem('token');
            window.wx.miniProgram.redirectTo({
                url: '/pages/login/login'
            })
        }
        return response.data;
    } catch (error: any) {
        throw new Error(error);
    }
};

export default request;