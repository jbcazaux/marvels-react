import * as axios from 'axios';
import AxiosInstance = Axios.AxiosInstance;

export class AxiosProvider {

    private static _axios: AxiosInstance;

    private static createInstance() {
        axios.defaults.baseURL = 'http://gateway.marvel.com:80';
        this._axios = axios.create({});
        return this._axios;
    }

    static axios(): AxiosInstance {
        return this._axios ? this._axios : AxiosProvider.createInstance();
    }
}
