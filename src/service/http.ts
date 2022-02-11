import axios, { AxiosRequestConfig } from 'axios';
import router from '@/router';
import { useCookies } from '@vueuse/integrations/useCookies';

const cookies = useCookies(['5c24_token']);

/**
 * 错误提示函数
 */
const tip = (msg: string) => {
  window.$message.error(msg);
};

/**
 * 跳转登录页
 * 携带当前页面路由，在登陆页面完成后返回当前页面
 */
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: <any>router.currentRoute
    }
  });
};

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status: number, msg: string) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      toLogin();
      break;
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      tip('登录过期，请重新登录');
      cookies.remove('5c24_token');
      setTimeout(() => {
        toLogin();
      }, 500);
      break;
    // 404请求不存在
    case 404:
      tip('请求的资源不存在');
      break;
    default:
      tip(msg);
  }
};

// 创建axios实例
const instance = axios.create({
  timeout: 1000 * 15
});
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 请求拦截
instance.interceptors.request.use(
  (config: AxiosRequestConfig<any>) => {
    const token = cookies.get('5c24_token');
    if (token) {
      //@ts-ignore
      config.headers.token = token;
    }
    return config;
  },
  (err) => err
);
// 响应拦截
instance.interceptors.response.use(
  // 请求成功
  (res) => res,
  // 请求失败
  (err) => err
);

interface ResType<T> {
  code: number;
  data?: T;
  msg: string;
  err?: string;
}

interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>;
  post<T>(url: string, params?: unknown): Promise<ResType<T>>;
  upload<T>(url: string, params: unknown): Promise<ResType<T>>;
}
const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      window.$loadingBar.start();
      axios
        .get(url, { params })
        .then((res) => {
          if (res.data.code === 200) {
            window.$loadingBar.finish();
            resolve(res.data);
          } else {
            window.$loadingBar.error();
            reject(res.data);
            errorHandle(res.data.code, res.data.message);
          }
        })
        .catch((err) => {
          window.$loadingBar.error();
          reject(err.data);
        });
    });
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      window.$loadingBar.start();
      axios
        .post(url, params)
        .then((res) => {
          if (res.data.code === 200) {
            window.$loadingBar.finish();
            resolve(res.data);
          } else {
            window.$loadingBar.error();
            reject(res.data);
            errorHandle(res.data.code, res.data.message);
          }
        })
        .catch((err) => {
          window.$loadingBar.error();
          reject(err.data);
        });
    });
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      window.$loadingBar.start();
      axios
        .post(url, file, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then((res) => {
          window.$loadingBar.finish();
          resolve(res.data);
        })
        .catch((err) => {
          window.$loadingBar.finish();
          reject(err.data);
        });
    });
  }
};

export default http;
