import * as axios from 'axios';
import {Md5} from 'ts-md5/dist/md5';
import AxiosInstance = Axios.AxiosInstance;

export default class AxiosProvider {

    private static _axios: AxiosInstance;
    private static API_PUBLIC = '298bab46381a6daaaee19aa5c8cafea5';
    private static API_PRIVATE = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';
    private static BASE_URL = 'http://gateway.marvel.com:80';

    private static createInstance() {
        axios.defaults.baseURL = this.BASE_URL;
        axios.interceptors.request.use(
            config => Object.assign(config, {url: this.authUrl(config.url)}),
            error => Promise.reject(error)
        );
        this._axios = axios.create({});
        return this._axios;
    }

    static axios(): AxiosInstance {
        return this._axios ? this._axios : AxiosProvider.createInstance();
    }

    static authUrl(url: string): string {
        const ts = this.getTimestampInSeconds();
        return this.authUrlWithTimestamp(url, ts);
    }

    static authUrlWithTimestamp(url: string, ts: number): string {
        let params = '?';
        params += this.ts(ts);
        params += '&';
        params += this.apiKey();
        params += '&';
        params += this.hash(ts);

        return url + params;
    }

    private static ts(ts: number): string {
        return 'ts=' + ts;
    }
    private static apiKey(): string {
        return 'apikey=' + this.API_PUBLIC;
    }
    private static hash(ts: number): string {
        const concat = ts + this.API_PRIVATE + this.API_PUBLIC;
        return 'hash=' + Md5.hashStr(concat);
    }
    static getTimestampInSeconds() {
        return Math.floor((new Date()).getTime() / 1000);
    }
}
