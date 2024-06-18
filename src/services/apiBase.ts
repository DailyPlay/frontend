import axios, {AxiosResponse} from 'axios';
import {API_SERVER} from '@/config';
import storageService from '@/utils//functions/storageService';

interface IApiRes<T> {
  // 0 === 정상
  code: number;
  response?: T;
  message?: string;
}

interface IReturnType<resType> {
  get: () => Promise<AxiosResponse<IApiRes<resType>>>;
  post: () => Promise<AxiosResponse<IApiRes<resType>>>;
  delete: () => Promise<AxiosResponse<IApiRes<resType>>>;
  put: () => Promise<AxiosResponse<IApiRes<resType>>>;
  patch: () => Promise<AxiosResponse<IApiRes<resType>>>;
}

export function ApiService<reqType, resType>(
  url: string,
  body?: reqType,
): IReturnType<resType> {
  return {
    get: () => instance.get(url),
    post: () => instance.post(url, body),
    delete: () => instance.delete(url),
    put: () => instance.put(url, body),
    patch: () => instance.patch(url, body),
  };
}
const instance = axios.create({
  // config 만들어 놓을 것
  baseURL: API_SERVER,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: '',
  },
});

instance.interceptors.request.use(
  async req => {
    const token = await storageService.getData('token');

    if (token.accessToken) {
      req.headers.Authorization = `Bearer ${token.accessToken}`;
    }

    return req;
  },
  err => {
    console.log(err);
    return Promise.reject(err);
  },
);

instance.interceptors.response.use(
  res => {
    console.log('res', res);

    return res;
  },
  err => {
    console.log('err', err);

    if (err.response?.status === 401) {
      // 토큰 리프레시
      return;
    }

    // GlobalErrorBoundary에서 에러 처리
    throw new Error(err);
  },
);
