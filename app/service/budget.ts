import { Service } from 'egg';
import * as moment from 'moment';

export default class BudgetService extends Service {
  /** calculated budget by value of year and valueType */
  async calculatedByYear(
    yearValue: number,
    calculationType: string,
  ) {
    let resValue;
    if (calculationType === 'year') {
      resValue = Math.floor(yearValue);
    } else if (calculationType === 'month') {
      resValue = Math.floor(yearValue / 12);
    } else if (calculationType === 'week') {
      const weeks = moment().weeksInYear();
      resValue = Math.floor(yearValue / weeks);
    } else if (calculationType === 'day') {
      const days = moment().dayOfYear();
      resValue = Math.floor(yearValue / days);
    } else {
      throw new Error(`invalid calculationType: ${calculationType}`);
    }
    return resValue;
  }

  /** calculated by different type of value */
  async calculatedByType(
    type: string,
    value: number,
  ) {
    let resValue;
    if (type === 'year') {
      resValue = Math.ceil(value);
    } else if (type === 'month') {
      resValue = Math.ceil(value * 12);
    } else if (type === 'week') {
      const weeks = moment().weeksInYear();
      resValue = Math.ceil(value * weeks);
    } else if (type === 'day') {
      const days = moment().dayOfYear();
      resValue = Math.ceil(value * days);
    } else {
      throw new Error(`invalid type to calculated: ${type}`);
    }
    return resValue;
  }
}
