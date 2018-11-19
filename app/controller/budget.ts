import { Controller } from 'egg';

export default class BudgetController extends Controller {
  /** set income budget */
  async setIncome() {
    const {
      id,
      income,
      tags_income,
    } = this.ctx.request.body;
    if (!id) {
      throw new Error('invalid budget target');
    } else if (typeof income !== 'number') {
      throw new Error(`invalid income value: ${income}, it should be a number`);
    }
    const nowValue = this.ctx.model.Budget.findById(id);
    if (!nowValue) {
      throw new Error(`[${id}] budget object is not found`);
    }
    this.ctx.model.Budget.update({
      ...nowValue,
      income,
      tags_income,
    });
    this.ctx.body = 'update success';
  }

  /** budget test calculation */
  async testCalculation() {
    const { value, type } = this.ctx.request.query;
    // get total value of year
    const realValue = parseInt(value, 10);
    const total = await this.service.budget.calculatedByType(type, realValue);
    const func = this.service.budget.calculatedByYear;
    this.ctx.body = {
      year: await func(total, 'year'),
      month: await func(total, 'month'),
      week: await func(total, 'week'),
      day: await func(total, 'day'),
    };
  }
}
