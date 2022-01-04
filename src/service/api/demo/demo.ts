import http from '@/service/http';
import { ILoginApi } from './types';

// 可以根据 process.env.NODE_ENV 灵活改变 base
const base = 'https://www.fastmock.site/mock/92c615b525d01085a397f32593505836/api';

const loginApi: ILoginApi = {
  login(params) {
    return http.post(`${base}/login`, params);
  }
};

export default loginApi;
