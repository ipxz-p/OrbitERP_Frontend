import Axios, { type InternalAxiosRequestConfig } from 'axios';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
    if (config.headers) {
        config.headers.Accept = 'application/json';
    }

    config.withCredentials = true;
    return config;
}