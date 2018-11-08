import { Context, Service } from 'egg';

const YEAR_MIN = 2018;
const YEAR_MAX = 4018;

const MONTH_MIN = 1;
const MONTH_MAX = 12;

export default class UtilsService extends Service {
  constructor(ctx: Context) {
    super(ctx);
  }

  /** 获取用户ID */
  async getUserId() {
    const userId = this.ctx.cookies.get('userId');
    return userId;
  }

  /** 校验年份 */
  async validateYear(year: number) {
    if (!year) {
      throw new Error('year is need');
    } else if (year < YEAR_MIN || year > YEAR_MAX) {
      throw new Error(`illegal year value: year should be between ${YEAR_MIN} and ${YEAR_MAX}`);
    }
    return true;
  }

  /** 校验月份 */
  async validateMonth(month: number) {
    if (!month) {
      throw new Error(`month is need`);
    } else if (
      month < MONTH_MIN ||
      month > MONTH_MAX
    ) {
      throw new Error(`illegal month value: month should be between ${MONTH_MIN} and ${MONTH_MAX}`);
    }
    return true;
  }
}
