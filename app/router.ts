// <reference path='../index.d.ts' />
import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;
  const baseURL = '/api';

  router.post(`${baseURL}/login`, controller.user.login);  // 登录
  router.post(`${baseURL}/logout`, controller.user.logout); // 退出登录
  router.post(`${baseURL}/signup`, controller.user.signup); // 注册
  router.get(`${baseURL}/user`, controller.user.index); // 获取用户信息

  // 任务相关
  router.get(`${baseURL}/task`, controller.task.list); // 获取全量列表
  router.post(`${baseURL}/task`, controller.task.create); // 创建任务
  router.post(`${baseURL}/task/complete`, controller.task.completed); // 完成任务（或取消完成）

  // 预算相关
  router.post(`${baseURL}/budget/income`, controller.budget.setIncome); // 设置年预算
  router.get(`${baseURL}/budget/calculation`, controller.budget.testCalculation); // 试算预算

  // 汇总相关
  router.get(`${baseURL}/summary/today`, controller.summary.getToday); // 获取年汇总
};
