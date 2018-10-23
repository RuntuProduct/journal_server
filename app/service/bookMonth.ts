import { Service } from 'egg';

export default class BookMonthService extends Service {
  /** 根据年Id获取月数组 */
  async getByYearId(yearId: number) {
    const userId = await this.ctx.service.utils.getUserId();
    const res: any[] = [];
    const queryQueue = [];
    for (let i = 0; i < 12; i += 1) {
      const func = new Promise((resolve, reject) => {
        this.getSingle({
          where: {
            year_id: yearId,
            user_id: userId,
            month: i + 1,
          },
        }).then((data) => {
          res[i] = data;
          resolve();
        }).catch((err) => {
          reject(err);
        });
      });
      queryQueue.push(func);
    }
    await Promise.all(queryQueue);
    return res;
  }

  /** 根据动态条件获取单条月数据 */
  async getSingle(condition: any) {
    const res = await this.ctx.model.BookMonth.findOrCreate(condition).spread((data: any) => {
      return data.get();
    });
    return res;
  }
}