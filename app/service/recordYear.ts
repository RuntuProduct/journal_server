import { Context, Service } from 'egg';

export default class RecordYearService extends Service {
  constructor(ctx: Context) {
    super(ctx);
  }

  /** 获取某年数据 */
  async getSingle(year: number) {
    const userId = await this.service.utils.getUserId();
    const target = await this.ctx.model.RecordYear.findOrCreate({
      where: {
        user_id: userId,
        year,
      },
    }).spread((data: any) => {
      return data.get();
    });
    return target;
  }
}
