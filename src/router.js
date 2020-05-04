/**
 * desc：单页面路由
 * author：DestinyJun
 * date：  2020/5/3 22:51
 */
// 引入页面文件
import foo from './view/foo';
import bar from './view/bar';

const routes = {
  './foo': foo,
  './bar': bar
};

// router类，用来控制根据当前URL切换
class Router {
  start() {
    // 点击浏览器后退 / 前进按钮时会触发 window.onpopstate 事件，我们在这时切换到相应页面
    window.addEventListener('popstate', () => {
      this.load(location.pathname);
    });

    // 打开页面时加载当前页面
    this.load(location.pathname);
  }

  // 前往 path，变更地址栏 URL，并加载相应页面
  go(path) {
    // 变更地址栏 URL
    history.pushState({}, '', path);
    // 加载页面
    this.load(path);
  }

  // 加载 path 路径的页面
  load(path) {
    // 首页
    if (path === '/') {
      path = '/foo';
    }

    // 创建页面实例
    const view = new routes[path]();

    // 调用页面方法，把页面加载到 document.body 中
    view.mount(document.body);
  }
}

// 导出 router 实例
export default new Router();
