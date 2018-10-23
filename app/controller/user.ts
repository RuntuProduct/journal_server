import { Controller } from 'egg';

export default class UserController extends Controller {
  /** 获取用户详情 */
  public async index() {
    const userId = await this.ctx.service.utils.getUserId();
    if (!userId || userId === '') {
      this.ctx.body = 'user not login yet';
      this.ctx.status = 401;
      return;
    }
    try {
      const data = await this.ctx.model.User.findById(
        userId,
        { attributes: {exclude: ['account', 'password']} },
      );
      if (!data) {
        this.ctx.body = 'user not exist';
        this.ctx.status = 401;
      } else {
        this.ctx.body = data;
      }
    } catch (e) {
      this.logger.error(e.message);
      this.ctx.body = e.message;
      this.ctx.status = 500;
    }
  }

  /** 用户登录 */
  public async login() {

    const { account, password  } = this.ctx.request.body;
    try {
      const data = await this.ctx.model.User.findOne({
        where: { account, password },
        attributes: {exclude: ['account', 'password']},
      });
      const now = new Date();
      const targetTime = new Date();
      if (data) {
        targetTime.setTime(now.getTime() + 1800000);
        this.ctx.cookies.set('userId', data.id, {
          // expires: targetTime,
          // httpOnly: false,
          maxAge: 300 * 60 * 1000,
        });
        // 调用 rotateCsrfSecret 刷新用户的 CSRF token
        this.ctx.rotateCsrfSecret();
        this.ctx.body = data;
      } else {
        throw new Error('user not exist');
      }
    } catch (e) {
      this.logger.error(e.message);
      this.ctx.body = e.message;
      this.ctx.status = 500;
    }
  }

  /** 退出登录 */
  public async logout() {
    this.ctx.cookies.set('userId', '', {
      maxAge: 0,
    });
    this.ctx.body = 'logout success';
  }

  /** 用户注册 */
  public async signup() {
    const {
      username = `用户-${Date.parse((new Date()).toLocaleDateString())}`,
      account,
      password,
    } = this.ctx.request.body;
    if (!account) {
      throw new Error(`account is need, but got ${account}`);
    } else if (!password) {
      throw new Error(`password is need, but got ${password}`);
    }
    // check account if used
    const oldData = await this.ctx.model.User.findOne({
      where: { account },
    });
    if (oldData) {
      throw new Error(`account: ${account} had exist`);
    }
    // insert user data
    await this.ctx.model.User.create({
      account,
      password,
      username,
    });
    this.ctx.body = 'signup success';
  }
}
