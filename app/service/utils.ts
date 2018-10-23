import { Context, Service } from 'egg';

export default class UtilsService extends Service {
  constructor(ctx: Context) {
    super(ctx);
  }

  /** 获取用户ID */
  async getUserId() {
    const userId = this.ctx.cookies.get('userId');
    return userId;
  }
}
