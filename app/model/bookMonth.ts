import { Application } from 'egg';
import { DB } from '../../database/definition/bookMonth';
import BaseModel from './model';

export default function BookMonthModel (app: Application) {
  return BaseModel(app, 'book_month', DB);
}
