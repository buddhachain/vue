import Vue from "vue";
import axios from "axios";
const post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      res => {
        resolve(res);
      },
      err => {
        reject(err);
      }
    );
  });
};
const get = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.get(url + "/?t=" + new Date().getTime(), { params: data }).then(
      res => {
        resolve(res);
      },
      err => {
        reject(err);
      }
    );
  });
};
const apiGetToken = () => {
  return new Promise((resolve, reject) => {
    get("/api/vsuser/token").then(
      res => {
        if (res.data.code === 0) {
          resolve(res.data.data);
        } else {
          reject(res.data.msg);
        }
      },
      err => {
        reject(err);
      }
    );
  });
};
axios.interceptors.response.use(
  function(response) {
    // if (response.data.code == 501 || response.data.code == 507) {
    //   router.push("/");
    // }
    return response;
  },
  function(error) {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          console.log("请求错误");
          break;

        case 401:
          console.log("未授权，请登录");
          break;

        case 403:
          console.log("拒绝访问");
          break;

        case 404:
          console.log("请求错误,未找到该资源");
          break;
        case 405:
          console.log("请求方法未允许");
          break;
        case 408:
          console.log("请求超时");
          break;

        case 500:
          console.log("服务器内部错误");
          break;

        case 501:
          console.log("服务未实现");
          break;

        case 502:
          console.log("网络错误");
          break;

        case 503:
          console.log("服务不可用");
          break;

        case 504:
          console.log("网络超时");
          break;

        case 505:
          console.log("HTTP版本不受支持");
          break;
        default:
          console.log(`连接错误${error.response.status}`);
      }
    } else {
      console.log("连接到服务器失败");
    }
    return Promise.reject(error);
  }
);
Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$getToken = apiGetToken;
